import type {
	MotdResponse,
	LoginResponse,
	Name,
	NameResponse,
	APIResponse,
	APIError
} from './types';
import AddressManager from '$lib/kromer/managers/AddressManager';
import TransactionManager from '$lib/kromer/managers/TransactionManager';
import NameManager from './managers/NameManager';

export interface KromerApiOptions {
	syncNode: string;
}

export class KromerApi {
	public readonly options: KromerApiOptions = {
		syncNode: 'https://kromer.reconnected.cc/api/krist/'
	};

	private readonly addressManager: AddressManager;
	private readonly transactionManager: TransactionManager;
	private readonly nameManager: NameManager;

	constructor(options: Partial<KromerApiOptions> = {}) {
		this.options = {
			...this.options,
			...options
		};

		if (!this.options.syncNode.endsWith('/')) {
			this.options.syncNode += '/';
		}

		this.addressManager = new AddressManager(this);
		this.transactionManager = new TransactionManager(this);
		this.nameManager = new NameManager(this);
	}

	/**
	 * Everything related to Kromer Addresses
	 */
	public get addresses() {
		return this.addressManager;
	}

	/**
	 * Everything related to Kromer Transactions
	 */
	public get transactions() {
		return this.transactionManager;
	}

	/**
	 * Everything related to Kromer Names
	 */
	public get names() {
		return this.nameManager;
	}

	/**
	 * Fetches from the Kromer API
	 * @param method The method to use
	 * @param uri The URI, without a beginning slash (/)
	 * @param body POST body
	 * @private
	 * @returns The response
	 * @throws {APIError}
	 */
	private async fetch<T>(method: 'POST' | 'GET', uri: string, body: unknown = null): Promise<T> {
		let response: Response;
		if (method === 'POST') {
			response = await fetch(this.options.syncNode + uri, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} else {
			response = await fetch(this.options.syncNode + uri);
		}

		const data: unknown = await response.json();

		if (!response.ok || !(data as APIResponse).ok) {
			if (!(data as APIResponse).ok) {
				throw data as APIError;
			} else {
				throw {
					ok: false,
					error: 'api_error',
					message: 'Unknown API error'
				} as APIError;
			}
		}

		return data as T;
	}

	/**
	 * Sends a raw GET to Kromer. This should usually not be used outside this package!
	 * @param uri The URI, without a beginning slash (/)
	 * @param query Query parameters as an object
	 * @returns The resulting response
	 * @throws {APIError}
	 */
	public async get<T>(uri: string, query: unknown = null): Promise<T> {
		if (query) {
			const params = new URLSearchParams();
			for (const [key, value] of Object.entries(query)) {
				if (value !== null && value !== undefined) {
					params.append(key, String(value));
				}
			}
			uri += '?' + params.toString();
		}

		return await this.fetch<T>('GET', uri);
	}

	/**
	 * Sends a raw POST to Kromer. This should usually not be used outside this package!
	 * @param uri The URI, without a beginning slash (/)
	 * @param body The POST body
	 * @throws {APIError}
	 */
	public async post<T>(uri: string, body: unknown): Promise<T> {
		return await this.fetch<T>('POST', uri, body);
	}

	/**
	 * Authenticates a private key with Kromer
	 * Useful for retrieving the address of a private key
	 * @param privatekey
	 * @returns The login response
	 * @throws {APIError}
	 */
	public async login(privatekey: string): Promise<LoginResponse> {
		return (await this.post('login', { privatekey })) as LoginResponse;
	}

	/**
	 * Retrieves the current Kromer MOTD
	 * @returns The MOTD object
	 * @throws {APIError}
	 */
	public async getMOTD(): Promise<MotdResponse> {
		const motd: MotdResponse = (await this.get('motd')) as MotdResponse;
		motd.motd_set = new Date(motd.motd_set);
		return motd;
	}
}

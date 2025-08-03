import type {
	Address,
	AddressesResponse,
	AddressQuery,
	AddressResponse,
	APIError,
	NamesResponse,
	PaginatedQuery,
	TransactionsResponse
} from '$lib/kromer/types';

import { BaseManager } from '$lib/kromer/managers/BaseManager';

export default class AddressManager extends BaseManager {
	/**
	 * Resolves a string (either a Kromer address or name) to its Address object
	 * @param addrOrName
	 * @returns The resolved Address
	 * @throws {APIError}
	 */
	public async resolve(addrOrName: string): Promise<Address> {
		addrOrName = addrOrName.toLowerCase();
		//TODO: Make these go off of motd values
		if (addrOrName.length === 10 && (addrOrName.startsWith('k') || addrOrName === 'serverwelf')) {
			return await this.get(addrOrName);
		} else if (addrOrName.length > 4 && addrOrName.endsWith('.kro')) {
			const name = await this.api.names.get(addrOrName);
			return await this.get(name.owner);
		} else {
			throw {
				ok: false,
				error: 'invalid_format',
				message: 'Must be either an address (ks0d5iqb6p) or a name (reconnected.kro)'
			} as APIError;
		}
	}

	/**
	 * Retrieves all addresses
	 * @param query Paginated query options
	 * @returns All addresses
	 * @throws {APIError}
	 */
	public async getAll(query: PaginatedQuery): Promise<AddressesResponse> {
		const response = await this.api.get<AddressesResponse>('addresses', query);
		return this.wrapAddressResponse(response);
	}

	/**
	 * Retrieves all addresses, sorted by the richest
	 * @param query Paginated query options
	 * @returns Sorted addresses
	 * @throws {APIError}
	 */
	public async getRich(query: PaginatedQuery): Promise<AddressesResponse> {
		const response = await this.api.get<AddressesResponse>('addresses/rich', query);
		return this.wrapAddressResponse(response);
	}

	/**
	 * Retrieves a single address
	 * @param address The address to retrieve (e.g. k000000000)
	 * @param query Additional query parameters
	 * @returns The found address
	 * @throws {APIError}
	 */
	public async get(address: string, query?: AddressQuery): Promise<Address> {
		const response = await this.api.get<AddressResponse>(`addresses/${address}`, query);
		return this.wrapAddress(response.address);
	}

	/**
	 * Retrieves the names an address owns
	 * @param address The address to search for
	 * @param query Pagination options
	 * @returns Found names
	 * @throws {APIError}
	 */
	public async getNames(address: string, query?: PaginatedQuery): Promise<NamesResponse> {
		const response = await this.api.get<NamesResponse>(`addresses/${address}/names`, query);
		return this.wrapNameResponse(response);
	}

	/**
	 * Retrieves the transactions of an address
	 * @param address The address to search for
	 * @param query Pagination options
	 * @returns Found transactions
	 * @throws {APIError}
	 */
	public async getTransactions(
		address: string,
		query?: PaginatedQuery
	): Promise<TransactionsResponse> {
		const response = await this.api.get<TransactionsResponse>(
			`addresses/${address}/transactions`,
			query
		);
		return this.wrapTransactionResponse(response);
	}
}

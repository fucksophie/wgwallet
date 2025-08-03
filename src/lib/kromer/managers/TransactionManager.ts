import { BaseManager } from '$lib/kromer/managers/BaseManager';
import type {
	MakeTransactionBody,
	MakeTransactionResponse,
	Transaction,
	TransactionMetadata,
	TransactionMetadataEntry,
	TransactionQuery,
	TransactionResponse,
	TransactionsResponse,
	TransactionWithMeta
} from '$lib/kromer/types';

export default class TransactionManager extends BaseManager {
	/**
	 * Retrieves all transactions
	 * @param query Transaction query options
	 * @returns Found transactions
	 * @throws {APIError}
	 */
	public async getAll(query?: TransactionQuery): Promise<TransactionsResponse> {
		const response = await this.api.get<TransactionsResponse>('transactions', query);
		return this.wrapTransactionResponse(response);
	}

	/**
	 * Retrieves all transactions, sorted by the latest
	 * @param query transaction query options
	 * @returns Sorted transactions
	 * @throws {APIError}
	 */
	public async getLatest(query?: TransactionQuery): Promise<TransactionsResponse> {
		const response = await this.api.get<TransactionsResponse>('transactions/latest', query);
		return this.wrapTransactionResponse(response);
	}

	/**
	 * Retrieves a single transaction
	 * @param id The ID of the transaction to retrieve
	 * @returns The found transaction
	 * @throws {APIError}
	 */
	public async get(id: number | string): Promise<Transaction> {
		const response = await this.api.get<TransactionResponse>(`transactions/${id}`);
		return this.wrapTransaction(response.transaction);
	}

	/**
	 * Retrieves a transaction with parsed metadata
	 * @param id The ID of the transaction to retrieve
	 * @returns The found transaction, with "meta"
	 * @throws {APIError}
	 */
	public async getWithMeta(id: number | string): Promise<TransactionWithMeta> {
		const transaction = (await this.get(id)) as TransactionWithMeta;
		transaction.meta = this.parseMetadata(transaction);
		return transaction;
	}

	/**
	 * Parses the metadata of a transaction
	 * @param transaction The transaction to parse
	 * @returns The parsed metadata
	 */
	public parseMetadata(transaction: Transaction): TransactionMetadata {
		const metadata: TransactionMetadata = {
			entries: []
		};

		if (!transaction.metadata || transaction.metadata.length === 0) {
			return metadata;
		}

		metadata.entries = transaction.metadata
			.split(';')
			.map((entry) => entry.split('='))
			.map(([name, value]) => {
				return { name, value } as TransactionMetadataEntry;
			});

		// Minecraft player parsing
		const uuid = metadata.entries.find((x) => x.name === 'useruuid');
		const name = metadata.entries.find((x) => x.name === 'username');
		if (uuid && name && uuid.value.length === 36 && name.value.length > 0) {
			metadata.minecraftPlayer = {
				uuid: uuid.value,
				name: name.value
			};
			metadata.entries = metadata.entries.filter(
				(x) => x.name !== 'useruuid' && x.name !== 'username'
			);
		}

		return metadata;
	}

	public async send(body: MakeTransactionBody): Promise<Transaction> {
		const response = await this.api.post<MakeTransactionResponse>('transactions', body);
		return this.wrapTransaction(response.transaction);
	}
}

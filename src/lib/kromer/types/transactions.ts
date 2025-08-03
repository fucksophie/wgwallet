import type { Paginated, PaginatedQuery } from './pagination';
import type { APIResponse } from './APIResponse';

export type TransactionType =
	| 'mined'
	| 'transfer'
	| 'name_purchase'
	| 'name_a_record'
	| 'name_transfer';

export type TransactionQuery = PaginatedQuery & {
	excludeMined?: boolean;
};

export type Transaction = {
	type: TransactionType;
	id: number;
	from: string | null;
	to: string | 'a' | 'name';
	value: number;
	time: Date;
	name?: string | null;
	metadata?: string | null;
	sent_metaname?: string | null;
	sent_name?: string | null;
};

export type TransactionMetadataEntry = {
	name: string;
	value: string;
};

export type MinecraftPlayer = {
	uuid: string;
	name: string;
};

export type TransactionMetadata = {
	minecraftPlayer?: MinecraftPlayer;
	entries: TransactionMetadataEntry[];
};

export type TransactionsResponse = Paginated & {
	transactions: Transaction[];
};

export type TransactionResponse = APIResponse & {
	transaction: Transaction;
};

export type TransactionWithMeta = Transaction & {
	meta?: TransactionMetadata;
};

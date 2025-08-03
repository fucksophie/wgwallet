import type { Transaction } from './transactions';
import type { APIResponse } from './APIResponse';

export type MakeTransactionBody = {
	privatekey: string;
	to: string;
	amount: number;
	metadata?: string;
};

export type MakeTransactionResponse = APIResponse & {
	transaction: Transaction;
};

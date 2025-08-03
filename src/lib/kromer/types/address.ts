import type { Paginated } from './pagination';
import type { APIResponse } from './APIResponse';

export type AddressQuery = {
	fetchNames?: boolean;
};

export type Address = {
	address: string;
	balance: number;
	totalin: number;
	totalout: number;
	firstseen: Date;
};

export type AddressResponse = APIResponse & {
	address: Address;
};

export type AddressesResponse = Paginated & {
	addresses: Address[];
};

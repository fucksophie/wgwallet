import type { APIResponse } from './APIResponse';
import type { Paginated } from './pagination';

export type RegisterNameBody = {
	privatekey: string;
};

export type Name = {
	name: string;
	owner: string;
	original_owner: string;
	registered: Date;
	updated: Date;
	transferred?: Date;
	a?: string;
	unpaid: number;
};

export type NameResponse = APIResponse & {
	name: Name;
};

export type NamesResponse = Paginated & {
	names: Name[];
};

export type NameCostResponse = APIResponse & {
	name_cost: number;
};

export type NameCheckResponse = APIResponse & {
	available: boolean;
};

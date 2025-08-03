import type { APIResponse } from './APIResponse';

export type Paginated = APIResponse & {
	count: number;
	total: number;
};

export type PaginatedQuery = {
	limit?: number;
	offset?: number;
};

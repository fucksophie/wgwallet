import type { APIResponse } from './APIResponse';

export type LoginResponse = APIResponse & {
	authed: boolean;
	address?: string;
};

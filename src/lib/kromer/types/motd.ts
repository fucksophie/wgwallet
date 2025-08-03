import type { APIResponse } from './APIResponse';

export type MotdPackage = {
	name: string;
	version: string;
	author: string;
	license: string;
	repository: string;
};

export type MotdConstants = {
	wallet_version: number;
	name_cost: number;
};

export type MotdCurrency = {
	address_prefix: string;
	name_suffix: string;
	currency_name: string;
	currency_symbol: string;
};

export type MotdResponse = APIResponse & {
	motd: string;
	motd_set: Date;
	server_time: Date;
	public_url: string;
	public_ws_url: string;
	debug_mode: boolean;
	package: MotdPackage;
	constants: MotdConstants;
	currency: MotdCurrency;
};

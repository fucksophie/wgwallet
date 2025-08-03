import type {
	Address,
	AddressesResponse,
	Name,
	NamesResponse,
	Transaction,
	TransactionsResponse
} from '$lib/kromer/types';
import type { KromerApi } from '$lib/kromer/KromerApi';

export abstract class BaseManager {
	constructor(protected readonly api: KromerApi) {}

	protected wrapAddress(address: Address): Address {
		address.firstseen = new Date(address.firstseen);
		return address;
	}

	protected wrapAddressResponse(response: AddressesResponse): AddressesResponse {
		response.addresses = response.addresses.map((x) => this.wrapAddress(x));
		return response;
	}

	protected wrapTransaction(transaction: Transaction): Transaction {
		transaction.time = new Date(transaction.time);
		return transaction;
	}

	protected wrapTransactionResponse(response: TransactionsResponse): TransactionsResponse {
		response.transactions = response.transactions.map((x) => this.wrapTransaction(x));
		return response;
	}

	protected wrapName(name: Name): Name {
		name.registered = new Date(name.registered);
		name.updated = new Date(name.updated);
		name.transferred = name.transferred ? new Date(name.transferred) : undefined;
		return name;
	}

	protected wrapNameResponse(response: NamesResponse): NamesResponse {
		response.names = response.names.map((x) => this.wrapName(x));
		return response;
	}
}

import nock from 'nock';

type Params<T> = { url: string, response: T, status: number, query? : boolean | Record<string, string | boolean > };

export class ApiMock {
	public api: nock.Scope;
	private basePath: string;

	constructor(config: { basePath :string, host?: string }) {
		const host = config.host || 'http://localhost';
		this.api = nock(host);
		this.basePath = config.basePath || '';
	}

	public get<T>({ url, status, response, query } : Params<T>) {
		const apiCall = this.api.get(`${this.basePath}${url}`);
		return query ? apiCall.query(query).reply(status, response) : apiCall.reply(status, response);
	}

	public post<T>({ url, status, response } : Params<T>) {
		return this.api.post(`${this.basePath}${url}`).reply(status, response);
	}

	public put<T>({ url, status, response } : Params<T>) {
		return this.api.put(`${this.basePath}${url}`).reply(status, response);
	}

	public delete<T>({ url, status, response } : Params<T>) {
		return this.api.delete(`${this.basePath}${url}`).reply(status, response);
	}

	public patch<T>({ url, status, response } : Params<T>) {
		return this.api.patch(`${this.basePath}${url}`).reply(status, response);
	}

	public cleanAll() {
		nock.cleanAll();
	}

	public restore() {
		nock.restore();
	}
}
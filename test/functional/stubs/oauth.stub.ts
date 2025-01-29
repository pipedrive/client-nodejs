import { Resolves } from '../constants';
import { ApiMock } from './api.stub';

export class OauthApiMock extends ApiMock {
	constructor() {
		super({
			basePath: '/oauth',
		});
	}

	public refresh<T>(resolves: Resolves<T>, status = 200) {
		return this.api.post('/oauth/token').reply(status, resolves);
	}
}


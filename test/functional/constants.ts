
export const oauth2Config = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

export type Resolves<T> = T | Record<string, unknown>;

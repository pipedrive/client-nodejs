
export const oauth2Config = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

export type Resolves<T> = T | Record<string, unknown>;

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

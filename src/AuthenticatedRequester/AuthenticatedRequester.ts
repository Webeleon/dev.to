import fetch from 'node-fetch';
import * as querystring from 'query-string';

export const BASE_API_URL = 'https://dev.to/api/';

export type responseSerializer<Return> = (data: any) => Return;

export class AuthenticatedRequester {
  constructor(
    protected readonly apiKey: string,
    protected readonly serialize: boolean = true,
  ) {
    if (!apiKey) throw new Error('dev.to API key required.');
  }

  async get<QueryParams, Return>(route: string, query: QueryParams, serializer?: responseSerializer<Return>): Promise<Return> {
    const qs = query ? `?${querystring.stringify(query)}` : '';
    const url = `${BASE_API_URL}${route}${qs}`;
    const json = await this.request(
      url
    );
    return serializer && this.serialize ? serializer(json) : (json as Return);
  }

  async request(url: string, body?: string, method = 'get'): Promise<any> {
    const response = await fetch(
      url,
      {
        method,
        headers: {
          'api-key': this.apiKey,
          'Content-Type': 'application/json',
        }
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }
}
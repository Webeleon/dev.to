import { AuthenticatedRequester } from './AuthenticatedRequester/AuthenticatedRequester';
import { ArticleApi } from './ArticleApi/ArticleApi';

export class DevTo extends AuthenticatedRequester {
  articleApi: ArticleApi;

  constructor(apiKey: string) {
    super(apiKey);
    this.articleApi = new ArticleApi(apiKey);
  }
}

export * from './ArticleApi/ArticleApi';
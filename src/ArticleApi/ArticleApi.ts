import { AuthenticatedRequester } from '../AuthenticatedRequester/AuthenticatedRequester';
import { Article } from '../interfaces/Article';
import { PaginatedQuery } from '../interfaces/query/Paginated';

export class ArticleApi extends AuthenticatedRequester {

  async getPublishedArticleById(id: string): Promise<Article> {
    return this.get<undefined, Article>(
      `/articles/${id}`,
      undefined,
      ArticleApi.serializeArticle,
    )
  }
  async getUserPublishedArticle(page = 1 , per_page = 30): Promise<Article[]> {
    return this.get<PaginatedQuery, Article[]>(
      '/articles/me/published',
      { page, per_page },
      ArticleApi.serializeArticles,
      );
  }

  static serializeArticles(data: any[]): Article[] {
    return data.map(ArticleApi.serializeArticle);
  }

  static serializeArticle(data: any): Article {
    return {
      type_of: data.type_of,
      id: parseInt(data.id),
      title: data.title,
      description: data.description,
      cover_image: data.cover_image,
      readable_publish_date: data.readable_publish_date,
      published: data.published !== false,
      social_image: data.social_image, // URL
      tag_list: data.tag_list,
      tags: data.tags,
      slug: data.slug,
      path: data.path, // URL
      canonical_url: data.canonical_url, // URL
      comments_count: parseInt(data.comments_count),
      positive_reactions_count: parseInt(data.positive_reactions_count),
      public_reactions_count: parseInt(data.public_reactions_count),
      created_at: new Date(data.created_at),
      edited_at: data.editedAt ? new Date(data.edited_at) : null,
      crossposted_at: data.crossposted_at ? new Date(data.crossposted_at) : null,
      published_at: new Date(data.published_at),
      last_comment_at: new Date(data.last_comment_at),
      published_timestamp: new Date(data.published_timestamp),
      user: data.user,
      organization: data.organization,
      body_html: data.body_html,
      body_markdown: data.body_markdown,
    }
  };
}
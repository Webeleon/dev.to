import { SharedUser } from './SharedUser';
import { SharedOrganization } from './SharedOrganization';
import { FlareTag } from './FlareTag';

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image?: string; // URL
  readable_publish_date?: string;
  published?: boolean;
  published_at: Date;
  social_image: string; // URL
  tag_list: string[];
  tags: string;
  slug: string;
  path: string; // URL
  canonical_url: string; // URL
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  created_at: Date;
  edited_at?: Date;
  crossposted_at?: Date;
  last_comment_at: Date;
  published_timestamp: Date;
  user: SharedUser;
  organization?: SharedOrganization;
  flare_tag?: FlareTag;
  body_html?: string;
  body_markdown?: string;
}

import { createClient } from 'contentful';

const client = createClient({
  space: 'zdhzm3gdml81',
  accessToken: 'YQd1HhG99AYvvD5fddOmVXaDob0NQrM6iGoHVWU8m1c',
});

export interface IData {
  metadata: Metadata;
  sys: TargetSys;
  fields: PokedexFields;
}

export interface PokedexFields {
  title: string;
  slug: string;
  publishedDate: string;
  body: Body;
  thumbnail?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface Body {
  nodeType: string;
  data: BodyData;
  content: BodyContent[];
}

export interface BodyContent {
  nodeType: any;
  content: ContentContent[];
  data: PurpleData;
}

export interface ContentContent {
  nodeType: string;
  value: string;
  marks: any[];
  data: BodyData;
}

export interface BodyData {}

export interface PurpleData {
  target?: Target;
}

export interface Target {
  metadata: Metadata;
  sys: TargetSys;
  fields: TargetFields;
}

export interface TargetFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface TargetSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  locale: string;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: any;
  type: any;
  linkType: any;
}

export interface IDataBlogs {
  data: IData[];
  total: number;
  limit: number;
}

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async (): Promise<IDataBlogs> => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    limit: 10,
  });

  return {
    data: response?.items as any[],
    total: response?.total,
    limit: response?.limit,
  };
};

export const getBlogPostsDetail = async (blogId: string): Promise<any> => {
  const response = await client.getEntry(blogId);

  return response;
};

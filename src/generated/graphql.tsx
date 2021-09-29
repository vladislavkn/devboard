export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: "Comment";
  author: User;
  body: Scalars["String"];
  readableDate: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  author: User;
  body?: Maybe<Scalars["String"]>;
  commentsLink: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  originalLink: Scalars["String"];
  reactionsCount: Scalars["Int"];
  readableDate: Scalars["String"];
  title: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  currentPost?: Maybe<Post>;
  lastPosts: Array<Post>;
  postComments?: Maybe<Array<Comment>>;
  taggedPosts: Array<Post>;
  tags: Array<Tag>;
};

export type QueryCurrentPostArgs = {
  postId: Scalars["ID"];
};

export type QueryLastPostsArgs = {
  page: Scalars["Int"];
  per_page: Scalars["Int"];
};

export type QueryPostCommentsArgs = {
  postId: Scalars["ID"];
};

export type QueryTaggedPostsArgs = {
  page: Scalars["Int"];
  per_page: Scalars["Int"];
  tags: Array<Scalars["String"]>;
};

export type QueryTagsArgs = {
  page: Scalars["Int"];
  per_page: Scalars["Int"];
};

export type Tag = {
  __typename?: "Tag";
  backgroundColor: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  textColor: Scalars["String"];
};

export type User = {
  __typename?: "User";
  avatarURL: Scalars["String"];
  name: Scalars["String"];
};

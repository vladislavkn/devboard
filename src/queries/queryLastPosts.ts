import { gql } from "@apollo/client";
import { Post } from "../generated/graphql";

export type QueryLastPosts = {
  lastPosts: Post[];
};

export default gql`
  query QueryLastPosts($page: Int!, $per_page: Int!) {
    lastPosts(page: $page, per_page: $per_page) {
      title
      id
      readableDate
      commentsLink
      originalLink
      reactionsCount
      author {
        name
        avatarURL
      }
      description
      body
    }
  }
`;

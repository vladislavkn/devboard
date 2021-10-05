import { gql } from "@apollo/client";
import { Tag } from "../generated/graphql";

export type QueryTags = {
  tags: Tag[];
};

export default gql`
  query QueryTags($page: Int!, $per_page: Int!) {
    tags(page: $page, per_page: $per_page) {
      name
      textColor
      backgroundColor
      id
    }
  }
`;

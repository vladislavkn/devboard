import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Post, Tag } from "./generated/graphql";

// @ts-ignore
window.__env__ = import.meta.env;

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          lastPosts: {
            keyArgs: false,
            merge(existing: Post[] = [], incoming: Post[], { readField }) {
              const existingIdSet = new Set(
                existing.map((post) => readField("id", post))
              );

              incoming = incoming.filter(
                (post) => !existingIdSet.has(readField("id", post))
              );

              return [...existing, ...incoming];
            },
          },
          tags: {
            keyArgs: false,
            merge(existing: Tag[] = [], incoming: Tag[], { readField }) {
              const existingIdSet = new Set(
                existing.map((tag) => readField("id", tag))
              );

              incoming = incoming.filter(
                (tag) => !existingIdSet.has(readField("id", tag))
              );

              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;

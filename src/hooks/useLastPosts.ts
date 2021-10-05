import { useQuery } from "@apollo/client";
import { useRef } from "react";
import { QueryLastPostsArgs } from "../generated/graphql";
import queryLastPosts, { QueryLastPosts } from "../queries/queryLastPosts";

const useLastPosts = (pageSize: number) => {
  const page = useRef<number>(1);
  const { data, fetchMore, refetch } = useQuery<
    QueryLastPosts,
    QueryLastPostsArgs
  >(queryLastPosts, {
    variables: {
      page: page.current,
      per_page: pageSize,
    },
  });

  const handleFetchMore = () =>
    fetchMore({
      variables: {
        page: ++page.current,
        per_page: pageSize,
      },
    });

  const handleRefresh = () => {
    page.current = 1;
    refetch({
      page: page.current,
      per_page: pageSize,
    });
  };

  return { data, fetchMore: handleFetchMore, refresh: handleRefresh };
};

export default useLastPosts;

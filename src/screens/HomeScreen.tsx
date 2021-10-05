import { useQuery } from "@apollo/client";
import { useRef, useEffect } from "react";
import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import { QueryLastPostsArgs } from "../generated/graphql";
import queryLastPosts, { QueryLastPosts } from "../queries/queryLastPosts";

const HomeScreen: React.FC = () => {
  const page = useRef<number>(1);
  const { data, fetchMore, refetch } = useQuery<
    QueryLastPosts,
    QueryLastPostsArgs
  >(queryLastPosts, {
    variables: {
      page: page.current,
      per_page: 4,
    },
  });

  const handleFetchMore = () =>
    fetchMore({
      variables: {
        page: ++page.current,
        per_page: 4,
      },
    });

  const handleRefresh = () => {
    page.current = 1;
    refetch({
      page: page.current,
      per_page: 4,
    });
  };

  return (
    <>
      <Navigation title="Devboard" />
      <PostPreviewList
        posts={data?.lastPosts ?? []}
        onFetchMore={handleFetchMore}
        onRefresh={handleRefresh}
      />
    </>
  );
};

export default HomeScreen;

import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import useLastPosts from "../hooks/useLastPosts";

const HomeScreen: React.FC = () => {
  const { data, refresh, fetchMore } = useLastPosts(4);

  return (
    <>
      <Navigation title="Devboard" />
      <PostPreviewList
        posts={data?.lastPosts ?? []}
        onFetchMore={fetchMore}
        onRefresh={refresh}
      />
    </>
  );
};

export default HomeScreen;

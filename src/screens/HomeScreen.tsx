import { Button, Icon, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import usePagedQuery from "../hooks/usePagedQuery";
import queryLastPosts, { QueryLastPosts } from "../queries/queryLastPosts";

const HomeScreen: React.FC = () => {
  const { data, fetchMore, hasMore, refresh } = usePagedQuery<QueryLastPosts>({
    query: queryLastPosts,
    pageSize: 5,
    hasMore: (result) => result.data.lastPosts.length > 0,
  });
  const history = useHistory();
  const handleRefresh = () => {
    refresh();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navigation
        title="Devboard"
        actions={
          <>
            <Button onClick={() => history.push("/tags")}>Edit tags</Button>
            <IconButton onClick={handleRefresh}>
              <Icon>refresh</Icon>
            </IconButton>
          </>
        }
      />
      <PostPreviewList
        posts={data?.lastPosts ?? []}
        hasMore={hasMore}
        onFetchMore={fetchMore}
      />
    </>
  );
};

export default HomeScreen;

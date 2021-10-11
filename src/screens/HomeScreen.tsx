import { Button, Icon, IconButton } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import usePagedQuery from "../hooks/usePagedQuery";
import queryLastPosts, { QueryLastPosts } from "../queries/queryLastPosts";

const HomeScreen: React.FC = () => {
  const history = useHistory();
  const { enqueueSnackbar: toast } = useSnackbar();
  const { data, fetchMore, hasMore, refresh } = usePagedQuery<QueryLastPosts>({
    query: queryLastPosts,
    pageSize: 5,
    hasMore: (result) => result.data.lastPosts.length > 0,
    onError: (e) =>
      toast(e.message, { variant: "error", autoHideDuration: 5000 }),
  });

  const handleOpenPost = () => {
    toast("Page is not implemented yet", { variant: "info" });
  };

  const handleRefresh = () => {
    refresh().then(() => {
      toast("Refreshed posts successfully", { variant: "success" });
      window.scrollTo(0, 0);
    });
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
        onOpenPost={handleOpenPost}
        onFetchMore={fetchMore}
      />
    </>
  );
};

export default HomeScreen;

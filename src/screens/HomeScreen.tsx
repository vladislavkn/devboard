import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import usePagedQuery from "../hooks/usePagedQuery";
import queryLastPosts, { QueryLastPosts } from "../queries/queryLastPosts";

const HomeScreen: React.FC = () => {
  const { data, refresh, fetchMore } =
    usePagedQuery<QueryLastPosts>(queryLastPosts);
  const history = useHistory();

  return (
    <>
      <Navigation
        title="Devboard"
        actions={
          <Button onClick={() => history.push("/tags")}>Edit tags</Button>
        }
      />
      <PostPreviewList
        posts={data?.lastPosts ?? []}
        onFetchMore={fetchMore}
        onRefresh={refresh}
      />
    </>
  );
};

export default HomeScreen;

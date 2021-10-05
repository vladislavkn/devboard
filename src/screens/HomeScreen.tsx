import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import useLastPosts from "../hooks/useLastPosts";

const HomeScreen: React.FC = () => {
  const { data, refresh, fetchMore } = useLastPosts(4);
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

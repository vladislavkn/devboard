import { Box } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { Post } from "../generated/graphql";
import AppInfiniteScroll from "./AppInfiniteScroll";
import PostPreview from "./PostPreview";

type PostPreviewListProps = {
  posts: Post[];
  onFetchMore: () => void;
  hasMore: boolean;
};

const PostPreviewList: React.FC<PostPreviewListProps> = (props) => {
  const { posts, onFetchMore, hasMore } = props;

  const { enqueueSnackbar } = useSnackbar();

  const handleOpenPost = () => {
    enqueueSnackbar("Page is not implemented yet", {
      variant: "info",
      autoHideDuration: 2000,
    });
  };

  return (
    <AppInfiniteScroll
      itemsLength={posts.length}
      hasMore={hasMore}
      onFetchMore={onFetchMore}
    >
      <Box sx={{ pt: 1 }} />
      {posts.map((post) => (
        <PostPreview
          post={post}
          onClickOpen={handleOpenPost}
          key={post.id}
          sx={{ mb: 1 }}
        />
      ))}
    </AppInfiniteScroll>
  );
};

export default PostPreviewList;

import { Box } from "@material-ui/core";
import { Post } from "../generated/graphql";
import AppInfiniteScroll from "./AppInfiniteScroll";
import PostPreview from "./PostPreview";

type PostPreviewListProps = {
  posts: Post[];
  onFetchMore: () => void;
  onRefresh: () => void;
};

const PostPreviewList: React.FC<PostPreviewListProps> = (props) => {
  const { posts, onFetchMore, onRefresh } = props;

  return (
    <AppInfiniteScroll
      itemsLength={posts.length}
      onRefresh={onRefresh}
      onFetchMore={onFetchMore}
    >
      <Box sx={{ pt: 1 }} />
      {posts.map((post) => (
        <PostPreview post={post} key={post.id} sx={{ mb: 1 }} />
      ))}
    </AppInfiniteScroll>
  );
};

export default PostPreviewList;

import { Box } from "@material-ui/core";
import { Post } from "../generated/graphql";
import AppInfiniteScroll from "./AppInfiniteScroll";
import PostPreview from "./PostPreview";

type PostPreviewListProps = {
  posts: Post[];
  onFetchMore: () => void;
  onOpenPost: (post: Post) => void;
  hasMore: boolean;
};

const PostPreviewList: React.FC<PostPreviewListProps> = (props) => {
  const { posts, onFetchMore, onOpenPost, hasMore } = props;

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
          onClickOpen={() => onOpenPost(post)}
          sx={{ mb: 1 }}
          key={post.id}
        />
      ))}
    </AppInfiniteScroll>
  );
};

export default PostPreviewList;

import { Box, CircularProgress, Icon, Typography } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post } from "../generated/graphql";
import PostPreview from "./PostPreview";

type PostPreviewListProps = {
  posts: Post[];
  onFetchMore: () => void;
  onRefresh: () => void;
};

const PostPreviewList: React.FC<PostPreviewListProps> = (props) => {
  const { posts, onFetchMore, onRefresh } = props;

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={onFetchMore}
      hasMore={true}
      loader={
        <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
          <CircularProgress />
        </Box>
      }
      refreshFunction={onRefresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={128}
      pullDownToRefreshContent={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 1,
          }}
        >
          <Icon fontSize="small" color="secondary" sx={{ mr: 1 }}>
            arrow_upward
          </Icon>
          <Typography color="secondary" align="center">
            Pull down to refresh
          </Typography>
        </Box>
      }
      releaseToRefreshContent={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 1,
          }}
        >
          <Icon fontSize="small" color="secondary" sx={{ mr: 1 }}>
            arrow_downward
          </Icon>
          <Typography color="secondary" align="center">
            Release to refresh
          </Typography>
        </Box>
      }
    >
      <Box sx={{ pt: 1 }} />
      {posts.map((post) => (
        <PostPreview post={post} key={post.id} sx={{ mb: 1 }} />
      ))}
    </InfiniteScroll>
  );
};

export default PostPreviewList;

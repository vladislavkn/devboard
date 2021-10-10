import { Box, CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

type AppInfiniteScrollProps = {
  itemsLength: number;
  onFetchMore: () => void;
  hasMore: boolean;
  children: React.ReactNode;
};

const AppInfiniteScroll: React.FC<AppInfiniteScrollProps> = (props) => (
  <InfiniteScroll
    dataLength={props.itemsLength}
    next={props.onFetchMore}
    hasMore={props.hasMore}
    loader={
      <Box sx={{ display: "flex", justifyContent: "center", py: 2, px: 1 }}>
        <CircularProgress />
      </Box>
    }
  >
    {props.children}
  </InfiniteScroll>
);

export default AppInfiniteScroll;

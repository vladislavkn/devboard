import { Box, CircularProgress, Icon, Typography } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

type AppInfiniteScrollProps = {
  itemsLength: number;
  onFetchMore: () => void;
  onRefresh: () => void;
  children: React.ReactNode;
};

const AppInfiniteScroll: React.FC<AppInfiniteScrollProps> = (props) => (
  <InfiniteScroll
    dataLength={props.itemsLength}
    next={props.onFetchMore}
    hasMore={true}
    loader={
      <Box sx={{ display: "flex", justifyContent: "center", py: 2, px: 1 }}>
        <CircularProgress />
      </Box>
    }
    refreshFunction={props.onRefresh}
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
    {props.children}
  </InfiniteScroll>
);

export default AppInfiniteScroll;

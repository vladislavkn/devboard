import { Box, Grid } from "@material-ui/core";
import { Tag } from "../generated/graphql";
import AppInfiniteScroll from "./AppInfiniteScroll";
import TagCard from "./TagCard";

type TagCardListProps = {
  tags: Tag[];
  selectedTagIds: string[];
  onClickTag: (tag: Tag) => void;
  onFetchMore: () => void;
  hasMore: boolean;
};

const TagCardList: React.FC<TagCardListProps> = (props) => {
  const { tags, selectedTagIds, hasMore, onFetchMore, onClickTag } = props;

  return (
    <AppInfiniteScroll
      itemsLength={tags.length}
      hasMore={hasMore}
      onFetchMore={onFetchMore}
    >
      <Grid container sx={{ pt: 1, px: 2 }} spacing={1}>
        {tags.map((tag) => (
          <Grid item xs={6} key={tag.id}>
            <TagCard
              tag={tag}
              onClick={() => onClickTag(tag)}
              selected={selectedTagIds.includes(tag.id)}
            />
          </Grid>
        ))}
      </Grid>
    </AppInfiniteScroll>
  );
};

export default TagCardList;

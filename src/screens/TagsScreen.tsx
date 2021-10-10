import { Icon, IconButton } from "@material-ui/core";
import { useMemo, useState } from "react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import SwapPanel from "../components/SwapPanel";
import TagCardList from "../components/TagCardLst";
import { Tag } from "../generated/graphql";
import usePagedQuery from "../hooks/usePagedQuery";
import queryTags, { QueryTags } from "../queries/queryTags";

const TagsScreen: React.FC = () => {
  const [swapValue, setSwapValue] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const { data, hasMore, fetchMore, refresh } = usePagedQuery<QueryTags>({
    query: queryTags,
    pageSize: 18,
    hasMore: (result) => result.data.tags.length > 0,
  });

  const handleClickTag = (tag: Tag) => {
    if (selectedTagIds.includes(tag.id))
      setSelectedTagIds((prev) => prev.filter((id) => id !== tag.id));
    else setSelectedTagIds((prev) => [...prev, tag.id]);
  };

  const filteredTags = useMemo(() => {
    const tags = data?.tags ?? [];
    if (search.length === 0) return tags;
    return tags.filter((tag) =>
      tag.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const handleRefresh = () => {
    refresh();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SwapPanel
        swap={swapValue}
        timeout={250}
        sx={{ minHeight: "56px" }}
        primary={
          <Navigation
            position="fixed"
            title="Tags"
            leading={<BackButton />}
            actions={
              <>
                <IconButton onClick={() => setSwapValue(false)}>
                  <Icon>search</Icon>
                </IconButton>
                <IconButton onClick={handleRefresh}>
                  <Icon>refresh</Icon>
                </IconButton>
              </>
            }
          />
        }
        secondary={
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClose={() => {
              setSwapValue(true);
              setSearch("");
            }}
            sx={{
              position: "fixed",
              left: 0,
              right: 0,
              bgcolor: "background.default",
            }}
          />
        }
      />
      <TagCardList
        tags={filteredTags}
        hasMore={hasMore}
        onFetchMore={fetchMore}
        onClickTag={handleClickTag}
        selectedTagIds={selectedTagIds}
      />
    </>
  );
};

export default TagsScreen;

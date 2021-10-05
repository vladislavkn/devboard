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
  const [swap, setSwap] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const { data, refresh, fetchMore } = usePagedQuery<QueryTags>(queryTags);

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

  return (
    <>
      <SwapPanel
        swap={swap}
        timeout={250}
        sx={{ minHeight: "56px" }}
        primary={
          <Navigation
            title="Tags"
            leading={<BackButton />}
            actions={
              <IconButton onClick={() => setSwap(false)}>
                <Icon>search</Icon>
              </IconButton>
            }
          />
        }
        secondary={
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClose={() => {
              setSwap(true), setSearch("");
            }}
          />
        }
      />
      <TagCardList
        tags={filteredTags}
        onRefresh={refresh}
        onFetchMore={fetchMore}
        onClickTag={handleClickTag}
        selectedTagIds={selectedTagIds}
      />
    </>
  );
};

export default TagsScreen;

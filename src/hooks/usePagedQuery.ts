import { ApolloQueryResult, useQuery } from "@apollo/client";
import { useRef, useState } from "react";

type Query = Parameters<typeof useQuery>[0];
type PagedQueryVars = {
  page: number;
  per_page: number;
};
type QueryVars = Record<string, any>;
type UsePagedQueryOptions<T> = {
  query: Query;
  hasMore: (data: ApolloQueryResult<T>) => boolean;
  pageSize?: number;
  variables?: QueryVars;
};

const usePagedQuery = <T>(options: UsePagedQueryOptions<T>) => {
  const pageSize = options?.pageSize ?? 4;
  const [hasMore, setHasMore] = useState(true);

  const page = useRef<number>(1);
  const { data, fetchMore, refetch } = useQuery<T, PagedQueryVars>(
    options.query,
    {
      variables: {
        page: page.current,
        per_page: pageSize,
        ...options.variables,
      },
      onError: (e) => {
        alert(e.message);
        console.error(e);
      },
    }
  );

  const handleFetchMore = (variables: QueryVars = {}) =>
    fetchMore({
      variables: {
        page: ++page.current,
        per_page: pageSize,
        ...options.variables,
        ...variables,
      },
    }).then((results) => setHasMore(options.hasMore(results)));

  const handleRefresh = (variables: QueryVars = {}) => {
    page.current = 1;
    refetch({
      page: page.current,
      per_page: pageSize,
      ...options.variables,
      ...variables,
    });
  };

  return { data, fetchMore: handleFetchMore, hasMore, refresh: handleRefresh };
};

export default usePagedQuery;

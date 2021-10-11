import { ApolloError, ApolloQueryResult, useQuery } from "@apollo/client";
import { useRef, useState } from "react";

type Query = Parameters<typeof useQuery>[0];

type QueryVars = Record<string, number | string>;
type PagedQueryVars = {
  page: number;
  per_page: number;
} & QueryVars;
type UsePagedQueryOptions<T> = {
  query: Query;
  hasMore: (data: ApolloQueryResult<T>) => boolean;
  pageSize?: number;
  variables?: PagedQueryVars;
  onError?: (error: ApolloError) => void;
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
      onError: options.onError,
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
    return refetch({
      page: page.current,
      per_page: pageSize,
      ...options.variables,
      ...variables,
    });
  };

  return {
    data,
    fetchMore: handleFetchMore,
    hasMore,
    refresh: handleRefresh,
  };
};

export default usePagedQuery;

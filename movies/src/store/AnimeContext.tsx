import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import ANIME_QUERY, { Anime } from '../graphql/queries/getAnimes';
import client from '../apollo-client';

interface AnimeContextValue {
  data: any;
  search: string;
  setSearch: any;
  page: number;
  setPage: any;
  error: any;
  loading: boolean;
}

interface AnimeProviderProps {
  children?: React.ReactNode;
}

export const AnimeContext = createContext<AnimeContextValue>({
  data: undefined,
  search: '',
  page: 1,
  setSearch: undefined,
  setPage: undefined,
  error: null,
  loading: false,
});

export const AnimeContextProvider = ({ children }: AnimeProviderProps) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('Naruto')
  const { loading, error, data } = useQuery<{ anime: Anime[] }>(ANIME_QUERY, {
    variables: { search: search, page: page, perPage: 5 },
    client,
  });

  useEffect(() => {
    // Perform any additional logic or side effects based on the fetched data
  }, [data]);

  const contextValue: AnimeContextValue = {
    data,
    error,
    loading,
    search,
    setSearch,
    page,
    setPage,
  };

  return (
    <AnimeContext.Provider value={contextValue}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContext;

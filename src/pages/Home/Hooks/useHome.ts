import { useSearchParams } from "react-router";
import { useFetchMovies } from "../../../hooks/useFetchMovies";
import { useEffect, useState } from "react";
import { useFetchGenres } from "@/hooks/useFetchGenres";
import { useFetchSearch } from "@/hooks/useFetchSearch";

export const useHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const queryPage = searchParams.get("page") || "1";

  const [page, setPage] = useState<number>(parseInt(queryPage));
  const [inputValue, setInputValue] = useState<string>(query || '');

  const { data: discoverData, isLoading: discoverLoading } = useFetchMovies(page); 
  const { data: genresData } = useFetchGenres();
  const { data: searchData, isLoading: searchLoading } = useFetchSearch(inputValue, page);

  const data = inputValue.length > 0 ? searchData : discoverData;
  const isLoading = inputValue.length > 0 ? searchLoading : discoverLoading;


  const changePage = (page: number) => {
    setPage(page);
    setSearchParams({ page: page.toString() });
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSearchParams({ query: e.target.value });
  };

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [page]);

  return {
    data,
    isLoading,
    genresData,
    inputValue,
    page,
    onChange,
    changePage,
  };
};

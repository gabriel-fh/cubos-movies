import { useSearchParams } from "react-router";
import { useFetchMovies } from "../../../hooks/useFetchMovies";
import { useCallback, useEffect, useState } from "react";
import { useFetchGenres } from "@/hooks/useFetchGenres";
import { useFetchSearch } from "@/hooks/useFetchSearch";
import { useFilter } from "@/contexts/Filters";

export const useHome = () => {
  const { filters, clearFilters } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const currentPage = searchParams.get("page") || "1";
  const [page, setPage] = useState<number>(parseInt(currentPage));
  const [inputValue, setInputValue] = useState<string>(query || "");

  const { data: discoverData, isLoading: discoverLoading } = useFetchMovies(page, filters);
  const { data: genresData } = useFetchGenres();
  const { data: searchData, isLoading: searchLoading } = useFetchSearch(inputValue, page);

  const isSearch = inputValue.trim().length > 0;
  const data = isSearch ? searchData : discoverData;
  const isLoading = isSearch ? searchLoading : discoverLoading;

  const changePage = (page: number) => {
    setPage(page);
    setSearchParams((prevParams) => {
      prevParams.set("page", page.toString());
      return prevParams;
    });
  };

  const setUrlParams = (newQuery: string) => {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);
      if (newQuery.trim().length > 0) {
        updatedParams.set("query", newQuery);
      } else {
        updatedParams.delete("query");
      }
      Array.from(updatedParams.keys())
        .filter((key) => key !== "query")
        .forEach((key) => updatedParams.delete(key));
      return updatedParams;
    });
  };

  const onChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>, isFilter: boolean = false) => {
      const newQuery = e.target.value;
      setInputValue(newQuery);
      if (!isFilter) {
        await clearFilters();
        setUrlParams(newQuery);
      }
      setPage(1);
    },
    [setInputValue, clearFilters, setUrlParams, setPage]
  );

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

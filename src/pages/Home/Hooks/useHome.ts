import { useFetchMovies } from "../../../hooks/useFetchMovies";

export const useHome = () => {
  const { data, isLoading, isError } = useFetchMovies();

  return {
    data,
    isLoading
  };
};

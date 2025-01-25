import { useFetchMovies } from "../../../hooks/useFetchMovies";

export const useHome = () => {
  const { data, isLoading } = useFetchMovies();

  return {
    data,
    isLoading
  };
};

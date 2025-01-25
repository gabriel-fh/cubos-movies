import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<GenreResponse> => {
  const response = await api.get<GenreResponse>("genre/movie/list");
  return response.data;
}

export const useFetchGenres = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["genres"],
    staleTime: 1000 * 60 * 30,
  });

  return query;
}
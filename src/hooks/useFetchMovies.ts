import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

const fetchData = async () => {
  const response = await api.get<PaginetedResponse<Movie>>('discover/movie');
  return response.data;
}

export const useFetchMovies = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['discover'],
    staleTime: 1000 * 60 * 10, 
  })

  return query;
}
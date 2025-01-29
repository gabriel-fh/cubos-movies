import api from "@/config/api";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

const fetchData = async ({ queryKey }: QueryFunctionContext<[string, string]>): Promise<MovieInfo> => {
  const [_, id] = queryKey;
  const response = await api.get<MovieInfo>(`movie/${id}`);
  return response.data;
}

export const useFetchMovieInfo = (id: string) => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["movie", id],
    staleTime: 1000 * 60 * 60,
  });
  return query;
}
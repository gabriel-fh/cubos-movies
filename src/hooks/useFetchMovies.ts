import api from "@/config/api";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

const fetchData = async ({ queryKey }: QueryFunctionContext<[string, number]>): Promise<PaginetedResponse<Movie>> => {
  const [_, page] = queryKey;

  const params = {
    page: page <= 0 ? 1 : page,
  };

  const response = await api.get<PaginetedResponse<Movie>>("discover/movie", { params });
  return response.data;
};

export const useFetchMovies = (page = 1) => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["discover", page],
    staleTime: 1000 * 60 * 10,
  });

  return query;
};

import api from "@/config/api";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

const fetchData = async ({ queryKey }: QueryFunctionContext<[string, number, Filter]>): Promise<PaginetedResponse<Movie>> => {
  const [_, page, filter] = queryKey;
  console.log(filter)
  const params = {
    page: page <= 0 ? 1 : page,
    ...filter,
  };

  const response = await api.get<PaginetedResponse<Movie>>("discover/movie", { params });
  return response.data;
};

export const useFetchMovies = (page = 1, filter: Filter) => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["discover", page, filter],
    staleTime: 1000 * 60 * 10,
  });

  return query;
};

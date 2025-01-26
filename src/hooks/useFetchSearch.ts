import api from "@/config/api";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

const fetchData = async ({ queryKey }: QueryFunctionContext<[string, string]>) => {

  const [_, searchValue] = queryKey;

  const response = await api.get<PaginetedResponse<Movie>>("search/movie", {
    params: {
      query: searchValue,
    },
  });
  return response.data;
};

export const useFetchSearch = (searchValue: string) => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["search", searchValue],
    staleTime: 1000 * 60 * 10,
    enabled: searchValue.length > 0,
  });

  return query;
};

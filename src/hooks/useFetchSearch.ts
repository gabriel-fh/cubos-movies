import api from "@/config/api";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

const fetchData = async ({ queryKey }: QueryFunctionContext<[string, string, number]>) => {

  const [_, searchValue, page] = queryKey;

  const response = await api.get<PaginetedResponse<Movie>>("search/movie", {
    params: {
      query: searchValue,
      page: page <= 0 ? 1 : page > 500 ? 500 : page,
      
    },
  });
  return response.data;
};

export const useFetchSearch = (searchValue: string, page = 1) => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["search", searchValue, page],
    staleTime: 1000 * 60 * 10,
    enabled: searchValue.length > 0 ,
  });

  return query;
};

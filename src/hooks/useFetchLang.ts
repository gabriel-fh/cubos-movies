import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<Lang[]> => {
  const response = await api.get<Lang[]>("configuration/languages");
  return response.data;
}

export const useFetchLang = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["lang"],
    staleTime: 1000 * 60 * 60,
  });
  return query;
}
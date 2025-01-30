import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import { useForm, UseFormWatch, UseFormSetValue, UseFormHandleSubmit, UseFormRegister, UseFormReset, } from "react-hook-form"
import { useFetchLang } from "@/hooks/useFetchLang";

const FilterContext = createContext<FilterData>({} as FilterData);

type FilterData = {
  filters: Filter;
  initialFilters: Filter;
  langData: Lang[] | undefined;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  clearFilters: () => void;
  handleSubmit: UseFormHandleSubmit<Filter, undefined>;
  watch: UseFormWatch<Filter>
  setValue: UseFormSetValue<Filter>
  setUrlParams: (data: Filter) => void;
  register: UseFormRegister<Filter>
  reset: UseFormReset<Filter>
}

type FilterProviderProps = {
  children: ReactNode;
};


export const FilterProvider = ({ children }: FilterProviderProps) => {
  const { data: langData } = useFetchLang();
  const { handleSubmit, setValue, watch, register, reset } = useForm<Filter>();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFilters: Filter = useMemo(() => ({
    sort_by: searchParams.get("sort_by") || 'popularity.desc',
    with_genres: searchParams.get("with_genres") || '',
    with_original_language: searchParams.get("with_original_language") || '',
    vote_average_gte: Number(searchParams.get("vote_average_gte")) || 0,
    vote_average_lte: Number(searchParams.get("vote_average_lte")) || 10,
  }), [searchParams]);

  const [filters, setFilters] = useState<Filter>(initialFilters);

  useEffect(() => {
    Object.entries(filters).forEach(([key, value]) => {
      register(key as keyof Filter, { value });
    });
  }, [register, initialFilters, filters]);


  const setUrlParams = (data: Filter) => {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.delete("page");
      updatedParams.delete("query");
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          updatedParams.set(key, value.toString());
        } else {
          updatedParams.delete(key);
        }
      });
      return updatedParams;
    });
  }

  const clearFilters = () => {
    setFilters(initialFilters);
    reset(initialFilters);
    return;
  }

  return (
    <FilterContext.Provider
      value={{
        initialFilters,
        filters,
        langData,
        setFilters,
        clearFilters,
        handleSubmit,
        watch,
        setValue,
        register,
        setUrlParams,
        reset
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
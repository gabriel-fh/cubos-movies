import { createContext, useContext, ReactNode, useState, useCallback } from "react";
import { useSearchParams } from "react-router";
import {
  useForm,
  UseFormWatch,
  UseFormSetValue,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormGetValues,
} from "react-hook-form"

const FilterContext = createContext<FilterData>({} as FilterData);

type FilterData = {
  filters: Filter;
  initialFilters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  clearFilters: () => void;
  handleSubmit: UseFormHandleSubmit<Filter, undefined>;
  watch: UseFormWatch<Filter>
  setValue: UseFormSetValue<Filter>
  setUrlParams: (data: Filter) => void;
  register: UseFormRegister<Filter>
  reset: UseFormReset<Filter>
  getValues: UseFormGetValues<Filter>

}

type FilterProviderProps = {
  children: ReactNode;
};


export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilters: Filter = {
    sort_by: searchParams.get("sort_by") || 'popularity.desc',
    with_genres: searchParams.get("with_genres") || '',
    with_original_language: searchParams.get("with_original_language") || '',
    vote_average_gte: Number(searchParams.get("vote_average_gte")) || 0,
    vote_average_lte: Number(searchParams.get("vote_average_lte")) || 10,
  };
  const { handleSubmit, setValue, watch, register, reset, getValues } = useForm<Filter>({ defaultValues: initialFilters });

  const [filters, setFilters] = useState<Filter>(initialFilters);

  const setUrlParams = useCallback(async (data: Filter) => {
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
  }, [setSearchParams]);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters)
    reset(initialFilters)
  }, [initialFilters, reset, setFilters])

  return (
    <FilterContext.Provider
      value={{
        initialFilters,
        filters,
        setFilters,
        clearFilters,
        handleSubmit,
        watch,
        setValue,
        register,
        setUrlParams,
        reset,
        getValues,
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
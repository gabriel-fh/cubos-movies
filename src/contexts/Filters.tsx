import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm, UseFormWatch, UseFormSetValue, UseFormHandleSubmit, UseFormRegister, UseFormReset, } from "react-hook-form"

const FilterContext = createContext<FilterData>({} as FilterData);

type FilterData = {
  filters: Filter;
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
  const { handleSubmit, setValue, watch, register, reset } = useForm<Filter>();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFilters: Filter = {
    sort_by: searchParams.get("sort_by") || 'popularity.desc',
    with_genres: searchParams.get("with_genres") || '',
    with_original_language: searchParams.get("with_original_language") || '',
    vote_average_gte: Number(searchParams.get("vote_average_gte")) || 0,
    vote_average_lte: Number(searchParams.get("vote_average_lte")) || 10,
  }

  const [filters, setFilters] = useState<Filter>(initialFilters);

  useEffect(() => {
    (Object.entries(filters) as [keyof Filter, Filter[keyof Filter]][]).forEach(([key, value]) => {
      register(key, { value });
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
    return;
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
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
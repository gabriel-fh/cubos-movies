import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm, UseFormWatch, UseFormSetValue, UseFormHandleSubmit, UseFormRegister, Control,  } from "react-hook-form"

const FilterContext = createContext<FilterData>({} as FilterData);

type FilterData = {
  filters: Filter;
  isSaved: boolean;
  control: Control<Filter, any>;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  clearFilters: () => void;
  handleSubmit: UseFormHandleSubmit<Filter, undefined>;
  watch: UseFormWatch<Filter>
  setValue: UseFormSetValue<Filter>
  setUrlParams: (data: Filter) => void;
  register: UseFormRegister<Filter>
}

type FilterProviderProps = {
  children: ReactNode;
};


export const FilterProvider = ({ children }: FilterProviderProps) => {
  const { handleSubmit, setValue, watch, register, control } = useForm<Filter>();
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultFilters: Filter = {
    sort_by:  searchParams.get("sort_by") || 'popularity.desc',
    with_genres: searchParams.get("with_genres") || '',
    with_original_language: searchParams.get("with_original_language") || '',
    'vote_average.gte': Number(searchParams.get("vote_average.gte")) || 0,
    'vote_average.lte': Number(searchParams.get("vote_average.lte")) || 10,
  }

  useEffect(() => {
    register('sort_by', { value: defaultFilters.sort_by });
    register('with_genres', { value: defaultFilters.with_genres });
    register('with_original_language', {value: defaultFilters.with_original_language})
  }, []);

  const [isSaved, setIsSaved] = useState<boolean>(false)
  const [filters, setFilters] = useState<Filter>(defaultFilters);

  const setUrlParams = (data: Filter) => {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);
      Object.entries(data).forEach(([key, value]) => {
        if(value) {
          updatedParams.set(key, value.toString());
        } else {
          updatedParams.delete(key);
        }
      });
      return updatedParams;
    });
  }

  useEffect(() => {
    // Setting the values from searchParams into the form
    // Object.entries(defaultFilters).forEach(([key, value]) => {
    //   setValue(key as keyof Filter, value.toString());
    // });
  }, [defaultFilters, setValue]);

  const clearFilters = () => {
    setFilters(defaultFilters);
    return;
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
        isSaved,
        control,
        setFilters,
        setIsSaved,
        clearFilters,
        handleSubmit,
        watch,
        setValue,
        register,
        setUrlParams,
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
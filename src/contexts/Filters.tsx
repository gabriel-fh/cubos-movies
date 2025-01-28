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

  const initialFilters: Filter = {
    sort_by:  searchParams.get("sort_by") || 'popularity.desc',
    with_genres: searchParams.get("with_genres") || '',
    with_original_language: searchParams.get("with_original_language") || '',
    vote_average_gte: Number(searchParams.get("vote_average_gte")) || 0,
    vote_average_lte: Number(searchParams.get("vote_average_lte")) || 10,
  }

  useEffect(() => {
    (Object.entries(initialFilters) as [keyof Filter, Filter[keyof Filter]][]).forEach(([key, value]) => {
      register(key, { value });
    });
  }, [register, initialFilters]);

  const [isSaved, setIsSaved] = useState<boolean>(false)
  const [filters, setFilters] = useState<Filter>(initialFilters);

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
  }, [initialFilters, setValue]);

  const clearFilters = () => {
    setFilters(initialFilters);
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
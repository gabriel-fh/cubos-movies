import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useSearchParams } from "react-router";

const FilterContext = createContext<FilterData>({} as FilterData);

type FilterData = {
  filters: Filter;
  isSaved: boolean;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  clearFilters: () => void;
}

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [searchParams] = useSearchParams();
  const defaultFilters: Filter = {
    sort_by:  searchParams.get("sort_by") || 'popularity.desc',
    with_genres: searchParams.get("with_genres") || '',
    with_original_language: searchParams.get("with_original_language") || '',
    'vote_average.gte': Number(searchParams.get("vote_average.gte")) || 0,
    'vote_average.lte': Number(searchParams.get("vote_average.lte")) || 10,
  }
  const [isSaved, setIsSaved] = useState<boolean>(false)
  const [filters, setFilters] = useState<Filter>(defaultFilters);

  const clearFilters = () => {
    setFilters(defaultFilters);
    return;
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
        isSaved,
        setFilters,
        setIsSaved,
        clearFilters,
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
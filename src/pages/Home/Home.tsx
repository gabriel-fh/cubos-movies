import MovieCard from "@/components/MovieCard";
import { useFetchGenres } from "@/hooks/useFetchGenres";
import { useHome } from "./Hooks/useHome";
import SearchAndFilter from "./components/SearchAndFilter";
import { useEffect, useState } from "react";
import { useFetchSearch } from "@/hooks/useFetchSearch";
import { useSearchParams } from "react-router";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [inputValue, setInputValue] = useState<string>(query || '');
  const { data, isLoading } = useHome();
  const { data: genresResponse } = useFetchGenres();
  const { data: searchResults } = useFetchSearch(inputValue);


  useEffect(() => {
    if (!query || query.trim() === "") {
      setSearchParams({});
    }
  }, [query]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSearchParams({ query: e.target.value });
  };

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <main className="w-full min-h-screen">
      <div className="absolute -top-32 -z-2 w-full min-h-screen bg-[url(backgropund-krists-luhaers-unsplash.png)]
      bg-no-repeat bg-cover bg-center bg-mauve-1 before:w-full before:h-full before:absolute before:top-0 before:left-0 
       before:bg-gradient-to-b before:from-mauve-1 before:to-mauve-1 before:via-mauve-1/85
      "/>
      <SearchAndFilter inputValue={inputValue} onChange={onChange} />
      <section className="w-full min-h-[calc(100vh-10vh)] grid grid-cols-[repeat(2,1fr)] gap-2 bg-mauve-3 p-4">
        {inputValue.length > 0 ? (
          searchResults?.results && searchResults.results.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} genresResponse={genresResponse} />
            );
          })
        ) : (
          data?.results && data.results.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} genresResponse={genresResponse} />
            );
          })
        )}
      </section>
    </main>
  )
}

export default Home
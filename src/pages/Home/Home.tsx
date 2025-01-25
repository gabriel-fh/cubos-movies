import MovieCard from "@/components/MovieCard";
import { useFetchGenres } from "@/hooks/useFetchGenres";
import { useHome } from "./Hooks/useHome";
import SearchAndFilter from "./components/SearchAndFilter";

const Home = () => {

  const { data, isLoading } = useHome();
  const {data: genresResponse} = useFetchGenres();

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <main className="w-full min-h-screen">
      <div className="absolute -top-32 -z-2 w-full min-h-screen bg-[url(backgropund-krists-luhaers-unsplash.png)]
      bg-no-repeat bg-cover bg-center bg-mauve-1 before:w-full before:h-full before:absolute before:top-0 before:left-0 
       before:bg-gradient-to-b before:from-mauve-1 before:to-mauve-1 before:via-mauve-1/85
      "/>
      <SearchAndFilter />
      <section className="w-full h-auto grid grid-cols-[repeat(2,1fr)] gap-2 bg-mauve-3 p-4">
        {data?.results && data.results.map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie} genresResponse={genresResponse} />
          )
        })}
      </section>
    </main>
  )
}

export default Home
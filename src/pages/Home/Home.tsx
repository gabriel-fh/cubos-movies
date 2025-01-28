import MovieCard from "@/components/MovieCard";
import SearchAndFilter from "./components/SearchAndFilter";
import SearchNotFound from "./components/SearchNotFound";
import Pagination from "@/components/Pagination";
import { useHome } from "./Hooks/useHome";

const Home = () => {
  const { data, isLoading, genresData, page, inputValue, changePage, onChange } = useHome();

  return (
    <main className="w-full min-h-screen">
      <div className="absolute -z-10 -top-32 w-full min-h-screen bg-[url(backgropund-krists-luhaers-unsplash.png)]
    bg-no-repeat bg-cover bg-center before:w-full before:h-full before:absolute before:top-0 before:left-0 
    before:bg-gradient-to-b before:from-mauve1 before:to-mauve1 before:via-mauve1/90"/>

      <SearchAndFilter
        inputValue={inputValue}
        onChange={onChange}
        genresData={genresData}
      />
      <section className={`w-full min-h-[calc(100vh-10vh)] bg-mauve3 p-4 
        ${inputValue.length > 0 && data?.results?.length === 0 ? 'flex items-start justify-center' :
          'grid grid-cols-[repeat(2,1fr)] place-content-start gap-2'}`}>

        {isLoading ? (
          <Skeleton />
        ) : inputValue.length > 0 && data?.results?.length === 0 ? (
          <SearchNotFound searchValue={inputValue} />
        ) : (
          data?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genresData={genresData} />
          ))
        )}

      </section>
      {data && data.total_pages > 1 && <Pagination totalPages={data.total_pages} active={page} setActive={changePage} />}
    </main>
  );

}

const Skeleton = () => (
  Array.from({ length: 10 }).map((_, idx) => (
    <div key={idx} className="aspect-[2/3] animate-pulse bg-mauve5 rounded-[4px]" />
  ))
);

export default Home
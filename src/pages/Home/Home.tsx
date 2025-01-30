import MovieCard from "@/components/MovieCard";
import SearchAndFilter from "./components/SearchAndFilter";
import Pagination from "@/components/Pagination";
import { useHome } from "./Hooks/useHome";
import NoResults from "@/components/NoResults";

const Home = () => {
  const { data, isLoading, genreResponse, page, inputValue, changePage, onChange } = useHome();

  return (
    <main className="w-full min-h-screen lg:px-4">
      <SearchAndFilter
        inputValue={inputValue}
        onChange={onChange}
        genresData={genreResponse}
      />

      <section className={`w-full min-h-[calc(100vh-10vh)] bg-mauve3 lg:bg-mauvea3 p-4 lg:p-6 lg:rounded-md
        ${data?.results?.length === 0 ? 'flex items-start justify-center' :
          'grid grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] xl:grid-cols-[repeat(5,1fr)] place-content-start gap-2 sm:gap-3 md:gap-4 lg:gap-5'}`}
      >
        {isLoading ? (
        <Skeleton />
        ) : !data ? (
          <NoResults variant="secondary" className="col-span-full h-full min-h-[calc(100vh-30vh)]"/>
        ) : data.results?.length === 0 ? (
          <NoResults searchValue={inputValue} />
        ) : (
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genresData={genreResponse} />
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
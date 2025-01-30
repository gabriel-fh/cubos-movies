import { useFetchMovieInfo } from "@/hooks/useFetchMovieInfo";
import { IMG_BASE_URL } from "@/utils/constants";
import { useParams } from "react-router";
import Card from "./components/Card";
import MovieImage from "./components/MovieImage";
import TitleRating from "./components/TitleRating";
import MovieInfo from "./components/MovieInfo";
import { getTrailerId } from "@/utils/util";

const Movie = () => {
  const { id = "" } = useParams();
  const { data } = useFetchMovieInfo(id);

  if (!data) return <p>Loading...</p>;

  const { backdrop_path } = data;
  const backdropImageUrl = backdrop_path ? `${IMG_BASE_URL}${backdrop_path}` : '';
  const trailerId = getTrailerId(data.videos.results);
  return (
    <main className="relative p-4 xl:p-8">
      <section className="w-full relative grid grid-cols-1 gap-4 md:px-2 md:py-4 xl:p-8 md:grid-cols-2 
        lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-7 xl:gap-x-8">
        <div
          className="hidden md:block absolute -z-[1] top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center
          before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-mauve1 before:to-mauve1/50 before:via-mauve1/90 rounded-sm"
          style={{ backgroundImage: `url(${backdropImageUrl})` }}
        />
        <MovieImage title={data.title} posterUrl={data.poster_path} />
        <TitleRating
          title={data.title}
          original_title={data.original_title}
          tagline={data.tagline}
          popularity={data.popularity}
          vote_count={data.vote_count}
          vote_average={data.vote_average}
        />
        <section className="md:col-start-2 md:row-start-2 xl:col-start-3 xl:col-span-2">
          <Card title="Sinopse" value={data.overview} className="mb-4" />
          <Card title="Gêneros" value={data.genres} />
        </section>
        <MovieInfo
          release_date={data.release_date}
          runtime={data.runtime}
          status={data.status}
          original_language={data.original_language}
          revenue={data.revenue}
          budget={data.budget}
        />
      </section>
      {trailerId && <section className="mt-4 md:px-2 xl:px-8">
        <h2 className="text-mauve12 text-2xl xl:text-3xl font-semibold mb-2">Trailer</h2>
        <iframe
          title="Trailer"
          className="w-full aspect-video rounded-sm"
          src={`https://www.youtube.com/embed/${trailerId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>}
    </main>
  );
};

export default Movie;

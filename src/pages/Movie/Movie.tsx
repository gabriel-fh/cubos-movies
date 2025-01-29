import Rating from "@/components/Rating";
import { useFetchMovieInfo } from "@/hooks/useFetchMovieInfo"
import { IMG_BASE_URL } from "@/utils/constants";
import { useParams } from "react-router";

const Movie = () => {
  const { id = "" } = useParams();

  const { data } = useFetchMovieInfo(id);
  console.log(data);
  return (
    data && (
      <main className="p-4">
        <section className="flex flex-wrap">
          <figure className="mb-4">
            <img src={IMG_BASE_URL + data.poster_path}
              alt={data.title}
              className="aspect-[2/3] rounded-sm" />
          </figure>
          <div className="flex flex-wrap gap-4 justify-between">
            <div>
              <h1 className="text-2xl font-bold text-mauve12">{data.title}</h1>
              <p className="text-mauve11">Título original: {data.original_title}</p>
              <p className="text-mauve12 italic">{data.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center w-full">
              <div className="bg-mauve3 py-2 px-4 rounded-sm flex-1 h-fit">
                <h3 className="text-mauve11 font-semibold text-sm">Popuplaridade</h3>
                <span className="font-semibold text-white text-left text-sm">{data.popularity}</span>
              </div>
              <div className="bg-mauve3 py-2 px-4 rounded-sm flex-1 h-fit" >
                <h3 className="text-mauve11 font-semibold text-sm">Votos</h3>
                <span className="font-semibold text-white text-sm">{data.vote_count}</span>
              </div>
              <div className="relative">
                <Rating voteAverage={data.vote_average} variant="secondary" />
              </div>
            </div>
          </div>
        </section>
      </main>
    ))
}

export default Movie
import { IMG_BASE_URL } from "@/utils/constants";
import { Link } from "react-router"
import Rating from "../Rating";
import { Icon } from "@iconify/react/dist/iconify.js";

type MovieCardProps = {
  movie: Movie;
  genresData: GenreResponse | undefined;
}

const MovieCard = ({ movie, genresData }: MovieCardProps) => {

  const genres = genresData?.genres.reduce((acc, genre) => {
    if (movie?.genre_ids?.includes(genre.id)) {
      acc.push(genre.name);
    }
    return acc;
  }, [] as string[]);

  return (
    <Link to={`/movie/${movie.id}`}>
      <figure className={`relative rounded-[4px] bg-mauve1 overflow-hidden group before:w-full before:h-full before:absolute before:top-0 before:left-0 before:transparent  before:bg-gradient-to-b before:from-transparent before:to-black before:via-transparent aspect-[2/3] ${!movie.poster_path && 'flex items-center justify-center'}`}>
        {movie.poster_path ? (
          <img src={IMG_BASE_URL + movie.poster_path}
            alt={movie.title}
            className="aspect-[2/3] rounded-sm"
          />
        ) : (
          <Icon icon={'circum:image-off'} className="text-mauve10 text-7xl" />
        )}
        <Rating voteAverage={movie.vote_average} /> 
        <figcaption className="absolute bottom-0 left-0 font-semibold p-3">
          <h3 className=" text-[15px] text-white line-clamp-2">{movie.title}</h3>
          {genres && genres?.length > 0 && (
            <span className="hidden group-hover:block max-h-8 text-mauve11 text-xs font-medium line-clamp-1">
              {genres.join(', ')}
            </span>
          )}
        </figcaption>
      </figure>
    </Link>
  )
}

export default MovieCard
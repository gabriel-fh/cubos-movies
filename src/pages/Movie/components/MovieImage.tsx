import { IMG_BASE_URL } from '@/utils/constants';
import { Icon } from '@iconify/react/dist/iconify.js';

type MovieImageProps = {
  posterUrl?: string
  title: string
}
const MovieImage = ({ title, posterUrl }: MovieImageProps) => {
  const posterImageUrl = posterUrl ? `${IMG_BASE_URL + posterUrl}` : '';

  return (
    <figure className="grid place-items-center bg-mauve3/75 rounded-sm overflow-hidden aspect-[2/3] 
        md:row-start-1 md:row-span-3 xl:col-span-2">
      {posterImageUrl ? (
        <img
          src={posterImageUrl}
          alt={title}
          className=""
        />
      ) : (
        <Icon icon={'circum:image-off'} className="text-mauve10 text-7xl" />
      )}
    </figure>
  )
}

export default MovieImage
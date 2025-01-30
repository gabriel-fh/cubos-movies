import { Badge } from '@/components/ui/badge';
import { useFilter } from '@/contexts/Filters';
import { useNavigate } from 'react-router';

type CardProps = {
  title: string;
  value?: string | number | Genre[];
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Card = ({ title, value, className, variant = 'primary' }: CardProps) => {
  const { setFilters, setValue } = useFilter();
  const isGenre = value instanceof Array;
  const navigate = useNavigate();
  
  const onGereClick = (genreId: number) => {
    setValue('with_genres', genreId.toString());
    setFilters((prev) => ({ ...prev, with_genres: genreId.toString() }));
    navigate(`/?with_genres=${genreId}`);
    return;
  }

  return (
    <div className={`bg-mauve3/75 py-3 px-3 xl:px-4 xl:py-4 h-fit rounded-sm flex-1 backdrop-filter backdrop-blur-[2px] ${className}`}>
      <h3 className="text-mauve11 font-bold text-sm uppercase xl:text-base">{title}</h3>
      {!isGenre ? (
        <span
          className={`text-sm text-mauve12 
            ${variant === 'secondary' ? 'font-bold  text-left' : 'font-normal'}
            ${title !== 'Sinopse' && 'lg:font-bold'}`}>
          {value === '$0' || !value ? 'N/A' : value}
        </span>
      ) : (
        <div className='flex flex-wrap gap-2 mt-2'>
          {value.length > 0 ? value.map((genre, index) => (
            <Badge
              key={index}
              tabIndex={0}
              className="bg-purplea3 text-mauve12 text-xs xl:text-sm font-semibold rounded-sm uppercase 
              focus:outline-none focus:ring-1 focus:ring-purple9 focus:!ring-offset-0 hover:bg-purplea4 cursor-pointer"
              onClick={() => onGereClick(genre.id)}
            >
              {genre.name}
            </Badge>
          )) : (
            <span className="text-mauve12 font-normal">N/A</span>
          )}
        </div>
      )}
    </div>
  )
}

export default Card
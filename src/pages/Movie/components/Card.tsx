import { Badge } from '@/components/ui/badge';

type CardProps = {
  title: string;
  value: string | number | Genre[];
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Card = ({ title, value, className, variant = 'primary' }: CardProps) => {

  const isGenre = value instanceof Array

  return (
    <div className={`bg-mauve3/75 py-3 px-3 xl:px-4 xl:py-4 h-fit rounded-sm flex-1 backdrop-filter backdrop-blur-[2px] ${className}`}>
      <h3 className="text-mauve11 font-bold text-sm uppercase xl:text-base">{title}</h3>
      {!isGenre ? (
        <span
          className={`text-sm xl:text-base text-mauve12 ${variant === 'secondary' ?
            'font-semibold  text-left' : 'text-mauve12 font-normal'}
        `}>
          {value}
        </span>
      ) : (
        <div className='flex flex-wrap gap-2 mt-2'>
          {value.map((genre, index) => (
            <Badge key={index} tabIndex={0} className="bg-purplea3 text-mauve12 text-xs xl:text-sm font-semibold rounded-sm uppercase">
              {genre.name}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card
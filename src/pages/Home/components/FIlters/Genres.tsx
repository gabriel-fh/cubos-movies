import { useCallback } from 'react'
import { Badge } from '@/components/ui/badge'
import { useFilter } from '@/contexts/Filters'

const Genres = ({ genres }: { genres: Genre[] }) => {
  const { setValue, watch } = useFilter()
  const currentFilters = watch('with_genres') ? watch('with_genres')?.split(',')?.map(item => parseInt(item)) : []
  
  const handleClick = useCallback((value: number) => {
    const updatedSelectedGenres = currentFilters.includes(value)
      ? currentFilters.filter((genreId) => genreId !== value)
      : [...currentFilters, value];
    setValue('with_genres', updatedSelectedGenres.join(','));
    return updatedSelectedGenres;
  }, [setValue, currentFilters]);

  return (
    <div>
      <h3 className="text-mauve12 font-medium">Gêneros</h3>
      <ul className="flex flex-wrap gap-2 mt-2">
        {genres.map((genre) => (
          <li
            key={genre.id}
          >
            <Badge
              className={`${currentFilters.includes(genre.id) ? 'bg-purple9 !text-white' : 'bg-mauve2'} text-mauve12 cursor-pointer lg:!text-sm !font-normal hover:bg-purple8 hover:text-white focus:outline-none focus:ring-1 focus:ring-purple9 focus:!ring-offset-0 border-mauve3 shadow-sm`}
              onClick={() => handleClick(genre.id)}
              tabIndex={0}
            >
              {genre.name}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Genres;
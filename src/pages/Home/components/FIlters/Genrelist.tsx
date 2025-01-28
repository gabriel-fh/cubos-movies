import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { useFilter } from '@/contexts/Filters'

const GenreList = ({ genres }: { genres: Genre[] }) => {
  const { setValue, watch } = useFilter()
  const currentFilters = watch('with_genres') ? watch('with_genres').split(',').map(item => parseInt(item)) : []
  const [selectedGenres, setSelectedGenres] = useState<number[]>(currentFilters)

  const handleClick = (value: number) => {
    setSelectedGenres((prevSelected) => {
      const updatedSelectedGenres = prevSelected.includes(value)
        ? prevSelected.filter((genreId) => genreId !== value)
        : [...prevSelected, value];
      setValue('with_genres', updatedSelectedGenres.join(','));
      return updatedSelectedGenres;
    });
  }

  return (
    <div>
      <h3 className="text-mauve12 font-semibold">Gêneros</h3>
      <ul className="flex flex-wrap gap-2 mt-2">
        {genres.map((genre) => (
          <li key={genre.id}>
            <Badge
              variant="outline"
              className={`${selectedGenres.includes(genre.id) ? 'bg-purple9 text-white ' : 'bg-mauve2'} cursor-pointer !font-normal !hover:bg-red-500 `}
              onClick={() => handleClick(genre.id)}
            >
              {genre.name}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenreList;
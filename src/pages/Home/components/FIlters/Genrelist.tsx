import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { useFilter } from '@/contexts/Filters'

const Genrelist = ({ genres }: { genres: Genre[] }) => {
  const { isSaved, setFilters } = useFilter()

  const [selectedGenres, setSelectedGenres] = useState<number[]>([])

  const handleClick = (value: number) => {
    setSelectedGenres((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((genreId) => genreId !== value)
      } else {
        return [...prevSelected, value]
      }
    })
  }

  useEffect(() => {
    if(isSaved) {
      setFilters(prev =>({
        ...prev,
        with_genres: selectedGenres.join(',')
      }))
    }
  }, [isSaved, selectedGenres]);

  return (
    <div>
      <h3 className="text-mauve12 font-semibold">Gêneros</h3>
      <ul className="flex flex-wrap gap-2 mt-2">
        {genres.map((genre) => (
          <li key={genre.id}>
            <Badge
              variant="outline"
              className={selectedGenres.includes(genre.id) ? 'bg-purple9 text-white' : 'bg-mauve2'}
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

export default Genrelist;
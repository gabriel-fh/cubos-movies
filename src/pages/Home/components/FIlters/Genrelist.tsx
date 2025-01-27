import { Badge } from '@/components/ui/badge'

const Genrelist = ({genres}: {genres: Genre[]}) => {
  return (
    genres && (
      <div>
        <h3 className="text-mauve12 font-semibold">Gêneros</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {genres.map((genre) => (
            <li key={genre.id}>
              <Badge variant="outline" className="bg-mauve2">{genre.name}</Badge>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

export default Genrelist
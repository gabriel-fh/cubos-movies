import Card from './Card'
import Rating from '@/components/Rating'

type TitleRatingProps = {
  title: string
  original_title: string
  tagline: string
  popularity: number
  vote_count: number
  vote_average: number
}

const TitleRating = ({...pros}: TitleRatingProps) => {
  return (
    <section className="flex-1 lg:col-start-2 lg:col-span-3 xl:col-start-3 xl:col-span-5">
      <div className=" flex-1 flex flex-wrap gap-4 lg:gap-0">
        <div className="w-full md:flex-1 md:min-w-[300px] h-fit">
          <h1 className="text-2xl font-bold text-mauve12">{pros.title}</h1>
          <p className="text-mauve11 text-[15px] md:text-base">Título original: {pros.original_title}</p>
          {pros.tagline && <p className="text-mauve12 text-[15px] md:text-base italic lg:mt-2">{pros.tagline}</p>}
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center h-fit flex-1">
          <div className="flex lg:justify-end gap-4 flex-1">
            <Card title="Popularidade" value={pros.popularity} variant="secondary" className="md:flex-none" />
            <Card title="Votos" value={pros.vote_count} variant="secondary" className="md:flex-none" />
          </div>
          <Rating voteAverage={pros.vote_average} variant="secondary" />
        </div>
      </div>
    </section>
  )
}

export default TitleRating
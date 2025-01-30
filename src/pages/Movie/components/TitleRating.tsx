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

const TitleRating = ({ ...props }: TitleRatingProps) => {

  const popularity = new Intl.NumberFormat().format(props.popularity);
  const voteCount = new Intl.NumberFormat().format(props.vote_count);

  return (
    <section className="flex-1 lg:col-start-2 lg:col-span-3 xl:col-start-3 xl:col-span-5">
      <div className=" flex-1 flex flex-wrap gap-4 lg:gap-0">
        <div className="w-full flex flex-col justify-start md:flex-1 md:min-w-[300px] h-fit">
          <h1 className="text-2xl font-bold text-mauve12 xl:text-3xl">{props.title}</h1>
          <p className="text-mauve11 text-[15px] md:text-base xl:text-lg">Título original: {props.original_title}</p>
          {props.tagline && (
            <p className="text-mauve12 text-[15px] md:text-base xl:text-lg italic lg:mt-4">
              {props.tagline}
            </p>
          )}
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center h-fit flex-1">
          <div className="flex lg:justify-end gap-4 flex-1">
            <Card
              title="Popularidade"
              value={popularity}
              className="md:flex-none font-semibold"
              variant='secondary'
            />
            <Card
              title="Votos"
              value={voteCount}
              className="md:flex-none font-semibold"
              variant='secondary'
            />
          </div>
          <Rating voteAverage={props.vote_average} variant="secondary" />
        </div>
      </div>
    </section>
  )
}

export default TitleRating
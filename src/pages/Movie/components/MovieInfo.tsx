import Card from './Card'

type MovieInfoProps = {
  release_date: string
  runtime: number
  status: string
  original_language: string
  revenue: number
  budget: number
}
const MovieInfo = ({ ...props }: MovieInfoProps) => {

  return (
    <section className="grid gap-4 md:col-start-1 md:col-span-2 md:row-start-4 lg:col-start-3 lg:col-span-1 lg:row-start-2  xl:col-start-5 xl:col-span-3 h-fit">
      <div className="grid grid-cols-2 items-center flex-wrap gap-4 h-fit">
        <Card title="Lançamento" value={props.release_date} />
        <Card title="Duração" value={props.runtime} />
        <Card title="Situação" value={props.status} />
        <Card title="Idioma" value={props.original_language} />
      </div>
      <div className="flex flex-wrap gap-4 flex-1 h-fit">
        <Card title="Receita" value={props.revenue} />
        <Card title="Orçamento" value={props.budget} />
        <Card title="Lucro" value={props.revenue - props.budget} />
      </div>
    </section>
  )
}

export default MovieInfo
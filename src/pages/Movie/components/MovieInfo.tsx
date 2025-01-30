import { MOVIE_STATUS } from '@/utils/constants';
import Card from './Card'
import { getFormatDate, getFormatRunTime, getUSDFormat } from '@/utils/util';

type MovieInfoProps = {
  release_date: string
  runtime: number
  status: string
  original_language: string
  revenue: number
  budget: number
}
const MovieInfo = ({ ...props }: MovieInfoProps) => {

  const formattedDate = getFormatDate(props.release_date);
  const formattedTime = getFormatRunTime(props.runtime);
  const formattedRevenue = getUSDFormat(props.revenue);
  const formattedBudget = getUSDFormat(props.budget);
  const formattedProfit = getUSDFormat(props.revenue - props.budget);
  
  return (
    <section className="grid gap-4 md:col-start-1 md:col-span-2 md:row-start-4 lg:col-start-3 lg:col-span-1 
      lg:row-start-2 xl:col-start-5 xl:col-span-3 h-fit"
    >
      <div className="grid grid-cols-2 items-center flex-wrap gap-4 h-fit">
        <Card title="Lançamento" value={formattedDate} />
        <Card title="Duração" value={formattedTime} />
        <Card title="Situação" value={MOVIE_STATUS[props.status]} />
        <Card title="Idioma" value={props.original_language} />
      </div>
      <div className="flex flex-wrap gap-4 flex-1 h-fit">
        <Card title="Receita" value={formattedRevenue} />
        <Card title="Orçamento" value={formattedBudget} />
        <Card title="Lucro" value={formattedProfit} />
      </div>
    </section>
  )
}

export default MovieInfo
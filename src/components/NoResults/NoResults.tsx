import { SadClipBoardSvg, SearchSvg } from "@/components/Svg/Svg"

type NoResultsProps = {
  searchValue?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const NoResults = ({ searchValue, variant = 'primary', className }: NoResultsProps) => {

  const title = !searchValue ? 'Nenhum resultado encontrado' : `Nenhum resultado encontrado para "${searchValue}" 🙁`
  const desc = !searchValue ? 'Não foi possível encontrar o que você está procurando' : 'Verifique se o termo de busca está correto e tente novamente.'
  return (
    <div className={`flex flex-col items-center justify-center gap-4 text-center md:mt-4 ${className}`}>
      {variant === 'secondary' ? (
        <SadClipBoardSvg />
      ) : (
        <SearchSvg />
      )}
      <h2 className="text-lg font-semibold text-mauve12 lg:text-xl">
        { variant === 'secondary' ? "Ops! Não foi possível carregar as informações" : title }
      </h2>
      <h3 className="text-sm font-medium lg:text-lg text-mauve12">
        {variant === 'secondary' ? "Tente novamente mais tarde" : desc}
      </h3>
    </div>
  )
}

export default NoResults
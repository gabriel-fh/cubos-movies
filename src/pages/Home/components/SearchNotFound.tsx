import { SearchSvg } from "@/components/Svg/Svg"

const SearchNotFound = ({ searchValue }: { searchValue: string }) => {

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center md:mt-4">
      <SearchSvg />
      <h2 className="text-lg font-semibold text-mauve12">
        {!searchValue ? 'Nenhum resultado encontrado' : `Nenhum resultado encontrado para "${searchValue}"`}
      </h2>
      <h3 className="text-sm text-mauve12">
        {!searchValue ? "Não foi possível encontrar o que você está procurando" : "Verifique se o termo de busca está correto e tente novamente."}
      </h3>
    </div>
  )
}

export default SearchNotFound
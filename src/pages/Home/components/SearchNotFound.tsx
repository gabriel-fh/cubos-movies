import { SearchSvg } from "@/components/Svg/Svg"

const SearchNotFound = ({ searchValue }: { searchValue: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <SearchSvg />
      <h2 className="text-lg font-semibold text-white">Ops! Não encontramos nada para "{searchValue}" 😕</h2>
      <h3 className="text-sm text-white">Verifique se o termo de busca está correto e tente novamente.</h3>
      
    </div>
  )
}

export default SearchNotFound
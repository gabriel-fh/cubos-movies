import Button from "@/components/Button";
import { Icon } from "@iconify/react";

type SearchAndFilterProps = {
  inputValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchAndFilter = ({ inputValue, onChange }: SearchAndFilterProps) => {
  return (
    <div>
      <div className='w-full flex items-center gap-2 justify-between p-4'>
        <div className='w-full relative'>
          <input
            type="text"
            value={inputValue}
            placeholder='Pesquise por filmes'
            className="w-full p-3 rounded-sm h-full bg-mauve-2 border-2 border-mauve-6 text-mauve-11 font-semibold focus:border-purple-9 focus:outline-none focus:caret-purple-9"
            onChange={onChange}
          />
          {inputValue.length < 1 ? (
            <Icon
              icon={'lets-icons:search-alt-fill'}
              className='absolute right-4 bottom-1/4 text-mauve-11 text-2xl'
            />
          ) : (
            <button
              onClick={() => onChange({ target: { value: '' } } as any)}
              className='absolute right-4 bottom-1/4'>
              <Icon icon={'ic:round-close'} className=" text-mauve-11 text-2xl" />
            </button>
          )}
        </div>
        <Button
          className="px-4 bg-purple-a2 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10"
        >
          <Icon icon={'mage:filter'} className='text-mauve-12 rotate-90 text-2xl' />
        </Button>
      </div>
    </div>
  )
}

export default SearchAndFilter
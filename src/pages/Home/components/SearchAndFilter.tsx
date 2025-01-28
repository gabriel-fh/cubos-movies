import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import Filters from "./FIlters";
import { Drawer } from 'vaul';
import { useFilter } from "@/contexts/Filters";

type SearchAndFilterProps = {
  inputValue: string
  genresData: GenreResponse | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchAndFilter = ({ inputValue, genresData, onChange }: SearchAndFilterProps) => {
  const { isSaved, setIsSaved } = useFilter();
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true)
    if (ref.current) {
      ref.current.click()
    }
    if (isSaved) {
      setIsSaved(false)
    }
  }

  const clearInput = async () => {
    await onChange({ target: { value: '' } } as any)
  }

  return (
    <Drawer.Root>
      <div className='w-full flex items-center gap-2 justify-between p-4'>
        <div className='w-full relative'>
          <input
            type="text"
            value={inputValue}
            placeholder='Pesquise por filmes'
            className="w-full p-3 pr-10 rounded-[4px] h-full bg-mauve2 border-2 border-mauve6 text-mauve11 font-semibold focus:border-purple9 focus:outline-none focus:caret-purple9"
            onChange={onChange}
          />
          {inputValue.length < 1 ? (
            <Icon
              icon={'lets-icons:search-alt-fill'}
              className='absolute right-4 bottom-1/4 text-mauve11 text-2xl'
            />
          ) : (
            <button
              onClick={clearInput}
              className='absolute right-4 bottom-1/4'>
              <Icon icon={'ic:round-close'} className=" text-mauve11 text-2xl" />
            </button>
          )}
        </div>
        <Button
          variant="secondary"
          className="!px-4 bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-1"
          onClick={handleClick}
        >
          <Icon icon={'mage:filter'} className='text-mauve12 rotate-90 text-2xl' />
        </Button>
        <Drawer.Trigger ref={ref} className="hidden" />
      </div>
     {<Filters genresData={genresData} clearInput={clearInput} setOpen={setOpen} />}
    </Drawer.Root>
  )
}

export default SearchAndFilter
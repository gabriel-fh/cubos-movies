import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import Filters from "./FIlters";
import { Drawer } from 'vaul';
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useResize } from "@/hooks/useResize";

type SearchAndFilterProps = {
  inputValue: string
  genresData: GenreResponse | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, isFilter?: boolean) => Promise<void>;
}
const SearchAndFilter = ({ inputValue, genresData, onChange }: SearchAndFilterProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isTablet } = useResize()
  const handleClick = () => {
    if (ref.current) {
      ref.current.click()
    }
  }

  const clearInput = async (isFilter?: boolean) => {
    await onChange({ target: { value: '' } } as any, isFilter)
  }

  return (
    <div className="w-full flex justify-center items-center lg:my-4">
      <div className='w-full sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-5/12 flex items-center gap-2  p-4'>
        <div className='w-full relative'>
          <input
            type="text"
            value={inputValue}
            placeholder='Pesquise por filmes'
            className="w-full p-3 pr-10 rounded-[4px] h-full bg-mauve2 border-2 border-mauve6 text-mauve12 font-medium focus:border-purple9 focus:outline-none focus:caret-purple9 placeholder:text-mauve9"
            onChange={onChange}
          />
          {inputValue.length < 1 ? (
            <Icon
              icon={'lets-icons:search-alt-fill'}
              className='absolute right-4 bottom-1/4 text-mauve11 text-2xl'
            />
          ) : (
            <button
              onClick={async () => {
                clearInput()
              }}
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
        {!isTablet ? (
          <Drawer.Root>
            <Drawer.Trigger ref={ref} className="hidden" />
            <Filters
              genresData={genresData}
              clearInput={clearInput}
            />
          </Drawer.Root>
        ) : (
          <Sheet>
            <SheetTrigger ref={ref} className="hidden" />
            <Filters
              genresData={genresData}
              clearInput={clearInput}
            />
          </Sheet>
        )}

      </div>
    </div>
  )
}

export default SearchAndFilter
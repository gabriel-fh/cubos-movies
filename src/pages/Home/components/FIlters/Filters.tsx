import { Drawer } from 'vaul';
import Button from '@/components/Button';
import Ordenate from './Ordenate';
import { useFilter } from '@/contexts/Filters';
import { useCallback, useRef } from 'react';
import VoteAverage from './VoteAverage';
import Lang from './Lang';
import Genres from './Genres';
import { useResize } from '@/hooks/useResize';
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

type FiltersProps = {
  clearInput: (isFilter?: boolean) => void;
  genresData: GenreResponse | undefined;
}

const Filters = ({ genresData, clearInput }: FiltersProps) => {
  const { filters, reset, setFilters, handleSubmit, setUrlParams } = useFilter();
  const ref = useRef<HTMLButtonElement>(null);
  const { isTablet } = useResize();
  const close = () => {
    if (ref.current) {
      ref.current.click()
    }
  }

  const cancel = () => {
    close()
    reset(filters)
  }

  const handleClick = useCallback(async (data: Filter) => {
    await setFilters(data);
    await setUrlParams(data);
    clearInput(true);
    setTimeout(() => {
      close()
    }, 10) //gambiarra
  }, [setFilters, setUrlParams, clearInput]);

  const FormFilter = () => {
    return (
      <form className="p-4 sm:p-0 bg-mauve1 rounded-t-[10px] flex-1 overflow-y-auto sm:overflow-visible" onSubmit={handleSubmit(handleClick)}>
        {!isTablet && (
          <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-mauve6 mb-4" />
        )}
        <div className="flex flex-col gap-5">
          <div className='flex items-center justify-between'>
            {!isTablet && (
              <Drawer.Title className="font-semibold text-mauve12 text-base">Encontre o que você procura</Drawer.Title>
            )}
          </div>
          <Ordenate />
          {genresData && genresData?.genres?.length && <Genres genres={genresData.genres} />}
          <Lang />
          <VoteAverage />
          <div className="flex gap-4 w-full mt-4">
            <Button className="w-full !py-2 !bg-mauve7" onClick={cancel} type="button">Cancelar</Button>
            <Button className="w-full !py-2">Salvar</Button>
            {!isTablet ? (
              <Drawer.Close ref={ref} className="hidden" />
            ) : (
              <SheetClose ref={ref} />
            )}
          </div>
        </div>
      </form>
    )
  }

  return (
    !isTablet ? (
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" onClick={cancel} />
        <Drawer.Content className="bg-mauve8 flex flex-col rounded-t-[10px] mt-24 max-h-[90%] fixed bottom-0 left-0 right-0 outline-none">
          <FormFilter />
        </Drawer.Content>
      </Drawer.Portal>
    ) : (
      <SheetContent onClose={cancel}>
        <SheetHeader >
          <SheetTitle className="font-semibold text-mauve12 text-base">Encontre o que você procura</SheetTitle>
        </SheetHeader>
        <FormFilter />
      </SheetContent>
    )
  );
};

export default Filters;


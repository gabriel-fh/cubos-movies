import { Drawer } from 'vaul';
import Button from '@/components/Button';
import Ordenate from './Ordenate';
import GenreList from './GenreList';
import { useFilter } from '@/contexts/Filters';
import { useRef } from 'react';
import VoteAverage from './VoteAverage';
import Lang from './Lang';

type FiltersProps = {
  genresData: GenreResponse | undefined;
  clearInput: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = ({ genresData }: FiltersProps) => {
  const { setFilters, handleSubmit, setUrlParams } = useFilter();
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = async (data:Filter) => {
    console.log(data)
    setUrlParams(data);
    setFilters(data); 
  };

  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="bg-mauve8 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <form className="p-4 bg-mauve1 rounded-t-[10px] flex-1" onSubmit={handleSubmit(handleClick)}>
          <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-mauve6 mb-4" />
          <div className="flex flex-col gap-5 max-w-md mx-auto">
            <Drawer.Title className="font-semibold text-mauve12 text-base">Encontre o que você procura</Drawer.Title>
            <Ordenate  />
            {genresData?.genres && <GenreList genres={genresData.genres} />}
            <Lang />
            <VoteAverage />
            <div className="flex gap-4 w-full mt-4">
              {/* <Button className="w-full !py-2 !bg-mauve7" onClick={close}>Cancelar</Button> */}
              <Button className="w-full !py-2">Salvar</Button>
              <Drawer.Close ref={ref} className="hidden" />
            </div>
          </div>
        </form>
      </Drawer.Content>
    </Drawer.Portal>
  );
};

export default Filters;
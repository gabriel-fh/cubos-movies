import { Drawer } from 'vaul';
import { Slider } from "@/components/ui/slider"
import Button from '@/components/Button';
import Ordenate from './Ordenate';
import Genrelist from './Genrelist';
import Releases from './Releases';
import { useFilter } from '@/contexts/Filters';
import { useEffect, useRef } from 'react';

type FiltersProps = {
  genresData: GenreResponse | undefined;
}

const Filters = ({ genresData }: FiltersProps) => {
  const {isSaved, setIsSaved} = useFilter()
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if(isSaved) {
      setIsSaved(false)
    }
  }, []);

  const handleClick = () => {
    setIsSaved(true)
    if(ref.current) {
      ref.current.click()
    }
  }
  
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="bg-mauve8 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div className="p-4 bg-mauve1 rounded-t-[10px] flex-1">
          <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-mauve6 mb-4" />
          <div className="flex flex-col gap-5 max-w-md mx-auto">
            <Drawer.Title className="font-semibold text-mauve12 text-base">Encontre o que você procura</Drawer.Title>
            <Ordenate />
            {genresData?.genres && <Genrelist genres={genresData.genres} />}
            <Releases />

            <div>
              <h3 className='text-mauve12 font-semibold mb-2'>Pontuação média</h3>
              <Slider
                min={0}
                max={200}
                step={10}
                defaultValue={[0, 200]}
                minStepsBetweenThumbs={10}
                className='bg-mauve2'
              />
            </div>
            <div className="w-full">
              <Button className="w-full py-3"onClick={handleClick}>Salvar</Button>
              <Drawer.Close ref={ref} className="hidden" />
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  )
}

export default Filters;
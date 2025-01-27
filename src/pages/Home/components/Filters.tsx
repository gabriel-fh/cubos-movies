import { Drawer } from 'vaul';
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import DatePicker from '@/components/DatePicker';
import Button from '@/components/Button';
import { SORT_BY_OPTIONS } from '@/utils/constants';


type FiltersProps = {
  genresData: GenreResponse | undefined;
}

const Filters = ({ genresData }: FiltersProps) => {

  

  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="bg-mauve8 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div className="p-4 bg-mauve1 rounded-t-[10px] flex-1">
          <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-mauve6 mb-4" />
          <div className="flex flex-col gap-5 max-w-md mx-auto">
            <Drawer.Title className="font-semibold text-mauve12 text-base">Encontre o que você procura</Drawer.Title>
            <div>
              <h3 className="text-mauve-12 font-semibold">Ordenar</h3>
              <Select>
                <SelectTrigger className="w-full mt-2 border-2 border-mauve6">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {genresData?.genres && (
              <div>
                <h3 className="text-mauve12 font-semibold">Gêneros</h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {genresData.genres.map((genre) => (
                    <li key={genre.id}>
                      <Badge variant="outline" className="bg-mauve2">{genre.name}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className='text-mauve12 font-semibold mb-2'>Lançamentos</h3>
              <div className='flex flex-row gap-2'>
                <div className='w-1/2'>
                  <p className='text-mauve12 font-medium text-sm'>De</p>
                  <DatePicker />
                </div>
                <div className='w-1/2'>
                  <p className='text-mauve12 font-medium text-sm'>Até</p>
                  <DatePicker />
                </div>
              </div>
            </div>
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
              <Button className="w-full py-3">Salvar</Button>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  )
}

export default Filters;
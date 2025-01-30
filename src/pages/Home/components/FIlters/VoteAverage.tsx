import { Slider } from '@/components/ui/slider'
import { useFilter } from '@/contexts/Filters';

const VoteAverage = () => {
  const { watch, setValue } = useFilter()
  const voteAvGte = Number(watch('vote_average_gte'));
  const voteAvLte = Number(watch('vote_average_lte'));
  const currentValue = [isNaN(voteAvGte) ? 0 : voteAvGte, isNaN(voteAvLte) ? 10 : voteAvLte];

  const handleChange = (newValue: number[]) => {
    setValue('vote_average_gte', newValue[0]);
    setValue('vote_average_lte', newValue[1]);
  };

  return (
    <div>
      <h3 className='text-mauve12 font-medium mb-2'>Pontuação média</h3>
      <div className='relative mt-4 z-[5]'>
        <Slider
          min={0}
          max={10}
          step={1}
          defaultValue={[0, 10]}
          className='bg-mauve2 cursor-pointer'
          value={currentValue}
          onValueChange={handleChange}
        />
        <div className="flex w-full justify-between border-t">
          {Array.from({ length: 11 }).map((_, idx) => (
            <div
              key={idx}
              className="relative translate-x-[3px] -z-[1] flex flex-col items-center"
            >
              <div className="bg-mauve4 w-[1.5px] h-[5px]" />
              <div className="text-xs text-mauve12">{idx}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VoteAverage
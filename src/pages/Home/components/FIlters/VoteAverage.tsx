import { Slider } from '@/components/ui/slider'
import { useFilter } from '@/contexts/Filters';
import { useState } from 'react';

const VoteAverage = () => {
  const { watch, setValue} = useFilter()
  const arr = [Number(watch('vote_average_gte')) ?? 0, Number(watch('vote_average_lte')) ?? 10];
  const [currentValue, setCurrentValue] = useState<number[]>(arr);

  const handleChange = (newValue: number[]) => {
    setCurrentValue(newValue);
    setValue('vote_average_gte', newValue[0]);
    setValue('vote_average_lte', newValue[1]);
  };

  return (
    <div>
      <h3 className='text-mauve12 font-semibold mb-2'>Pontuação média</h3>
      <div className='relative mt-4 z-[5]'>
        <Slider
          min={0}
          max={10}
          step={1}
          className='bg-mauve2'
          value={currentValue}
          onValueChange={handleChange}
        />
        <div className="flex w-full justify-between border-t">
          {Array.from({ length: 11 }).map((_, idx) => (
            <div
              className="relative -z-[1] flex translate-x-[3px] flex-col items-center"
              key={idx}
            >
              <div className="h-[4px] w-[1px] bg-mauve3 " />
              <div className="text-xs">{idx}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VoteAverage
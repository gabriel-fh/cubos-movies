import { Slider } from '@/components/ui/slider'
import { useFilter } from '@/contexts/Filters';
import { useEffect, useState } from 'react';

const VoteAverage = () => {
  const { filters, isSaved, setFilters } = useFilter()
  const arr = [filters['vote_average.gte'] ?? 0, filters['vote_average.lte'] ?? 10];
  const [value, setValue] = useState<number[]>(arr);
  
  const handleChange = (newValue: number[]) => {
    setValue(newValue);
  };

    useEffect(() => {
      if(isSaved) {
        console.log(value);
        setFilters(prev => ({
          ...prev,
          "vote_average.gte": value[0],
          "vote_average.lte": value[1]
        }))
      }
    }, [isSaved]);

  return (
    <div>
      <h3 className='text-mauve12 font-semibold mb-2'>Pontuação média</h3>
      <div className='relative mt-4 z-[5]'>
        <Slider
          min={0}
          max={10}
          step={1}
          className='bg-mauve2'
          value={value}
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
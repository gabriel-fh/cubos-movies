import DatePicker from '@/components/DatePicker'
import { useFilter } from '@/contexts/Filters';
import { useEffect, useState } from 'react';

const Releases = () => {
  const {filters, isSaved, setFilters} = useFilter();

  const formatDate = (date: string) => {
    if(date.includes('/')) return date.split('/').reverse().join('-')
    return date.split('-').reverse().join('/')
  }

  const [date, setDate] = useState<{ start: Date; end: Date; }>({
    start: new Date(filters['release_date.gte'] || '01/01/2000'),
    end:  new Date()
  });

  useEffect(() => {
    if(isSaved) {
      setFilters(prev => ({
        ...prev,
        'release_date.gte': formatDate(date.start.toISOString()),
        'release_date.lte': formatDate(date.end.toISOString())
      }))
    }
  }, [isSaved]);

  return (
    <div>
      <h3 className='text-mauve12 font-semibold mb-2'>Lançamentos</h3>
      <div className='flex flex-row gap-2'>
        <div className='w-1/2'>
          <p className='text-mauve12 font-medium text-sm'>De</p>
          <DatePicker date={date.start} handleSelect={(day) => {
            if (day) {
              setDate(prev => ({
                ...prev,
                start: day
              }))
            }
          }} />
        </div>
        <div className='w-1/2'>
          <p className='text-mauve12 font-medium text-sm'>Até</p>
          <DatePicker date={date.end} handleSelect={(day) => {
            if (day) {
              setDate(prev => ({
                ...prev,
                end: day
              }))
            }
          }} />
        </div>
      </div>
    </div>
  )
}

export default Releases
import DatePicker from '@/components/DatePicker'

const Releases = () => {
  return (
    <>
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
    </>
  )
}

export default Releases
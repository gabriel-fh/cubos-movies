import Button from '../../../components/Button'
import { Icon } from "@iconify/react";

const SearchAndFilter = () => {
  return (
    <div>
      <div className='w-full flex items-center gap-2 justify-between p-4'>
        <input type="text" placeholder='Pesquise por filmes' className="w-full p-3 rounded-sm h-full bg-mauve-2 border-2 border-mauve-6 text-mauve-11 font-semibold focus:border-purple-9 focus:outline-none focus:caret-purple-9"
        />
        <Button>
          <Icon icon={'mage:filter'} className='text-white rotate-90 text-2xl' />
        </Button>
      </div>
    </div>
  )
}

export default SearchAndFilter
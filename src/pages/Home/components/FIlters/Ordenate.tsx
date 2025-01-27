import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SORT_BY_OPTIONS } from "@/utils/constants"
import { Icon } from "@iconify/react/dist/iconify.js"

const Ordenate = () => {
  return (
    <>
      <h3 className="text-mauve-12 font-semibold">Ordenar</h3>
      <Select>
        <SelectTrigger className="w-full mt-2 bg-mauve2 focus:outline-none focus:ring-1 focus:ring-purple9 focus:caret-purple9">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className='bg-mauve2'>
          {SORT_BY_OPTIONS.map((option) => {
            return (
              <SelectItem key={option.value} value={option.value}>
                <span className='flex items-center gap-2'>
                  <Icon icon={option.value.includes("desc") ? 'mdi-light:arrow-up' : 'mdi-light:arrow-down'} inline className='text-lg' /> {option.label}
                </span>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </>
  )
}

export default Ordenate
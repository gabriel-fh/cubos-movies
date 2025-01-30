import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFilter } from "@/contexts/Filters"
import { SORT_BY_OPTIONS } from "@/utils/constants"
// import { Icon } from "@iconify/react/dist/iconify.js"

const Ordenate = () => {
  const { setValue, watch } = useFilter()
  const currentValue = watch('sort_by') || SORT_BY_OPTIONS[0].value

  const handleValueChange = (value: string) => {
    setValue('sort_by', value)
  };

  return (
    <div>
      <h3 className="text-mauve-12 font-medium">Ordenar</h3>
      <Select value={currentValue} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full mt-2 bg-mauve2 focus:outline-none focus:ring-1 focus:ring-purple9 focus:caret-purple9">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className='bg-mauve2' >
          {SORT_BY_OPTIONS.map((option) => {
            return (
              <SelectItem key={option.value} value={option.value} className="cursor-pointer" >
                <span className='flex items-center gap-2'>
                  {/* <Icon
                    icon={option.value.includes("desc") ? 'mi:arrow-down' : 'mi:arrow-up'}
                    inline
                    className='text-lg'
                  /> */}
                  {option.label}
                </span>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Ordenate
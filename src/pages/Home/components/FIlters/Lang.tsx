import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFilter } from '@/contexts/Filters';
import { getLanguageName } from '@/utils/util';
import { useState } from 'react'

const Lang = () => {
  const { langData, setValue, watch } = useFilter()
  const [currentValue, setCurrentValue] = useState<string>(watch('with_original_language'))

  const handleValueChange = (value: string) => {
    setCurrentValue(value)
    setValue('with_original_language', value)
  };


  if (!langData) return null;

  return (
    langData && (
      <div>
        <h3 className="text-mauve12 font-medium">Idioma de origem</h3>
        <Select value={currentValue} onValueChange={handleValueChange}>
          <SelectTrigger className="w-full bg-mauve2 mt-2 focus:outline-none focus:ring-1 focus:ring-purple9 focus:caret-purple9">
            <SelectValue placeholder={'Selecione um idioma'} className='selectPlaceholder' />
          </SelectTrigger>
          <SelectContent className='bg-mauve2' >
            {langData.map((lang) => {
              if (lang.iso_639_1) {
                return (
                  <SelectItem key={lang.iso_639_1} value={lang.iso_639_1} className="cursor-pointer">
                    <span>
                      {getLanguageName(lang.iso_639_1, lang.english_name)}
                    </span>
                  </SelectItem>
                );
              }
              return null;
            })}
          </SelectContent>
        </Select>
      </div>
    )
  )
}

export default Lang
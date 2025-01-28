import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFilter } from '@/contexts/Filters';
import { useFetchLang } from '@/hooks/useFetchLang';
import { useState } from 'react'

const Lang = () => {
  const { data } = useFetchLang();
  const { setValue, watch } = useFilter()
  const [currentValue, setCurrentValue] = useState<string>(watch('with_original_language'))

  const handleValueChange = (value: string) => {
    setCurrentValue(value)
    setValue('with_original_language', value)
  };

  const getLangName = (langCode: string) => {
    const language = new Intl.DisplayNames(['pt-BR'], { type: 'language' });
    return language.of(langCode);
  };

  if (!data) return null;

  return (
    data && (
      <div>
        <h3 className="text-mauve12 font-medium">Idioma de origem</h3>
        <Select value={currentValue} onValueChange={handleValueChange}>
          <SelectTrigger className="w-full bg-mauve2 mt-2 focus:outline-none focus:ring-1 focus:ring-purple9 focus:caret-purple9">
            <SelectValue placeholder={'Selecione um idioma'} className='selectPlaceholder' />
          </SelectTrigger>
          <SelectContent className='bg-mauve2' >
            {data.map((lang) => {
              let langName = getLangName(lang.iso_639_1);
              langName = !langName ? lang.iso_639_1 : langName;
              langName = langName === lang.iso_639_1 ? lang.english_name : langName
              return (
                <SelectItem key={lang.iso_639_1} value={lang.iso_639_1} className='cursor-pointer' >
                  <span>
                    {langName.charAt(0).toUpperCase() + langName.slice(1)}
                  </span>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </div>
    )
  )
}

export default Lang
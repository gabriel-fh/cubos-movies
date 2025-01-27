import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFilter } from '@/contexts/Filters';
import { useFetchLang } from '@/hooks/useFetchLang';
import { useEffect, useState } from 'react'

const Lang = () => {
  const { filters, isSaved, setFilters } = useFilter()
  const { data } = useFetchLang();
  const [value, setValue] = useState<string>(filters.with_original_language || '');

  const handleValueChange = (value: string) => {
    setValue(value)
  };

  const getLangName = (langCode: string) => {
    const language = new Intl.DisplayNames(['pt-BR'], { type: 'language' });
    return language.of(langCode);
  };

  useEffect(() => {
    if (isSaved) {
      setFilters(prev => ({
        ...prev,
        with_original_language: value
      }))
    }
  }, [isSaved]);

  if (!data) return null;

  return (
    data && (
      <div>
        <h3 className="text-mauve12 font-semibold">Idioma de origem</h3>
        <Select value={value} onValueChange={handleValueChange}>
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
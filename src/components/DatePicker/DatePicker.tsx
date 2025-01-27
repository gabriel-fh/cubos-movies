"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SelectSingleEventHandler } from "react-day-picker"

type DatePickerProps = {
  date: Date;          
  handleSelect: SelectSingleEventHandler
}
const DatePicker = ({ date, handleSelect }: DatePickerProps) => {

  const isDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date > today;
  };


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full bg-mauve2 font-semibold mt-2 justify-start text-left ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-mauve12" />
          {date ? format(date, "dd/MM/yyyy") : <span className="text-mauve12">Selecione uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          selected={date}
          // captionLayout="dropdown"
          onSelect={handleSelect}
          className="bg-mauve2"
          // toYear={2050}
          // fromYear={1900}
          defaultMonth={date}
          locale={ptBR}
          disabled={isDisabled}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker;

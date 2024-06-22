'use client'

import { Dayjs } from "dayjs"
import { createContext, Dispatch, SetStateAction } from "react"

type CalendarContextType = {
  monthIdx: number;
  setMonthIdx: Dispatch<SetStateAction<number>>;
  selectedDate: Dayjs | null;
  setSelectedDate: Dispatch<SetStateAction<Dayjs | null>>;
}

const CalendarContext = createContext<CalendarContextType>({
  monthIdx: 0,
  setMonthIdx: () => {},
  selectedDate: null,
  setSelectedDate: () => {}
})

export default CalendarContext

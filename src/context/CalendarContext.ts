'use client'

import { Dayjs } from "dayjs"
import { createContext, Dispatch, SetStateAction } from "react"

type CalendarContextType = {
  monthIdx: number;
  setMonthIdx: Dispatch<SetStateAction<number>>;
}

const CalendarContext = createContext<CalendarContextType>({
  monthIdx: 0,
  setMonthIdx: () => {},
})

export default CalendarContext

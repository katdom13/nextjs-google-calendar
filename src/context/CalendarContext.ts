'use client'

import dayjs, { Dayjs } from "dayjs"
import { createContext, Dispatch, SetStateAction } from "react"

type CalendarContextType = {
  monthIdx: number;
  setMonthIdx: Dispatch<SetStateAction<number>>;
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
  showEventModal: boolean,
  setShowEventModal: Dispatch<SetStateAction<boolean>>,
}

const CalendarContext = createContext<CalendarContextType>({
  monthIdx: 0,
  setMonthIdx: () => {},
  selectedDate: dayjs(),
  setSelectedDate: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
})

export default CalendarContext

'use client'

import { ReactNode, useState } from "react"
import CalendarContext from "./CalendarContext"
import dayjs, { Dayjs } from "dayjs"

type ContextWrapperProps = {
  children: ReactNode
}

const ContextWrapper = ({children}: ContextWrapperProps) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)

  return (
    <CalendarContext.Provider value={{monthIdx, setMonthIdx, selectedDate, setSelectedDate}}>
      {children}
    </CalendarContext.Provider>
  )
}

export default ContextWrapper

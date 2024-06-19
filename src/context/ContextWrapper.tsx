'use client'

import { ReactNode, useState } from "react"
import CalendarContext from "./CalendarContext"
import dayjs from "dayjs"

type ContextWrapperProps = {
  children: ReactNode
}

const ContextWrapper = ({children}: ContextWrapperProps) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())

  return (
    <CalendarContext.Provider value={{monthIdx, setMonthIdx}}>
      {children}
    </CalendarContext.Provider>
  )
}

export default ContextWrapper

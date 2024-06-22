'use client'

import CalendarContext from "@/context/CalendarContext"
import dayjs from "dayjs"
import Image from "next/image"
import { useContext } from "react"

const CalendarHeader = () => {
  const { monthIdx, setMonthIdx } = useContext(CalendarContext)

  const handlePrevMonth = () => {
    setMonthIdx(monthIdx - 1)
  }

  const handleNextMonth = () => {
    setMonthIdx(monthIdx + 1)
  }

  const handleCurrentMonth = () => {
    setMonthIdx(
      monthIdx === dayjs().month() ? monthIdx + Math.random() : dayjs().month()
    )
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <Image
        src="/logo (2).png"
        alt="calendar"
        width={48}
        height={48}
        className='mr-2'
      />
      <h1 className="mr-10 text-xk text-gray-500 font-bold">Calendar</h1>
      <button className="border rounded py-2 px-4 mr-5" onClick={handleCurrentMonth}>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600">
          chevron_right
        </span>
      </button>
      <h2 className="ml4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIdx)).format("MMMM YYYY")}
      </h2>
    </header>
  )
}

export default CalendarHeader

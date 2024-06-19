'use client'

import { Dayjs } from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import { getMonthlyMatrix } from  '../utils'
import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import MonthView from './MonthView';
import CalendarContext from '@/context/CalendarContext';


const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs[][]>(getMonthlyMatrix())
  const { monthIdx } = useContext(CalendarContext)

  useEffect(() => {
    setCurrentMonth(getMonthlyMatrix(monthIdx))
  }, [monthIdx])

  return (
    <div className='h-screen flex flex-col'>
      <CalendarHeader />
      {/* Spans the whole column */}
      <div className="flex flex-1">
        <Sidebar />
        <MonthView month={currentMonth}/>
      </div>
    </div>
  );
}

export default Calendar

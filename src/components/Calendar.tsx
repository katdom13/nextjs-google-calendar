'use client'

import { useEffect } from 'react';
import { getMonthlyMatrix } from  '../utils'
import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import MonthView from './MonthView';


export default function Calendar() {

  useEffect(() => {
    console.log(getMonthlyMatrix())
  }, [])

  return (
    <div className='h=screen flex flex-columns'>
      <CalendarHeader />
      {/* Spans the whole column */}
      <div className="flex flex-1">
        <Sidebar />
        <MonthView />
      </div>
    </div>
  );
}

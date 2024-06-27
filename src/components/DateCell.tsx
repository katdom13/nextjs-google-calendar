'use client'

import CalendarContext from '@/context/CalendarContext'
import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponent, useContext } from 'react'

type DateCellProps = {
  date: Dayjs
  rowIdx: number
}

const DateCell: FunctionComponent<DateCellProps> = ({date, rowIdx}) => {
  const { setSelectedDate, setShowEventModal } = useContext(CalendarContext)

  const getCurrentDateClass = (): string => {
    return date.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : ''
  }
  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        { rowIdx === 0 && (
          <p className='text-sm mt-1'>{date.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDateClass()}`}>
          {date.format('DD')}
        </p>
      </header>
      <div className='flex-1 cursor-pointer' onClick={() => {
        setSelectedDate(date)
        setShowEventModal(true)
      }}>
        {''}
      </div>
    </div>
  )
}

export default DateCell

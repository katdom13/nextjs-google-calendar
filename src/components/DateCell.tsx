'use client'

/* tailwind-include-classes
bg-indigo-200
bg-gray-200
bg-green-200
bg-blue-200
bg-red-200
bg-purple-200
*/

import CalendarContext from '@/context/CalendarContext'
import { CalendarEvent } from '@/types'
import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponent, useContext, useEffect, useState } from 'react'

type DateCellProps = {
  date: Dayjs
  rowIdx: number
}

const DateCell: FunctionComponent<DateCellProps> = ({date, rowIdx}) => {
  const {
    setSelectedDate,
    setShowEventModal,
    filteredEventsByLabel,
    setSelectedEvent
  } = useContext(CalendarContext)

  const [dateEvents, setDateEvents] = useState<CalendarEvent[]>([])

  useEffect(() => {
    const events = filteredEventsByLabel.filter(
      event => dayjs(event.date).format('DD-MM-YY') === date.format('DD-MM-YY')
    )
    setDateEvents(events)
  }, [filteredEventsByLabel, date])

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
        {dateEvents.map(event => (
          <div
            key={event.id}
            className={`bg-${event.labelColor}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
            onClick={() => setSelectedEvent(event)}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DateCell

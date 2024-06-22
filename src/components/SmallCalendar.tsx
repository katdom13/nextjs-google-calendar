import CalendarContext from "@/context/CalendarContext"
import { getMonthlyMatrix } from "@/utils"
import dayjs, { Dayjs } from "dayjs"
import { Fragment, useContext, useEffect, useState } from "react"

const SmallCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState<Dayjs[][]>(getMonthlyMatrix())
    const [localMonthIdx, setLocalMonthIdx] = useState(dayjs().month())

    const { monthIdx, setMonthIdx, selectedDate, setSelectedDate } = useContext(CalendarContext)


    const handlePrevMonth = () => {
        setLocalMonthIdx(localMonthIdx - 1)
    }

    const handleNextMonth = () => {
        setLocalMonthIdx(localMonthIdx + 1)
    }

    const getDateClass = (date: Dayjs): string => {
        const format = 'DD-MM-YY'
        const dateToday = dayjs().format(format)
        const formattedDate = date.format(format)
        const formattedSelectedDate = selectedDate?.format('DD-MM-YY')

        if (formattedDate === dateToday && dateToday === formattedSelectedDate) {
            return 'bg-blue-900 text-white rounded-full'
        }

        if (dateToday === formattedDate) {
            return 'bg-blue-700 text-white rounded-full'
        }

        if (formattedDate === formattedSelectedDate) {
            return 'bg-blue-100 text-blue-600 rounded-full font-bold'
        }

        return ''
      }

    useEffect(() => {
        setCurrentMonth(getMonthlyMatrix(localMonthIdx))
    }, [localMonthIdx])

    useEffect(() => {
        setLocalMonthIdx(monthIdx)
    }, [monthIdx])

    return (
        <div className="mt-9">
            <header className="flex justify-between">
                <p className="text-gray-500 font-bold">
                    {dayjs(new Date(dayjs().year(), localMonthIdx)).format('MMMM YYYY')}
                </p>
                <div>
                    <button onClick={handlePrevMonth}>
                        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
                            chevron_left
                        </span>
                    </button>
                    <button onClick={handleNextMonth}>
                        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
                            chevron_right
                        </span>
                    </button>
                </div>
            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, i) => (
                    <span key={`weekday-${i}`} className="text-sm py-1 text-center">
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, x) => (
                    <Fragment key={`smallrow-${x}`}>
                        {row.map((col, y) => (
                            <button key={`smallcol-${y}`} className={`py-1 w-full ${getDateClass(col)}`} onClick={() => {
                                setMonthIdx(localMonthIdx)
                                setSelectedDate(col)
                            }}>
                                <span className='text-sm'>{col.format('D')}</span>
                            </button>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default SmallCalendar

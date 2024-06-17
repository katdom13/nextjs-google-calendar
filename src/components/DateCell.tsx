import { Dayjs } from 'dayjs'
import { FunctionComponent } from 'react'

type DateCellProps = {
  date: Dayjs
}

const DateCell: FunctionComponent<DateCellProps> = ({date}) => {
  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        <p className='text-sm mt-1'>{date.format('ddd').toUpperCase()}</p>
        <p className='text-sm p-1 my-1 text-center'>
          {date.format('DD')}
        </p>
      </header>
    </div>
  )
}

export default DateCell

import dayjs, { Dayjs } from 'dayjs';

export function getMonthlyMatrix(month: number = dayjs().month()): Dayjs[][] {
  const year = dayjs().year()
  
  // Returns Sunday (0) - Saturday (6)
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()

  let currentMonthCount = 0 - firstDayOfTheMonth

  // 5 rows for weeks in a month, 7 columns for each day of the week
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    })
  })

  return daysMatrix
}

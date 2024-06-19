import Image from "next/image"

const CalendarHeader = () => {
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
      <button className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button>
        <span className="material-symbols-outlined cursor-pointer text-gray-600">
          chevron_left
        </span>
      </button>
      <button>
        <span className="material-symbols-outlined cursor-pointer text-gray-600">
          chevron_right
        </span>
      </button>
    </header>
  )
}

export default CalendarHeader

'use client'

import { ReactNode, useEffect, useReducer, useState } from "react"
import CalendarContext from "./CalendarContext"
import dayjs, { Dayjs } from "dayjs"
import { CalendarEvent } from "@/types"



export type EventDispatcherAction = {
  type: "create" | "update" | "delete";
  payload: CalendarEvent
}

const eventDispatcher = (state: CalendarEvent[], action: EventDispatcherAction) => {
  const { type, payload } = action

  switch (type) {
    case "create":
      return [...state, payload]
    case "update":
      return state.map(event => event.id === payload.id ? payload : event)
    case "delete":
      return state.filter(event => event.id !== payload.id)
    default:
      throw new Error();
  }
}

// Parametrize this
const getInitialCalendarEvents = (): CalendarEvent[] => {
  let savedEvents = null;
  if (global?.window !== undefined) {
    savedEvents = localStorage.getItem('savedEvents');
  }
  return (savedEvents ? JSON.parse(savedEvents) : []) as CalendarEvent[]
}

type ContextWrapperProps = {
  children: ReactNode
}

const ContextWrapper = ({children}: ContextWrapperProps) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
  const [showEventModal, setShowEventModal] = useState(false)
  const [savedEvents, dispatchEvents] = useReducer(eventDispatcher, [], getInitialCalendarEvents)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  useEffect(() => {
    // Parametrize this
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
  }, [savedEvents])

  useEffect(() => {
    if (!showEventModal && selectedEvent) {
      setSelectedEvent(null)
    }
  }, [showEventModal, selectedEvent])

  return (
    <CalendarContext.Provider value={{
      monthIdx,
      setMonthIdx,
      selectedDate,
      setSelectedDate,
      showEventModal,
      setShowEventModal,
      savedEvents,
      dispatchEvents,
      selectedEvent,
      setSelectedEvent,
    }}>
      {children}
    </CalendarContext.Provider>
  )
}

export default ContextWrapper

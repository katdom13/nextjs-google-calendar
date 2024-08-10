'use client'

import { ReactNode, useEffect, useMemo, useReducer, useState } from "react"
import CalendarContext from "./CalendarContext"
import dayjs, { Dayjs } from "dayjs"
import { CalendarEvent, Label } from "@/types"



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
  const [labels, setLabels] = useState<Label[]>([])

  const filteredEventsByLabel = useMemo(() => (
    savedEvents.filter(
      event => labels.filter(label => label.checked)
        .map(label => label.label)
        .includes(event.labelColor)
    )
  ), [savedEvents, labels])

  useEffect(() => {
    // Parametrize this
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents))

    // Set labels
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map(event => event.labelColor))].map(
        (label) => {
          const currentLabel = prevLabels.find((lbl) => lbl.label === label)
          return {
            label,
            checked: currentLabel?.checked || true
          }
        }
      )
    })
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
      labels,
      setLabels,
      filteredEventsByLabel,
    }}>
      {children}
    </CalendarContext.Provider>
  )
}

export default ContextWrapper

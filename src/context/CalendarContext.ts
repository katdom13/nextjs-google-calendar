'use client'

import dayjs, { Dayjs } from "dayjs"
import { createContext, Dispatch, SetStateAction } from "react"
import { EventDispatcherAction } from "./ContextWrapper";
import { CalendarEvent, Label } from "@/types";

type CalendarContextType = {
  monthIdx: number;
  setMonthIdx: Dispatch<SetStateAction<number>>;
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
  showEventModal: boolean,
  setShowEventModal: Dispatch<SetStateAction<boolean>>,
  savedEvents: CalendarEvent[],
  dispatchEvents: Dispatch<EventDispatcherAction>,
  selectedEvent: CalendarEvent | null,
  setSelectedEvent: Dispatch<SetStateAction<CalendarEvent | null>>,
  labels: Label[],
  setLabels: Dispatch<SetStateAction<Label[]>>,
  filteredEventsByLabel: CalendarEvent[],
}

const CalendarContext = createContext<CalendarContextType>({
  monthIdx: 0,
  setMonthIdx: () => {},
  selectedDate: dayjs(),
  setSelectedDate: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  savedEvents: [],
  dispatchEvents: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  setLabels: () => {},
  filteredEventsByLabel: [],
})

export default CalendarContext

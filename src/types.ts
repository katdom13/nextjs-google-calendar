import { Dayjs } from "dayjs";

// Should be serializable
export type CalendarEvent = {
    id: number;
    title: string;
    description: string;
    labelColor: string;
    date: string;
}

import dayjs from 'dayjs';
export interface CalendarProps {
  selectedDate?: Date;
  onDateSelected: (date: Date) => void;
}

export type CalendarWeeks = Array<{
  week: number;
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
}>;

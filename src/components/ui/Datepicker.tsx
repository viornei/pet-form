"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 12));
  const bookedDates = Array.from(
    { length: 12 },
    (_, i) => new Date(2025, 5, 15 + i)
  );

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      disabled={bookedDates}
      modifiers={{
        booked: bookedDates,
      }}
      modifiersClassNames={{
        booked: "[&>button]:line-through opacity-100",
      }}
      className="rounded-lg border shadow-lg"
      
    />
  );
};
export default DatePicker;

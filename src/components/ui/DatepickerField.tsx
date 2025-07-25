"use client";

import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { enGB } from "date-fns/locale";
import { useState } from "react";

type DatePickerFieldProps = {
  value?: Date;
  onChange: (date: Date | undefined) => void;
};

export default function DatePickerField({
  value,
  onChange,
}: DatePickerFieldProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 rounded-xl">
      <Label htmlFor="date" className="text-sm font-normal">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="bg-custom-gray-100 focus:ring-primary-pink-500 justify-between rounded-xl border-0 font-normal focus:ring-2 focus:outline-none"
          >
            <span className="pl-1">
              {value ? value.toLocaleDateString("en-GB") : "Select date"}
            </span>
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto max-w-100 min-w-40 overflow-hidden bg-white p-0"
          align="start"
        >
          <Calendar
            mode="single"
            locale={enGB}
            selected={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

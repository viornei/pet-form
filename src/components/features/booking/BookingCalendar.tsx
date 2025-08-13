"use client";

import ActionButton from "@/components/ui/ActionButton";
import { Calendar } from "@/components/ui/calendar";
import { createClient } from "@/lib/supabase/supabaseClient";
import { useClientProfileStore } from "@/store/useProfileStore";
import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
type BookingCalendarProps = {
  registrationId?: string;
};

const BookingCalendar = ({ registrationId }: BookingCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  });

  const handleDateSelect = (range: DateRange | undefined) => {
    setSelectedDate(range);
  };
  const user = useUserStore((s) => s.user);
  const profile = useClientProfileStore((s) => s.profile);
  const userId = user?.id;
  const [bookings, setBookings] = useState<any[]>([]);
  const supabase = createClient();
  const fetchBookings = async () => {
    const { data, error } = await supabase.from("bookings").select("*");
    if (error) console.error("Error:", error);
    else setBookings(data ?? []);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const bookedDates = bookings
    .filter((b) => b.status === "paid")
    .map((b) => new Date(b.date));

  const userPendingDates = registrationId
    ? bookings
        .filter(
          (b) => b.status === "pending" && b.registration_id === registrationId,
        )
        .map((b) => new Date(b.date))
    : [];

  function getDatesInRange(from: Date, to: Date): Date[] {
    const dates = [];
    let current = new Date(from);

    while (current <= to) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }

  const createBooking = async () => {
    console.log("Данные для бронирования:", {
      userId,
      registrationId,
      selectedDate,
    });

    if (
      !userId ||
      !registrationId ||
      !selectedDate?.from ||
      !selectedDate?.to
    ) {
      return;
    }

    const datesToBook = getDatesInRange(selectedDate.from, selectedDate.to);

    const { error } = await supabase.from("bookings").insert(
      datesToBook.map((date) => ({
        user_id: userId,
        registration_id: registrationId,
        date: date.toLocaleDateString("sv-SE"),
        status: "pending",
        pet_name: profile?.petName,
        owner_name: profile?.ownerName,
      })),
    );

    if (error) {
      console.error("Ошибка бронирования:", error.message);
    } else {
      console.log("Бронь создана");
      setSelectedDate(undefined);
      await fetchBookings();
    }
  };

  return (
    <div className="flex max-w-80 flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg md:max-w-96 lg:max-w-120 lg:min-w-96">
      <Calendar
        mode="range"
        defaultMonth={selectedDate?.from}
        selected={selectedDate}
        onSelect={handleDateSelect}
        disabled={bookedDates}
        modifiers={{
          booked: bookedDates,
          userPending: userPendingDates,
        }}
        modifiersClassNames={{
          booked: "[&>button]:line-through opacity-100",
          userPending: "[&>button]:bg-pink-100 text-black-200",
        }}
        classNames={{
          range_start: "bg-primary-pink-500 text-white rounded-l-md",
          range_middle: "bg-primary-pink-100 text-primary-pink-700",
          range_end: "bg-primary-pink-500 text-white rounded-r-md",
        }}
        className="w-full rounded-lg border shadow-sm"
      />
      <div className="text-sm text-gray-600">
        {selectedDate?.from && selectedDate?.to ? (
          <span>
            Selected: {selectedDate.from.toLocaleDateString()} -{" "}
            {selectedDate.to.toLocaleDateString()}
          </span>
        ) : selectedDate?.from ? (
          <span>Select end date</span>
        ) : (
          <span>Select start date</span>
        )}
      </div>
      <div className="mt-2">
        <ActionButton
          onClick={() => {
            console.log("Кнопка нажата");
            createBooking();
          }}
        >
          Book stay
        </ActionButton>
      </div>
    </div>
  );
};
export default BookingCalendar;

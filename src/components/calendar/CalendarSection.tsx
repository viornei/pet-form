import ActionButton from "../ui/ActionButton";
import DatePicker from "../ui/Datepicker";

const CalendarSection = () => {
  return (
    <div className="flex w-full items-center bg-primary-pink-100  py-25 px-12">
      <div className="flex max-w-320 items-center justify-between py-25 mx-auto ">
        <div className="flex  flex-col w-1/3 gap-6">
          <h2 className="text-5xl">Calendar</h2>
          <span>
            Use the calendar to easily choose available dates for your pets
            care. Our intuitive interface ensures a seamless booking experience.
          </span>
          <ActionButton>Book</ActionButton>
        </div>
        <DatePicker />
      </div>
    </div>
  );
};
export default CalendarSection;

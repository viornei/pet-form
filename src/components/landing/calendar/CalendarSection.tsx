import ActionButton from "../../ui/ActionButton";
import DatePicker from "../../ui/Datepicker";

const CalendarSection = () => {
  return (
    <section
      id="calendar"
      className="flex w-full items-center bg-primary-pink-100  py-25 px-12 scroll-mt-24 h-auto min-h-screen md:h-screen snap-center justify-center"
    >
      <div className="flex  flex-col md:flex-row gap-10 max-w-330 w-full  items-center justify-between  mx-auto">
        <div className="flex flex-col  max-w-160 md:gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl">Calendar</h2>
            <h3 className="text-xl font-semibold">
              Select your preferred dates for booking your trusted pet sitter.
            </h3>
          </div>
          <span className="hidden md:block">
            Utilize our user-friendly calendar to effortlessly select from a
            variety of available dates for your pets care. Our thoughtfully
            designed and intuitive interface guarantees a seamless and enjoyable
            booking experience, making it easier than ever to ensure your furry
            friend receives the attention and care they deserve.
          </span>
          <a href="#form" className="mt-4 md:mt-12">
            <ActionButton>Book</ActionButton>
          </a>
        </div>
        <DatePicker />
      </div>
    </section>
  );
};
export default CalendarSection;

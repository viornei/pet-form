import ActionButton from "../../ui/ActionButton";
import DatePicker from "../../ui/Datepicker";

const CalendarSection = () => {
  return (
    <section
      id="calendar"
      className="bg-primary-pink-100 flex h-auto min-h-screen w-full snap-center scroll-mt-24 items-center justify-center px-8 py-8 md:h-screen md:px-12 md:py-25"
    >
      <div className="mx-auto flex w-full max-w-330 flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex max-w-160 flex-col md:gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl">Calendar</h2>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold">
                Select your preferred dates for booking your trusted pet sitter.
              </h3>
            </div>
            <span className="text-justify text-sm md:text-base">
              Utilize our user-friendly calendar to effortlessly select from a
              variety of available dates for your pets care. Our thoughtfully
              designed and intuitive interface guarantees a seamless and
              enjoyable booking experience, making it easier than ever to ensure
              your furry friend receives the attention and care they deserve.
            </span>
          </div>
          <a href="#form" className="mt-4 md:mt-12">
            <ActionButton>Book</ActionButton>
          </a>
        </div>
        <div className="mb-20">
          <DatePicker />
        </div>
      </div>
    </section>
  );
};
export default CalendarSection;

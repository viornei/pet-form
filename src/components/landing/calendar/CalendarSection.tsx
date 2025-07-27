import ActionButton from "../../ui/ActionButton";
import DatePicker from "../../ui/Datepicker";

const CalendarSection = () => {
  return (
    <section id="calendar" className="section-container">
      <div className="mx-auto flex w-full max-w-330 flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex max-w-180 flex-col md:gap-6">
          <div className="flex flex-col">
            <h2 className="text-fluid-h2 mb-4">Calendar</h2>
            <div className="flex flex-col gap-4">
              <h3 className="text-fluid-h3">
                Select your preferred dates for booking your trusted pet sitter.
              </h3>
              <span className="text-fluid-base text-justify">
                Utilize our user-friendly calendar to effortlessly select from a
                variety of available dates for your pets care. Our thoughtfully
                designed and intuitive interface guarantees a seamless and
                enjoyable booking experience, making it easier than ever to
                ensure your furry friend receives the attention and care they
                deserve.
              </span>
            </div>
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

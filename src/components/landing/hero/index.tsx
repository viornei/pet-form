import Image from "next/image";
import ActionButton from "../../ui/ActionButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center w-full bg-primary-pink-100 pb-25 px-12  h-auto min-h-screen md:h-screen snap-center justify-center">
      <div className="flex flex-col md:flex-row max-w-320 justify-between items-center gap-2 md:gap-6 py-8">
        <h1 className="text-2xl font-semibold  md:text-6xl md:font-normal md:min-w-100  wrap-break-word leading-8 md:leading-18">
          Your Trusted Companion for Pet Sitting
        </h1>
        <div className="flex flex-col items-start gap-4  ">
          <span className=" py-4">
            Experience peace of mind while you are away. Our dedicated pet
            sitters ensure your furry friends receive all the love and care they
            deserve.
          </span>
          <div className="flex flex-col md:flex-row  gap-4">
            <a href="#form">
              <ActionButton>Book</ActionButton>
            </a>
            <ActionButton className=" hidden md:block bg-gray-100 w-30 h-10 rounded-full  transition-all duration-100 font-bold border-b-4 border-gray-500 shadow-2xl hover:brightness-105 active:border-b-2 active:translate-y-0.5 ">
              Learn more
            </ActionButton>
          </div>
        </div>
      </div>
      <div className="h-70 md:h-150 overflow-hidden  rounded-2xl">
        <Image
          priority
          src="/dog-1868871_1280.webp"
          alt="happy dog"
          width={1280}
          height={853}
          className="h-full object-cover object-[center_40%]"
        />
      </div>
    </div>
  );
};
export default HeroSection;

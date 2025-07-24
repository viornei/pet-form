import Image from "next/image";
import ActionButton from "../../ui/ActionButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center w-full bg-primary-pink-100 pb-25 px-12  h-screen snap-center justify-center">
      <div className="flex max-w-320 justify-between items-center gap-6 py-8">
        <h1 className="text-6xl min-w-100  wrap-break-word leading-18">
          Your Trusted Companion for Pet Sitting
        </h1>
        <div className="flex flex-col items-start gap-4  px-2">
          <span className="px-2 py-4">
            Experience peace of mind while you are away. Our dedicated pet
            sitters ensure your furry friends receive all the love and care they
            deserve.
          </span>
          <div className="flex gap-4">
            <a href="#form">
              <ActionButton>Book</ActionButton>
            </a>
            <ActionButton className="bg-gray-100 w-30 h-10 rounded-full  transition-all duration-100 font-bold border-b-4 border-gray-500 shadow-2xl hover:brightness-105 active:border-b-2 active:translate-y-0.5 ">
              Learn more
            </ActionButton>
          </div>
        </div>
      </div>
      <div className="h-150 overflow-hidden  rounded-2xl">
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

import Image from "next/image";
import ActionButton from "../../ui/ActionButton";

const HeroSection = () => {
  return (
    <section id="hero" className="section-container">
      <div className="flex max-w-320 flex-col items-center justify-between gap-2 py-8 md:flex-row md:gap-6">
        <h1 className="text-fluid-h1 font-semibold wrap-break-word md:max-w-125 md:min-w-100 md:leading-18 md:font-normal">
          Your Trusted Companion for Pet Sitting
        </h1>
        <div className="flex flex-col items-start gap-4">
          <span className="py-4 text-[clamp(1rem,1.25vw,2.5rem)]">
            Experience peace of mind while you are away. Our dedicated pet
            sitters ensure your furry friends receive all the love and care they
            deserve.
          </span>
          <div className="flex flex-col gap-4 md:flex-row">
            <a href="#form">
              <ActionButton>Book</ActionButton>
            </a>
            <ActionButton className="hidden h-10 w-30 rounded-full border-b-4 border-gray-500 bg-gray-100 font-bold shadow-2xl transition-all duration-100 hover:brightness-105 active:translate-y-0.5 active:border-b-2 md:block">
              Learn more
            </ActionButton>
          </div>
        </div>
      </div>
      <div className="mb-10 h-90 overflow-hidden rounded-2xl md:h-150">
        <Image
          priority
          src="/dog-1868871_1280.webp"
          alt="happy dog"
          width={1280}
          height={853}
          className="h-full object-cover object-[center_40%]"
        />
      </div>
    </section>
  );
};
export default HeroSection;

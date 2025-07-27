import Image from "next/image";
import Carousel from "./carousel/Carousel";

const TestimonialsSection = () => {
  const images = ["/home/review5.svg", "/home/review4.svg"];
  return (
    <section className="section-container relative overflow-hidden pt-40">
      <div className="absolute top-8 right-0 z-0 md:top-0">
        <Image
          src="/background_pets.webp"
          alt="pets"
          width={1000}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="z-1 flex w-full max-w-320 flex-col justify-between">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-fluid-h2">What pet owners say</h2>
          <p className="text-primary-pink-900 text-fluid-lg">
            We’re proud to be trusted by many pet parents. Here are just a few
            words from those who’ve used our service.
          </p>
        </div>
        <Carousel images={images} />
      </div>
    </section>
  );
};
export default TestimonialsSection;

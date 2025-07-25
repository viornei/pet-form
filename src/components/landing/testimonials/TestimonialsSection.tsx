import Carousel from "./carousel/Carousel";

const TestimonialsSection = () => {
  const images = ["/home/review5.svg", "/home/review4.svg"];
  return (
    <div className="bg-primary-pink-100 flex h-screen snap-center items-center justify-center px-8 py-7 md:px-12">
      <Carousel images={images} />
    </div>
  );
};
export default TestimonialsSection;

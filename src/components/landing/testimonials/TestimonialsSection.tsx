import Carousel from "./carousel/Carousel";

const TestimonialsSection = () => {
  const images = ["/home/review5.svg", "/home/review4.svg"];
  return (
    <div className="flex py-7 bg-primary-pink-100 px-12  snap-center justify-center">
      <Carousel images={images} />
    </div>
  );
};
export default TestimonialsSection;

import Carousel from "./carousel/Carousel";

const TestimonialsSection = () => {
  const images = ["/home/review5.svg", "/home/review4.svg"];
  return (
    <div className="bg-primary-pink-100 flex snap-center justify-center px-12 py-7">
      <Carousel images={images} />
    </div>
  );
};
export default TestimonialsSection;

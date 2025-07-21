import Carousel from "./carousel/Carousel";

const TestimonialsSection = () => {
  const images = ["/home/review5.svg", "/home/review4.svg"];
  return (
    <div className="flex py-25 bg-primary-pink-100 px-12">
      <Carousel images={images} />
    </div>
  );
};
export default TestimonialsSection;

import Carousel from "./carousel/Carousel";

const TestimonialsSection = () => {
  const images = ["/home/Content.svg", "home/Container-2.svg"];
  return (
    <div className="flex py-25 px-12">
      <Carousel images={images} />
    </div>
  );
};
export default TestimonialsSection;

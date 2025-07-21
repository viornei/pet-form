import ServiceCard from "./serviceCard/ServiceCard";

const ServiseSection = () => {
  return (
    <div className="flex flex-col  items-center bg-primary-pink-100 w-full py-25 px-12 gap-20">
      <h2 className="text-5xl text-center max-w-160">
        Explore Our Tailored Pet Sitting Services for Every Furry Friend
      </h2>
      <div className="flex gap-4 w-full max-w-320  justify-between">
        <ServiceCard
          imgSrc="/home/side-view-smiley-woman-dog.webp"
          alt="dog"
          serviceName="Flexible Options to Suit Your Pet's Unique Needs and Schedule"
          serviceDescription="From daily visits to overnight stays, we’ve got you covered."
        />
        <ServiceCard
          imgSrc="/home/cute-shiba-inu-pet-with-family.webp"
          alt="dog walking"
          serviceName="Professional Dog Walking Services for Active Pups and Busy Owners"
          serviceDescription="Keep your dog happy and healthy with our reliable walking services."
        />
        <ServiceCard
          imgSrc="/home/elderly-person-with-pet-cat.webp"
          alt="cat"
          serviceName="Specialized Care for Cats: Comfort and Companionship"
          serviceDescription="Our cat sitters provide love and attention in a familiar environment."
        />
      </div>
    </div>
  );
};
export default ServiseSection;

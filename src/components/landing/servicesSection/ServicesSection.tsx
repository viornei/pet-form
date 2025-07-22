"use client";
import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard/ServiceCard";
import { useStoryblokApi } from "@storyblok/react";
type ServiceCardType = {
  name: string;
  description: string;
  image: {
    filename: string;
    alt?: string;
  };
};

type Props = {
  title: string;
  services: ServiceCardType[];
};

const ServiseSection = () => {
  const [content, setContent] = useState<Props>();
  const [loading, setLoading] = useState(true);
  const storyblokApi = useStoryblokApi();
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await storyblokApi.get(
          "cdn/stories/services-section",
          {
            version: "draft",
          }
        );
        setContent(data.story.content);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка загрузки секции услуг:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, [storyblokApi]);
  if (loading || !content) {
    return (
      <section
        id="services"
        className="flex flex-col items-center bg-primary-pink-100 w-full py-25 px-12 gap-20 scroll-mt-24"
      >
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
      </section>
    );
  }
  return (
    <section
      id="services"
      className="flex flex-col items-center bg-primary-pink-100 w-full py-25 px-12 gap-20 scroll-mt-24"
    >
      <h2 className="text-5xl text-center max-w-160">{content.title}</h2>
      <div className="flex gap-4 w-full max-w-320 justify-between">
        {content.services?.map((service, index) => (
          <ServiceCard
            key={index}
            imgSrc={service.image?.filename}
            alt={service.image?.alt || "service image"}
            serviceName={service.name}
            serviceDescription={service.description}
          />
        ))}
      </div>
    </section>
  );
};
export default ServiseSection;

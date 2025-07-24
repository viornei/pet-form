import ServiceCard from "./serviceCard/ServiceCard";
import { TServiceBlock } from "./types";
type Props = {
  blocks: TServiceBlock[];
};

const ServiceSection = ({ blocks }: Props) => {
  const block = blocks[0];

  if (!block) return null;
  return (
    <section
      id="services"
      className="flex flex-col items-center bg-primary-pink-100 w-full py-14 px-12 gap-20  h-screen snap-center justify-center"
    >
      <h2 className="text-5xl text-center max-w-160">{block.Title}</h2>
      <div className="flex gap-4 w-full max-w-320  justify-between">
        {block.Services.map((service, index) => (
          <ServiceCard
            key={index}
            serviceName={service.serviceName}
            serviceDescription={service.serviceDescription}
            imgSrc={service.image.filename}
            alt={service.image.alt}
          />
        ))}
      </div>
    </section>
  );
};
export default ServiceSection;

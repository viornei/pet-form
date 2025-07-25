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
      className="bg-primary-pink-100 flex h-auto min-h-screen w-full snap-center flex-col items-center gap-6 px-12 py-8 md:h-screen md:gap-12 md:py-25"
    >
      <h2 className="max-w-160 text-center text-xl font-semibold md:text-5xl md:font-normal">
        {block.Title}
      </h2>
      <div className="flex w-full max-w-320 flex-col justify-between gap-14 md:flex-row md:gap-8">
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

import ServiceCard from "./serviceCard/ServiceCard";
import { TServiceBlock } from "./types";
type Props = {
  blocks: TServiceBlock[];
};

const ServiceSection = ({ blocks }: Props) => {
  const block = blocks[0];

  if (!block) return null;
  return (
    <section id="services" className="section-container md:scroll-mt-30">
      <h2 className="text-fluid-h2 mb-4 max-w-160 text-center">
        {block.Title}
      </h2>
      <div className="grid w-full max-w-320 grid-cols-1 justify-between gap-14 md:grid-cols-3 md:gap-8">
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

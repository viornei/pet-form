import Image from "next/image";
type Props = {
  imgSrc: string;
  serviceName: string;
  serviceDescription: string;
  alt: string;
};
const ServiceCard = ({
  imgSrc,
  serviceName,
  serviceDescription,
  alt,
}: Props) => {
  return (
    <div className="flex w-full max-w-100 flex-col items-center gap-2 text-start md:text-center">
      <Image
        src={imgSrc}
        alt={alt}
        width={396}
        height={240}
        className="rounded-xl"
        placeholder="empty"
        loading="lazy"
      />
      <h3 className="max-w-80 text-base font-semibold md:text-2xl md:font-normal">
        {serviceName}
      </h3>
      <p className="max-w-80 text-justify text-sm">{serviceDescription}</p>
    </div>
  );
};
export default ServiceCard;

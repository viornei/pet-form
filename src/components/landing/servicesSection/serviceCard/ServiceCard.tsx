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
    <div className="flex flex-col w-full  max-w-100 items-center text-center gap-2 ">
      <Image
        src={imgSrc}
        alt={alt}
        width={396}
        height={240}
        className="rounded-xl"
        placeholder="empty"
        loading="lazy"
      />
      <h2 className="text-2xl max-w-80">{serviceName}</h2>
      <p className="text-sm max-w-80">{serviceDescription}</p>
    </div>
  );
};
export default ServiceCard;

export type TService = {
  serviceName: string;
  serviceDescription: string;
  image: {
    filename: string;
    alt: string;
  };
};

export type TServiceBlock = {
  Title: string;
  Services: TService[];
};

export type TServiceSection = TServiceBlock[];

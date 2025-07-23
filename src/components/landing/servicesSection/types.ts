export type TServiceSection = {
  data: {
    content: {
      body: TServiceBlock[];
    };
  };
};
export type TServiceBlock = {
  Title: string;
  Services: TService[];
};

export type TService = {
  serviceName: string;
  serviceDescription: string;
  image: {
    filename: string;
    alt: string;
  };
};

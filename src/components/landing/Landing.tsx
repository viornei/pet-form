import AuthSection from "@/components/landing/auth/AuthSection";
import CalendarSection from "@/components/landing/calendar/CalendarSection";
import HeroSection from "@/components/landing/hero";
import TestimonialsSection from "@/components/landing/testimonials/TestimonialsSection";
import FaqSection from "./faq/FaqSection";
import ServiceSection from "./servicesSection/ServicesSection";
import { TServiceSection } from "./servicesSection/types";
type TStoryData = {
  services: TServiceSection;
};

export const LandingPage = ({ services }: TStoryData) => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <HeroSection />
      <ServiceSection blocks={services} />
      <AuthSection />
      <TestimonialsSection />
      <CalendarSection />
      <FaqSection />
    </div>
  );
};
export default LandingPage;

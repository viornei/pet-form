import AuthSection from "@/components/landing/auth/AuthSection";
import CalendarSection from "@/components/landing/calendar/CalendarSection";
import HeroSection from "@/components/landing/hero";
import TestimonialsSection from "@/components/landing/testimonials/TestimonialsSection";
import FaqSection from "./faq/FaqSection";
import ServiceSection from "./servicesSection/ServicesSection";
type TStoryData = {
  services: unknown;
};

export const Landing = ({ services }: TStoryData) => {
  return (
    <>
      <HeroSection />
      <ServiceSection data={services} />
      <AuthSection />
      <TestimonialsSection />
      <CalendarSection />
      <FaqSection />
    </>
  );
};
export default Landing;

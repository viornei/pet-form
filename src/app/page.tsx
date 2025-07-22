import AuthSection from "@/components/landing/auth/AuthSection";
import CalendarSection from "@/components/landing/calendar/CalendarSection";
import FaqSection from "@/components/landing/faq/FaqSection";
import HeroSection from "@/components/landing/hero";
import ServiceSection from "@/components/landing/servicesSection/ServicesSection";
import TestimonialsSection from "@/components/landing/testimonials/TestimonialsSection";

export default function Home() {
  
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AuthSection />
      <TestimonialsSection />
      <CalendarSection />
      <FaqSection />
    </>
  );
}

import AuthSection from "@/components/auth/AuthSection";
import CalendarSection from "@/components/calendar/CalendarSection";
import FaqSection from "@/components/faq/FaqSection";
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/servises/ServicesSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

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

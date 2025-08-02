"use client";
import ActionButton from "@/components/ui/ActionButton";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book?",
    answer:
      "Booking is simple! Just fill out our registration form with your pet’s details and choose your desired dates. Once submitted, you'll receive a confirmation email.",
  },
  {
    question: "What services do you offer??",
    answer:
      "We provide a range of services including pet sitting, dog walking, and overnight stays. Each service is tailored to meet your pet's unique needs. Our trained sitters ensure your furry friends are happy and safe.",
  },

  {
    question: "Can I meet the pet sitter beforehand?",
    answer:
      "Absolutely! We encourage meet-and-greets before the booking to ensure everyone is comfortable.",
  },
  {
    question: "What if my pet has special needs?",
    answer:
      "No worries — just mention any special instructions in the form. Our sitters are trained to handle various needs with care.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payments can be made securely through our app using credit or debit cards. We also accept various payment methods for your convenience. Your payment information is kept safe and secure.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <section id="faq" className="section-container md:scroll-mt-20">
      <div className="flex w-full max-w-360 flex-col items-center justify-start gap-4  md:px-12">
        <div className="m-auto flex w-full flex-grow-0 flex-col justify-between gap-20 lg:flex-row">
          <div className="mx-auto flex w-full max-w-260 flex-col items-start justify-start gap-4 lg:w-[60%] lg:gap-5">
            <h2 className="text-fluid-h2 mb-4 p-1 text-start">FAQs</h2>
            <div className="mx-auto flex h-110 w-full flex-col gap-6 overflow-y-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full justify-center rounded-xl transition-all"
                >
                  <button
                    className="text-fluid-lg flex w-full items-center justify-between text-start font-semibold"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    {faq.question}
                    <span
                      className={`transition-transform duration-400 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <Image
                        src="/Arrow-vector.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                      />
                    </span>
                  </button>
                  {openIndex === index && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index
                          ? "max-h-100 opacity-100"
                          : "max-h-0 opacity-0"
                      } text-fluid-base p-1 text-justify leading-relaxed text-gray-700`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden h-100 w-full max-w-150 flex-col gap-4 lg:flex lg:w-[40%] lg:gap-y-10">
            <h3 className="text-fluid-h2 mb-4 text-start">Why us?</h3>
            <p className="text-fluid-sm leading-relaxed text-gray-700">
              Because we care. Seriously — your pet gets attention, love, and
              consistent routines while you’re away. And you get peace of mind.
              We don’t just watch pets — we build trust. Whether it’s daily
              walks, feeding, or giving medications, we follow your instructions
              carefully and make sure your pet feels safe and loved. Our sitters
              are experienced, reliable, and genuinely passionate about animals.
              You’ll get regular updates, photos, and honest communication
              throughout the stay — so you never feel out of the loop. We’re
              here to make your time away as stress-free as possible, for both
              you and your furry friend.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#form">
            <ActionButton>Join</ActionButton>
          </a>
          <ActionButton className="h-10 w-20 rounded-full border-b-4 border-gray-500 bg-gray-100 font-bold shadow-2xl transition-all duration-100 hover:brightness-105 active:translate-y-0.5 active:border-b-2">
            Login
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

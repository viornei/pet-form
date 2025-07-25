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
    <section
      id="faq"
      className="bg-primary-pink-100 h-auto min-h-screen md:h-screen snap-center flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-start  gap-4 max-w-360 w-full px-12 ">
        <div className="flex flex-col lg:flex-row  flex-grow-0 justify-between gap-20  w-full m-auto">
          <div className="flex max-w-260  w-full lg:w-[60%]  items-start  flex-col justify-start  gap-10 lg:gap-10 mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-start">FAQs</h2>
            <div className=" w-full mx-auto flex flex-col gap-6 h-110  overflow-y-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className=" w-full rounded-xl  justify-center  transition-all"
                >
                  <button
                    className="flex w-full py-8 font-semibold  lg:text-xl justify-between items-center"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    {faq.question}
                    <span
                      className={`transition-transform duration-600 ${
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
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-100 opacity-100"
                          : "max-h-0 opacity-0"
                      }  text-sm md:text-lg text-justify text-gray-700  p-1 leading-relaxed`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-center  lg:gap-y-10 s max-w-150 w-full lg:w-[40%]  h-100">
            <h3 className="text-3xl font-semibold mb-4 text-start">Why us?</h3>
            <p className="text-lg leading-relaxed text-gray-700">
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

        <div className="flex gap-4 items-center">
          <a href="#form">
            <ActionButton>Join</ActionButton>
          </a>
          <ActionButton className="bg-gray-100 w-20 h-10 rounded-full  transition-all duration-100 font-bold border-b-4 border-gray-500 shadow-2xl hover:brightness-105 active:border-b-2 active:translate-y-0.5">
            Login
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

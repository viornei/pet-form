"use client";
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
    <section id="faq" className=" bg-primary-pink-100 w-full  gap-16  py-25 px-12">
      <div className="flex items-center flex-col gap-20  w-full mx-auto">
        <h2 className="text-5xl mb-8 mt-2 text-center">FAQs</h2>
        <div className="max-w-160  w-full mx-auto flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" w-full rounded-xl justify-center  transition-all"
            >
              <button
                className="flex  w-full h-20  p-4  text-xl justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? (
                    "–"
                  ) : (
                    <Image
                      src="/Arrow-vector.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className=" pb-4 text-lg text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

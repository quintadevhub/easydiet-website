import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is EasyDiet?",
    answer:
      "EasyDiet is a personalised nutrition service designed to help you make better food choices around your goals, preferences and everyday routine.",
  },
  {
    question: "Will my diet plan be personalised?",
    answer:
      "Yes. Your plan is designed around the information you share about your goals, food preferences, lifestyle and routine rather than following a one-size-fits-all approach.",
  },
  {
    question: "Can EasyDiet help with weight loss?",
    answer:
      "Yes. Our healthy weight-loss approach focuses on practical eating habits and sustainable changes rather than extreme restrictions.",
  },
  {
    question: "Can I use normal Indian food in my diet plan?",
    answer:
      "Yes. EasyDiet is designed to work with the foods you normally eat. The goal is to make healthier choices practical within your existing lifestyle.",
  },
  {
    question: "Do I have to completely stop eating my favourite foods?",
    answer:
      "Not necessarily. A sustainable nutrition plan should be realistic. We focus on helping you understand portions, balance and better choices instead of simply banning foods.",
  },
  {
    question: "How does the EasyDiet process work?",
    answer:
      "You first share your goals and lifestyle information. We then use that information to create a nutrition approach suited to your needs and help you move towards healthier everyday habits.",
  },
  {
    question: "Can EasyDiet help with healthy weight gain?",
    answer:
      "Yes. Our healthy weight-gain approach focuses on nourishing food choices, appropriate eating habits and a practical routine that supports your goal.",
  },
  {
    question: "Is EasyDiet suitable for everyone?",
    answer:
      "Nutrition needs can vary significantly from person to person. EasyDiet is intended for general nutrition and lifestyle guidance. If you have a medical condition or specific clinical nutrition requirement, consult a qualified healthcare professional.",
  },
];

export default function FAQIntro() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F8EFE3] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      <div className="pointer-events-none absolute -right-10 top-8 hidden select-none text-[18rem] font-light leading-none tracking-[-0.08em] text-[#075B32]/[0.035] lg:block">
        06
      </div>

      <div className="relative mx-auto max-w-[1250px]">
        <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
              FAQ
            </p>

            <div className="mt-6 hidden h-20 w-px bg-[#075B32]/20 lg:block" />
          </motion.div>

          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="max-w-[1050px] text-5xl font-light leading-[1.02] tracking-[-0.045em] text-[#17352A] md:text-7xl lg:text-[6.5rem]"
              >
                Questions,
                <br />
                <span className="font-normal italic text-[#075B32]">
                  answered simply.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 max-w-[700px] text-lg leading-8 text-[#17352A]/60 md:text-xl md:leading-9"
            >
              Everything you need to know about personalised nutrition and
              getting started with EasyDiet.
            </motion.p>
          </div>
        </div>

        <div className="mt-20 border-t border-[#17352A]/15">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[#17352A]/15"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left md:py-9"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    <span className="pt-1 text-[11px] font-semibold tracking-[0.2em] text-[#075B32]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="max-w-[850px] text-xl font-light leading-[1.3] tracking-[-0.02em] text-[#17352A] md:text-2xl lg:text-3xl">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#075B32]/20 text-[#075B32] transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#075B32] text-white"
                        : "group-hover:bg-[#075B32]"
                    }`}
                  >
                    <ChevronDown size={17} strokeWidth={1.4} />
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-[43px] md:pb-10 md:pl-[72px]">
                    <p className="max-w-[750px] text-base leading-7 text-[#17352A]/55 md:text-lg md:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <p className="text-base leading-7 text-[#17352A]/50 md:text-lg">
            Still have a question?{" "}
            <a
              href="https://wa.me/918923161712"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#075B32] underline decoration-[#075B32]/30 underline-offset-4 transition-colors hover:decoration-[#075B32]"
            >
              Talk to us on WhatsApp.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  CircleHelp,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

const faqCategories = [
  "All Questions",
  "EasyDiet",
  "Diet Plans",
  "Weight Loss",
  "Weight Gain",
  "Healthy Lifestyle",
];

const faqs = [
  {
    category: "EasyDiet",
    question: "What is EasyDiet?",
    answer:
      "EasyDiet is a nutrition and healthy-lifestyle platform designed to help people explore balanced eating, practical food choices and healthier everyday habits. Our programs focus on supporting your individual goals through realistic lifestyle changes.",
  },
  {
    category: "EasyDiet",
    question: "Who can use EasyDiet?",
    answer:
      "People interested in improving their everyday eating habits or exploring nutrition support can learn more about our programs. Individual nutrition needs vary, and people with medical conditions or special dietary requirements should seek advice from a qualified healthcare professional.",
  },
  {
    category: "EasyDiet",
    question: "How do I contact EasyDiet?",
    answer:
      "You can contact our team through the WhatsApp button on this page to ask about available programs, explain your goals and discuss the next steps.",
  },
  {
    category: "Diet Plans",
    question: "How do I get started with a diet plan?",
    answer:
      "Start by exploring the available programs and identifying your primary goal. You can then contact EasyDiet to discuss your needs and the available options. Any personalised recommendations should take your individual circumstances into account.",
  },
  {
    category: "Diet Plans",
    question: "Are diet plans the same for everyone?",
    answer:
      "No. Food preferences, routines, activity levels, goals and individual health needs can differ. A suitable nutrition plan should take relevant personal circumstances into account rather than relying on a one-size-fits-all approach.",
  },
  {
    category: "Diet Plans",
    question: "Do I have to stop eating my favourite foods?",
    answer:
      "Healthy eating does not necessarily mean eliminating all your favourite foods. Balance, variety, portions and consistency can all play a role in a practical eating routine.",
  },
  {
    category: "Weight Loss",
    question: "How can I approach weight loss in a healthy way?",
    answer:
      "A balanced approach may include sustainable food choices, appropriate portions, regular physical activity, adequate sleep and consistent habits. The right approach depends on your circumstances, and very restrictive diets are not appropriate for everyone.",
  },
  {
    category: "Weight Loss",
    question: "How quickly will I see weight-loss results?",
    answer:
      "Results vary between individuals and depend on factors such as starting point, health, daily habits and consistency. EasyDiet does not guarantee a specific rate of weight loss. Sustainable progress is generally more useful than pursuing rapid changes.",
  },
  {
    category: "Weight Loss",
    question: "Do I need to skip meals to lose weight?",
    answer:
      "Skipping meals is not a requirement for weight management. A suitable routine should provide adequate nourishment and work with your individual needs, preferences and schedule.",
  },
  {
    category: "Weight Gain",
    question: "How can I work towards healthy weight gain?",
    answer:
      "Healthy weight gain may involve eating enough energy and nutrients, choosing nourishing foods and incorporating appropriate strength-building activity where suitable. Unexplained or unintentional weight loss should be discussed with a healthcare professional.",
  },
  {
    category: "Weight Gain",
    question: "Can I gain weight without eating junk food?",
    answer:
      "Yes. Depending on your needs, foods such as dairy products, pulses, beans, nuts, seeds, grains and other nutrient-rich options can help increase your overall intake. Individual requirements vary.",
  },
  {
    category: "Healthy Lifestyle",
    question: "What does a healthy lifestyle involve?",
    answer:
      "A healthy lifestyle can include balanced nutrition, regular movement, sufficient sleep, hydration, stress management and routines that support your overall wellbeing. Small, realistic changes can be easier to maintain over time.",
  },
  {
    category: "Healthy Lifestyle",
    question: "Do I need to follow a strict routine every day?",
    answer:
      "Not necessarily. Consistency matters, but a practical lifestyle should also allow flexibility for personal preferences, social occasions and changing schedules.",
  },
  {
    category: "Healthy Lifestyle",
    question: "Can I use EasyDiet resources alongside my existing routine?",
    answer:
      "Our general nutrition guides and resources are intended to help you learn and organise everyday habits. Choose the information that fits your circumstances, and consult a qualified professional when you need individual medical or nutrition advice.",
  },
];

const programs = [
  {
    title: "Healthy Weight Loss",
    description:
      "Explore balanced approaches to your weight-management goals.",
    href: "/weight-loss",
  },
  {
    title: "Healthy Weight Gain",
    description:
      "Explore nutrition strategies for your weight-gain journey.",
    href: "/weight-gain",
  },
  {
    title: "Healthy Lifestyle",
    description:
      "Discover practical habits that support everyday wellbeing.",
    href: "/healthy-lifestyle",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] =
    useState("All Questions");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqs[0].question
  );

  const filteredFaqs =
    activeCategory === "All Questions"
      ? faqs
      : faqs.filter(
          (faq) => faq.category === activeCategory
        );

  const contactWhatsApp = () => {
    window.open(
      "https://wa.me/918923161712?text=Hi%20EasyDiet%2C%20I%20have%20a%20question%20about%20your%20nutrition%20programs.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      {/* HERO */}
      <section className="bg-[#F4E5D0] px-6 pb-20 pt-32 md:px-10 lg:px-16 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                Here to help
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6rem]">
                Your questions.
                <br />
                <span className="text-[#075B32]">
                  Clear answers.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/70 md:text-xl">
                Find answers to common questions about EasyDiet,
                nutrition programs, weight management and
                healthier everyday habits.
              </p>

              <a
                href="#faq-library"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#075B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#064b2a]"
              >
                Browse questions
                <ArrowDown size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-[#B8D9A6] p-8 md:p-12">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#075B32]/20" />
                <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full border border-[#075B32]/20" />

                <div className="relative rounded-[1.5rem] bg-[#F7F4EC] p-7 md:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#075B32] text-white">
                    <CircleHelp size={26} />
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#075B32]">
                    The EasyDiet help centre
                  </p>

                  <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
                    Understand your options.
                    <br />
                    Feel more confident.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#17352A]/60">
                    Helpful information to guide your next step
                    towards a healthier lifestyle.
                  </p>

                  <div className="mt-7 flex items-center gap-3 border-t border-[#17352A]/10 pt-5">
                    <ShieldCheck
                      size={22}
                      className="shrink-0 text-[#075B32]"
                    />
                    <p className="text-sm font-medium">
                      Clear, practical information
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
            A little clarity goes a long way
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Understand the process.
              <span className="text-[#075B32]">
                {" "}Choose your path.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#17352A]/65">
              Explore the answers below to learn more about our
              programs and general approach to nutrition. If
              your question is specific to your health, a
              qualified healthcare professional can provide
              advice based on your circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ LIBRARY */}
      <section
        id="faq-library"
        className="bg-white/40 px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Help centre
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Frequently asked questions.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#17352A]/60">
              Choose a category to find the answers most relevant
              to you.
            </p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
            {faqCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenQuestion(null);
                }}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-[#075B32] bg-[#075B32] text-white"
                    : "border-[#17352A]/15 text-[#17352A]/70 hover:border-[#075B32]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* QUESTIONS */}
          <div className="divide-y divide-[#17352A]/10 border-y border-[#17352A]/10">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openQuestion === faq.question;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.02,
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenQuestion(
                        isOpen ? null : faq.question
                      )
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  >
                    <span>
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#075B32]/75">
                        {faq.category}
                      </span>

                      <span className="text-lg font-medium leading-snug md:text-xl">
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#17352A]/15 transition ${
                        isOpen
                          ? "rotate-180 bg-[#075B32] text-white"
                          : "text-[#075B32]"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-7 pr-4 md:pr-16">
                      <p className="max-w-3xl text-sm leading-8 text-[#17352A]/65 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-[#17352A]/50">
            Showing {filteredFaqs.length}{" "}
            {filteredFaqs.length === 1 ? "question" : "questions"}.
          </p>
        </div>
      </section>

      {/* PROGRAM LINKS */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Explore EasyDiet
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Find a program for your goals.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {programs.map((program, index) => (
              <Link
                key={program.href}
                to={program.href}
                className="group rounded-[1.5rem] border border-[#17352A]/10 bg-[#F4E5D0]/50 p-7 transition hover:-translate-y-1 hover:bg-[#F4E5D0] md:p-8"
              >
                <span className="text-sm text-[#075B32]">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-2xl font-medium">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#17352A]/60">
                  {program.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#075B32]">
                  Learn more
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#17352A] px-6 py-20 text-[#F7F4EC] md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              Still have a question?
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-7xl">
              Let's talk about
              <span className="text-[#B8D9A6]">
                {" "}your goals.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Contact EasyDiet to ask about our programs and
              discuss the next steps for your nutrition journey.
            </p>
          </div>

          <button
            type="button"
            onClick={contactWhatsApp}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#F7F4EC] px-7 py-4 text-sm font-semibold text-[#17352A] transition hover:bg-white"
          >
            <MessageCircle size={18} />
            Ask us on WhatsApp
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="bg-[#075B32] px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <ArrowRight
              className="rotate-180"
              size={16}
            />
            Back to Resources
          </Link>

          <span className="text-sm text-white/60">
            EasyDiet — Better Food · Healthy Life
          </span>
        </div>
      </section>
    </main>
  );
}

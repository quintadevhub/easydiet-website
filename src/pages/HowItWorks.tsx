
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ClipboardList,
  MessageCircle,
  Salad,
  Target,
  Heart,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Tell us about yourself",
    text: "Share your goals, food preferences, daily routine and lifestyle. Understanding you is the first step towards a plan that fits your life.",
    detail: "Your goals · Your routine · Your preferences",
  },
  {
    number: "02",
    icon: Target,
    title: "Understand your needs",
    text: "We use the information you share to understand your nutrition goals and identify an approach suited to your individual needs.",
    detail: "Personal goals · Lifestyle · Nutrition needs",
  },
  {
    number: "03",
    icon: Salad,
    title: "Get your nutrition plan",
    text: "Receive guidance designed around practical food choices, balanced meals and a routine you can realistically follow.",
    detail: "Balanced meals · Practical choices · Flexibility",
  },
  {
    number: "04",
    icon: Heart,
    title: "Build lasting habits",
    text: "Focus on consistency instead of perfection. Review your progress and adjust your routine as your needs and goals evolve.",
    detail: "Consistency · Progress · Sustainable habits",
  },
];

const values = [
  {
    number: "01",
    title: "Personal to you",
    text: "Your food preferences, lifestyle and goals matter. One approach does not work for everyone.",
  },
  {
    number: "02",
    title: "Practical by design",
    text: "Nutrition guidance should work in your everyday life, not require you to reorganise your entire routine.",
  },
  {
    number: "03",
    title: "Focused on balance",
    text: "We encourage balanced food choices rather than unnecessary restrictions or quick-fix promises.",
  },
];

const faqs = [
  {
    question: "How do I get started with EasyDiet?",
    answer:
      "Start by contacting EasyDiet or using the Get My Diet Plan form. Share your goals, lifestyle and food preferences so the next steps can be discussed.",
  },
  {
    question: "Will my nutrition plan be personalised?",
    answer:
      "The aim is to tailor nutrition guidance to your goals, preferences and routine. The exact recommendations depend on the information you provide and the service selected.",
  },
  {
    question: "What information should I provide?",
    answer:
      "You may be asked about your age, dietary preferences, daily activity, current routine and nutrition goals. Share accurate information so your needs can be understood.",
  },
  {
    question: "Do I need to follow a strict diet?",
    answer:
      "The focus is on practical, balanced eating habits. Any specific plan should account for your preferences, nutritional needs and circumstances.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Results vary depending on your starting point, goals, health, consistency and other individual factors. No particular result or timeline can be guaranteed.",
  },
];

export default function HowItWorks() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918923161712?text=Hi%20EasyDiet%2C%20I%20want%20to%20understand%20how%20your%20nutrition%20program%20works.",
      "_blank"
    );
  };

  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">

      {/* HERO */}
      <section className="bg-[#F4E5D0] px-6 pb-20 pt-32 md:px-10 lg:px-16 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                How EasyDiet works
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6.2rem]">
                Better habits.
                <br />
                <span className="text-[#075B32]">
                  One step at a time.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/70 md:text-xl">
                Your journey towards healthier living starts with
                understanding your needs and building a nutrition routine
                that works with your life.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#the-process"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#075B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#064b2a]"
                >
                  Explore the process
                  <ArrowDownRight size={18} />
                </a>

                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#17352A]/20 px-7 py-4 text-sm font-semibold transition hover:bg-white/40"
                >
                  Explore programs
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative flex aspect-[4/4.2] items-center justify-center overflow-hidden rounded-[2rem] bg-[#B8D9A6] p-8 md:p-12">

                <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-[#075B32]/20" />
                <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full border border-[#075B32]/20" />

                <div className="relative w-full max-w-sm rounded-[1.8rem] bg-[#F7F4EC] p-7 shadow-sm md:p-9">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#075B32]">
                        Your journey
                      </p>
                      <h2 className="mt-2 text-2xl font-medium">
                        A better you
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#075B32] text-white">
                      <Sparkles size={21} />
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    {[
                      "Understand your goals",
                      "Build your nutrition plan",
                      "Create healthier habits",
                      "Keep moving forward",
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B8D9A6]/60 text-sm font-semibold text-[#075B32]">
                          {index + 1}
                        </div>

                        <p className="text-sm font-medium">{item}</p>

                        {index === 0 && (
                          <Check size={17} className="ml-auto text-[#075B32]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-[#17352A]/10">
                    <div className="h-full w-1/4 rounded-full bg-[#075B32]" />
                  </div>

                  <p className="mt-3 text-xs text-[#17352A]/50">
                    Every journey starts with one step.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
            Simple, personal, practical
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Your health journey should make sense
              <span className="text-[#075B32]"> for you.</span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#17352A]/65">
              Getting started should not feel complicated. EasyDiet is built
              around understanding your goals, identifying practical nutrition
              choices and helping you create habits you can maintain over time.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section
        id="the-process"
        className="bg-[#17352A] px-6 py-24 text-[#F7F4EC] md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              The process
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Four steps towards
              <br />
              better everyday health.
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  whileHover={{ y: -3 }}
                  className="border-b border-white/15 p-8 md:border-r md:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                      <Icon size={21} />
                    </div>

                    <span className="text-sm text-white/40">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-12 text-2xl font-medium md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
                    {step.text}
                  </p>

                  <p className="mt-7 border-t border-white/15 pt-5 text-xs leading-6 text-[#B8D9A6]">
                    {step.detail}
                  </p>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* PERSONAL APPROACH */}
      <section className="bg-[#F4E5D0] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                The EasyDiet approach
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                No one-size-fits-all nutrition.
                <span className="text-[#075B32]"> Just a better fit.</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#17352A]/65">
                Your schedule, preferences and goals are part of the picture.
                Our focus is to make nutrition guidance easier to understand
                and more practical to follow.
              </p>

              <button
                type="button"
                onClick={openWhatsApp}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#064b2a]"
              >
                Talk to EasyDiet
                <MessageCircle size={18} />
              </button>
            </div>

            <div className="space-y-0">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="border-t border-[#17352A]/15 py-7"
                >
                  <div className="flex items-start gap-6">
                    <span className="pt-1 text-sm text-[#075B32]">
                      {value.number}
                    </span>

                    <div>
                      <h3 className="text-2xl font-medium">
                        {value.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-base leading-7 text-[#17352A]/60">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                Find your path
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Start with your goal.
              </h2>
            </div>

            <Link
              to="/programs"
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#075B32]"
            >
              Explore all programs
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Healthy Weight Loss",
                text: "Build balanced eating habits that support a sustainable weight-management journey.",
                href: "/weight-loss",
              },
              {
                number: "02",
                title: "Healthy Weight Gain",
                text: "Explore practical nutrition strategies that support your individual weight-gain goals.",
                href: "/weight-gain",
              },
              {
                number: "03",
                title: "Healthy Lifestyle",
                text: "Develop everyday habits around nutrition, movement, rest and wellbeing.",
                href: "/healthy-lifestyle",
              },
            ].map((program) => (
              <Link
                key={program.number}
                to={program.href}
                className="group rounded-[1.5rem] border border-[#17352A]/10 bg-white/40 p-7 transition hover:-translate-y-1 hover:bg-[#F4E5D0] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#075B32]">
                    {program.number}
                  </span>

                  <ArrowDownRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </div>

                <h3 className="mt-14 text-2xl font-medium">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#17352A]/60">
                  {program.text}
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#B8D9A6] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1000px]">

          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Frequently asked questions
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Before you begin.
            </h2>
          </div>

          <div className="divide-y divide-[#17352A]/15 border-y border-[#17352A]/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium md:text-xl">
                  <span>{faq.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#17352A]/20 text-[#075B32] transition group-open:rotate-45">
                    <span className="text-xl font-light">+</span>
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl pr-12 text-base leading-7 text-[#17352A]/65">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#075B32] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
                Your journey starts here
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-7xl">
                Ready to take
                <span className="text-[#B8D9A6]"> the first step?</span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
                Tell us what you want to achieve. Let's explore a more
                balanced approach to food and a healthier everyday life.
              </p>
            </div>

            <button
              type="button"
              onClick={openWhatsApp}
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#F7F4EC] px-7 py-4 text-sm font-semibold text-[#17352A] transition hover:bg-white"
            >
              Get Started
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="bg-[#17352A] px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowRight className="rotate-180" size={16} />
            Back to Programs
          </Link>

          <span className="text-sm text-white/40">
            EasyDiet — Better Food · Healthy Life
          </span>

        </div>
      </section>

    </main>
  );
}

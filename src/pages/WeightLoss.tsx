
import { motion } from "framer-motion";

import {
  ArrowDownRight,
  ArrowRight,
  Check,
  HeartPulse,
  Leaf,
  Scale,
  Target,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    icon: Target,
    title: "A goal built around you",
    text: "Your weight-loss journey starts with understanding your current routine, goals, preferences and lifestyle.",
  },
  {
    number: "02",
    icon: Utensils,
    title: "Better food choices",
    text: "Learn how to make balanced and practical food choices without making every meal complicated.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Healthy progress",
    text: "The focus is sustainable progress and better habits rather than extreme short-term restrictions.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Habits that last",
    text: "Build an approach that can continue working with your everyday life long after you reach your initial goal.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about yourself",
    text: "Share your goals, lifestyle, food preferences and basic details through our personalised diet-plan form.",
  },
  {
    number: "02",
    title: "Understand your routine",
    text: "We look at the way you currently eat and live so the approach can feel realistic rather than restrictive.",
  },
  {
    number: "03",
    title: "Build better nutrition habits",
    text: "Your approach focuses on balanced meals, practical choices and habits that you can consistently follow.",
  },
  {
    number: "04",
    title: "Keep progressing",
    text: "Your nutrition journey can evolve as your routine, goals and lifestyle change.",
  },
];

const benefits = [
  "Personalised nutrition guidance",
  "Practical everyday meal choices",
  "Balanced approach to weight management",
  "Flexible food choices",
  "Sustainable habit building",
  "Lifestyle-focused nutrition",
];

const faqs = [
  {
    question: "Is this an extreme weight-loss diet?",
    answer:
      "No. EasyDiet focuses on practical nutrition and sustainable habits rather than extreme restrictions or crash dieting.",
  },
  {
    question: "Will I have to stop eating my favourite foods?",
    answer:
      "The goal is not to make food unnecessarily restrictive. Your approach is designed around realistic choices that can fit your lifestyle and preferences.",
  },
  {
    question: "Is the plan personalised?",
    answer:
      "Yes. Your goals, routine, activity level and food preferences are important when creating a more suitable nutrition approach.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start by telling us a little about yourself and your goal. Our team can then understand what kind of nutrition approach may be suitable for you.",
  },
];

export default function WeightLoss() {
  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#F4E5D0] px-6 pb-20 pt-32 md:px-10 md:pt-40 lg:px-16 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#B8D9A6]/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-[#CBE5BA]/35 blur-3xl" />

        <div className="pointer-events-none absolute right-[6%] top-[17%] hidden select-none text-[15rem] font-light leading-none tracking-[-0.08em] text-[#075B32]/[0.035] lg:block">
          01
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]"
          >
            <span className="h-px w-10 bg-[#075B32]" />
            Healthy Weight Loss
          </motion.p>

          <div className="mt-9 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="max-w-[1200px] text-[clamp(4rem,8.2vw,8.7rem)] font-light leading-[0.87] tracking-[-0.065em]"
            >
              Lose weight.
              <br />
              <span className="font-normal italic text-[#075B32]">
                Not yourself.
              </span>
            </motion.h1>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-lg leading-8 text-[#17352A]/65 md:text-xl md:leading-9"
            >
              A practical approach to healthy weight loss that helps you
              understand your food, build better habits and make progress
              without turning your life upside down.
            </motion.p>

            <motion.a
              href="#approach"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group flex w-fit items-center gap-3 rounded-full border border-[#17352A]/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-[#17352A] hover:text-white"
            >
              Explore the approach
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-y-1">
                <ArrowDownRight size={15} strokeWidth={1.5} />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="approach"
        className="bg-[#F7F4EC] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                A better approach
              </p>
              <div className="mt-6 hidden h-24 w-px bg-[#075B32]/20 lg:block" />
            </div>

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
                  className="max-w-[1050px] text-5xl font-light leading-[1.01] tracking-[-0.045em] md:text-7xl lg:text-[6.3rem]"
                >
                  Weight loss should be
                  <br />
                  <span className="font-normal italic text-[#075B32]">
                    about health first.
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-10 max-w-[760px] text-lg leading-8 text-[#17352A]/60 md:text-xl md:leading-9"
              >
                Sustainable weight management is not simply about eating less.
                It is about understanding your nutrition, improving your daily
                choices and creating habits that are realistic enough to
                maintain.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#17352A] px-6 py-28 text-white md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20 grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B8D9A6]">
              The EasyDiet difference
            </p>

            <h2 className="max-w-5xl text-4xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              A weight-loss approach
              <br />
              <span className="font-normal italic text-[#B8D9A6]">
                designed for real life.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/15 lg:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className={`group border-b border-white/15 py-12 lg:px-10 lg:py-14 ${
                    index % 2 === 0 ? "lg:border-r" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[12px] tracking-[0.18em] text-white/35">
                      {item.number}
                    </span>

                    <Icon
                      size={31}
                      strokeWidth={1.2}
                      className="text-[#B8D9A6] transition-transform duration-500 group-hover:rotate-12"
                    />
                  </div>

                  <h3 className="mt-14 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-7 text-white/55">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#F8EFE3] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square max-w-[560px] rounded-full bg-[#B8D9A6] p-8 md:p-12">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-[#17352A]/15 bg-[#F7F4EC] px-8 text-center">
                <Scale
                  size={46}
                  strokeWidth={1.1}
                  className="text-[#075B32]"
                />

                <p className="mt-7 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                  Progress.
                </p>

                <p className="mt-2 text-4xl font-medium italic tracking-[-0.04em] text-[#075B32] md:text-5xl">
                  Not pressure.
                </p>

                <p className="mt-7 max-w-xs text-sm leading-6 text-[#17352A]/60">
                  Better nutrition, better understanding and healthier habits
                  for the long term.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
              What your approach focuses on
            </p>

            <h2 className="mt-7 text-4xl font-light leading-[1.02] tracking-[-0.045em] md:text-6xl">
              Practical nutrition
              <br />
              for{" "}
              <span className="font-normal italic text-[#075B32]">
                everyday life.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/65">
              Instead of making your entire routine revolve around dieting,
              the goal is to help you make better decisions within the life
              you already live.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#075B32] text-white">
                    <Check size={13} strokeWidth={2} />
                  </span>

                  <span className="text-sm leading-6 text-[#17352A]/70">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F7F4EC] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                Your journey
              </p>

              <h2 className="mt-7 text-4xl font-light leading-[1.03] tracking-[-0.04em] md:text-6xl">
                Four simple
                <br />
                steps to
                <br />
                <span className="font-normal italic text-[#075B32]">
                  get started.
                </span>
              </h2>
            </div>

            <div className="border-t border-[#17352A]/15">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="grid gap-5 border-b border-[#17352A]/15 py-8 md:grid-cols-[80px_0.7fr_1fr] md:items-start"
                >
                  <span className="text-[12px] font-semibold tracking-[0.18em] text-[#075B32]">
                    {step.number}
                  </span>

                  <h3 className="text-2xl font-medium tracking-[-0.02em]">
                    {step.title}
                  </h3>

                  <p className="max-w-lg text-base leading-7 text-[#17352A]/60">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOD PHILOSOPHY */}
      <section className="bg-[#CBE5BA] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                Food first
              </p>

              <h2 className="mt-7 max-w-5xl text-4xl font-light leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Healthy weight loss
                <br />
                does not have to mean
                <br />
                <span className="font-normal italic text-[#075B32]">
                  boring food.
                </span>
              </h2>
            </div>

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#075B32] text-white">
                <Utensils size={27} strokeWidth={1.2} />
              </div>

              <p className="mt-8 text-lg leading-8 text-[#17352A]/70">
                Good nutrition should fit into your everyday life. The focus is
                on understanding balance, portions, food quality and practical
                choices rather than following a complicated list of rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F4EC] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                Questions
              </p>

              <h2 className="mt-7 text-4xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl">
                Before you
                <br />
                <span className="font-normal italic text-[#075B32]">
                  begin.
                </span>
              </h2>
            </div>

            <div className="border-t border-[#17352A]/15">
              {faqs.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group border-b border-[#17352A]/15"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-lg font-medium tracking-[-0.02em] md:text-xl">
                    {faq.question}

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#075B32]/20 text-[#075B32] transition-transform duration-300 group-open:rotate-45">
                      <span className="text-xl font-light leading-none">
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="max-w-2xl pb-7 pr-12 text-base leading-7 text-[#17352A]/60">
                    {faq.answer}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F4E5D0] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden rounded-[40px] bg-[#17352A] px-7 py-16 text-white md:px-14 md:py-20 lg:px-20 lg:py-24">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#075B32] opacity-70 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#B8D9A6]/20 blur-3xl" />

            <div className="relative grid items-end gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B8D9A6]">
                  Start your journey
                </p>

                <h2 className="mt-7 max-w-4xl text-4xl font-light leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                  Ready to make weight loss{" "}
                  <span className="font-normal italic text-[#B8D9A6]">
                    more sustainable?
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
                  Tell us a little about yourself and your goals. Take the
                  first step towards a more personalised nutrition journey.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://wa.me/918923161712?text=Hi%20EasyDiet%2C%20I%20want%20to%20know%20more%20about%20the%20Healthy%20Weight%20Loss%20program.",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#CBE5BA] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#17352A] transition-all duration-300 hover:bg-white"
              >
                Get Started

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17352A] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BACK TO PROGRAMS */}
      <section className="bg-[#F7F4EC] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 border-t border-[#17352A]/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#17352A]/50">
            Explore another EasyDiet program.
          </p>

          <Link
            to="/programs"
            className="group inline-flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#075B32]"
          >
            View all programs

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/25 transition-all duration-300 group-hover:bg-[#075B32] group-hover:text-white">
              <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

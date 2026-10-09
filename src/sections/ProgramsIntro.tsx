
import { motion } from "framer-motion";

import {
  ArrowDownRight,
  ArrowRight,
  HeartPulse,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    number: "01",
    icon: TrendingDown,
    title: "Healthy Weight Loss",
    subtitle: "Lose weight without losing your life.",
    description:
      "A practical nutrition approach focused on healthy, sustainable weight loss without extreme restrictions or complicated diets.",
    points: [
      "Personalised nutrition guidance",
      "Practical everyday meal choices",
      "Sustainable weight management",
      "Flexible approach for real life",
    ],
    href: "/weight-loss",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Healthy Weight Gain",
    subtitle: "Build your body with better nutrition.",
    description:
      "A structured approach to healthy weight gain using balanced meals, better nutrition and habits that support your everyday routine.",
    points: [
      "Personalised nutrition strategy",
      "Balanced calorie surplus",
      "Protein-focused food choices",
      "Healthy and sustainable progress",
    ],
    href: "/weight-gain",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Healthy Lifestyle",
    subtitle: "Feel better. Eat better. Live better.",
    description:
      "A flexible nutrition program for people who want to improve everyday eating habits, energy and overall lifestyle.",
    points: [
      "Balanced everyday nutrition",
      "Better eating habits",
      "Practical meal planning",
      "Long-term lifestyle support",
    ],
    href: "/healthy-lifestyle",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand you",
    text: "We start with your goals, lifestyle, food preferences and current routine.",
  },
  {
    number: "02",
    title: "Build your approach",
    text: "Your nutrition strategy is designed around what is realistic for your everyday life.",
  },
  {
    number: "03",
    title: "Create better habits",
    text: "The focus is not perfection. It is building choices you can consistently maintain.",
  },
  {
    number: "04",
    title: "Keep moving forward",
    text: "Your nutrition journey can evolve as your goals, routine and lifestyle change.",
  },
];

export default function ProgramsIntro() {
  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#F4E5D0] px-6 pb-20 pt-32 md:px-10 md:pt-40 lg:px-16 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#B8D9A6]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#CBE5BA]/30 blur-3xl" />

        <div className="pointer-events-none absolute right-[7%] top-[18%] hidden select-none text-[16rem] font-light leading-none tracking-[-0.08em] text-[#075B32]/[0.035] lg:block">
          03
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]"
          >
            <span className="h-px w-10 bg-[#075B32]" />
            Our Programs
          </motion.p>

          <div className="mt-9 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="max-w-[1100px] text-[clamp(4rem,8vw,8.5rem)] font-light leading-[0.87] tracking-[-0.065em]"
            >
              Nutrition plans
              <br />
              <span className="font-normal italic text-[#075B32]">
                made for you.
              </span>
            </motion.h1>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_0.7fr] lg:items-end lg:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="max-w-2xl text-lg leading-8 text-[#17352A]/65 md:text-xl md:leading-9"
            >
              Whether you want to lose weight, gain healthy weight or simply
              build better eating habits, EasyDiet helps you find a nutrition
              approach that fits your life.
            </motion.p>

            <motion.a
              href="#programs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="group flex w-fit items-center gap-3 rounded-full border border-[#17352A]/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-[#17352A] hover:text-white"
            >
              Explore programs
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-y-1">
                <ArrowDownRight size={15} strokeWidth={1.5} />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F7F4EC] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                Find your starting point
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
                  One goal at a time.
                  <br />
                  <span className="font-normal italic text-[#075B32]">
                    One better you.
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-10 max-w-[720px] text-lg leading-8 text-[#17352A]/60 md:text-xl md:leading-9"
              >
                Every EasyDiet program is designed to make nutrition simpler,
                more practical and easier to sustain.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="bg-[#17352A] px-6 py-28 text-white md:px-10 md:py-36 lg:px-16 lg:py-44"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20 grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B8D9A6]">
              Choose your path
            </p>

            <h2 className="max-w-5xl text-4xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              A plan for where you are
              <br />
              <span className="font-normal italic text-[#B8D9A6]">
                and where you want to go.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/15 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className={`group border-b border-white/15 py-12 lg:px-8 lg:py-14 ${
                    index !== programs.length - 1 ? "lg:border-r" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[12px] tracking-[0.18em] text-white/35">
                      {program.number}
                    </span>

                    <Icon
                      size={30}
                      strokeWidth={1.2}
                      className="text-[#B8D9A6] transition-transform duration-500 group-hover:rotate-12"
                    />
                  </div>

                  <h3 className="mt-14 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-base font-medium italic text-[#B8D9A6]">
                    {program.subtitle}
                  </p>

                  <p className="mt-6 text-base leading-7 text-white/55">
                    {program.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {program.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8D9A6]" />
                        <p className="text-sm leading-6 text-white/50">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={program.href}
                    className="group/link mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B8D9A6]"
                  >
                    Explore program
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8D9A6]/30 transition-all duration-300 group-hover/link:bg-[#B8D9A6] group-hover/link:text-[#17352A]">
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERSONALISATION */}
      <section className="bg-[#F8EFE3] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square max-w-[560px] rounded-full bg-[#B8D9A6] p-8 md:p-12">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-[#17352A]/15 bg-[#F7F4EC] px-8 text-center">
                <Target
                  size={44}
                  strokeWidth={1.1}
                  className="text-[#075B32]"
                />

                <p className="mt-7 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                  Your goal.
                </p>

                <p className="mt-2 text-4xl font-medium italic tracking-[-0.04em] text-[#075B32] md:text-5xl">
                  Your plan.
                </p>

                <p className="mt-7 max-w-xs text-sm leading-6 text-[#17352A]/60">
                  A nutrition approach built around your needs, preferences
                  and everyday routine.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
              Personalised nutrition
            </p>

            <h2 className="mt-7 text-4xl font-light leading-[1.02] tracking-[-0.045em] md:text-6xl">
              Your program should work with your life,{" "}
              <span className="font-normal italic text-[#075B32]">
                not against it.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/65">
              We consider more than just a number on the weighing scale. Your
              routine, food preferences, activity level and goals all matter
              when creating a sustainable nutrition approach.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#17352A]/65">
              The result is a plan that feels realistic enough to follow and
              flexible enough to live with.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F7F4EC] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                The approach
              </p>

              <h2 className="mt-7 text-4xl font-light leading-[1.03] tracking-[-0.04em] md:text-6xl">
                Simple steps.
                <br />
                <span className="font-normal italic text-[#075B32]">
                  Meaningful change.
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

      {/* WHY EASYDIET */}
      <section className="bg-[#CBE5BA] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                Why EasyDiet
              </p>

              <h2 className="mt-7 max-w-5xl text-4xl font-light leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Less restriction.
                <br />
                More understanding.
                <br />
                <span className="font-normal italic text-[#075B32]">
                  Better habits.
                </span>
              </h2>
            </div>

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#075B32] text-white">
                <Sparkles size={27} strokeWidth={1.2} />
              </div>

              <p className="mt-8 text-lg leading-8 text-[#17352A]/70">
                We want nutrition to feel clear, practical and achievable.
                Instead of making food complicated, EasyDiet helps you
                understand what works for you and why.
              </p>

              <Link
                to="/philosophy"
                className="mt-9 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#075B32]"
              >
                Read our philosophy
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/25">
                  <ArrowRight size={15} />
                </span>
              </Link>
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
                  Find the nutrition approach that{" "}
                  <span className="font-normal italic text-[#B8D9A6]">
                    fits you.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
                  Tell us a little about yourself and your goals. Take the
                  first step towards a more personalised nutrition journey.
                </p>
              </div>

              <Link
                to="/"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#CBE5BA] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#17352A] transition-all duration-300 hover:bg-white"
              >
                Get My Diet Plan
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17352A] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

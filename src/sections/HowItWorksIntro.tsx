import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Tell us",
    accent: "about you.",
    description:
      "Share your goals, food preferences, routine and the changes you want to make.",
  },
  {
    number: "02",
    title: "We understand",
    accent: "your needs.",
    description:
      "Your information helps us understand what kind of nutrition approach fits your lifestyle.",
  },
  {
    number: "03",
    title: "Get your",
    accent: "personalised plan.",
    description:
      "Receive practical nutrition guidance designed around your goals, preferences and everyday routine.",
  },
  {
    number: "04",
    title: "Build",
    accent: "better habits.",
    description:
      "Follow a realistic approach that helps healthy eating become part of your everyday life.",
  },
];

export default function HowItWorksIntro() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F4E5D0] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Background number */}

      <div className="pointer-events-none absolute -right-10 top-12 hidden select-none text-[18rem] font-light leading-none tracking-[-0.08em] text-[#075B32]/[0.035] lg:block">
        04
      </div>

      <div className="relative mx-auto max-w-[1250px]">

        {/* =========================================
            INTRO
        ========================================= */}

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
              How It Works
            </p>

            <div className="mt-6 hidden h-20 w-px bg-[#075B32]/20 lg:block" />
          </motion.div>

          <div>

            {/* Heading */}

            <div className="overflow-hidden">

              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="max-w-[1000px] text-5xl font-light leading-[1.02] tracking-[-0.045em] text-[#17352A] md:text-7xl lg:text-[6.5rem]"
              >
                A simpler way to

                <br />

                <span className="font-normal italic text-[#075B32]">
                  eat better.
                </span>
              </motion.h2>

            </div>

            {/* Description */}

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
              No complicated rules. No one-size-fits-all diet.
              Just a clear, personalised approach that starts with
              understanding you.
            </motion.p>

          </div>

        </div>

        {/* =========================================
            STEPS
        ========================================= */}

        <div className="mt-20 border-t border-[#17352A]/15">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-[#17352A]/15"
            >
              <div className="grid gap-7 py-9 md:grid-cols-[80px_1fr_1fr] md:items-center md:gap-10 md:py-12">

                {/* NUMBER */}

                <span className="text-[12px] font-semibold tracking-[0.2em] text-[#075B32]">
                  {step.number}
                </span>

                {/* TITLE */}

                <h3 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#17352A] md:text-6xl">

                  {step.title}

                  <br />

                  <span className="font-normal italic text-[#075B32]">
                    {step.accent}
                  </span>

                </h3>

                {/* DESCRIPTION */}

                <p className="max-w-[500px] text-base leading-7 text-[#17352A]/55 md:text-lg md:leading-8">
                  {step.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* =========================================
            CTA
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="max-w-md text-base leading-7 text-[#17352A]/50 md:text-lg">
            Ready to make nutrition work for you?
          </p>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-4 bg-[#075B32] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#064927]"
          >
            Get My Diet Plan

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
              />
            </span>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
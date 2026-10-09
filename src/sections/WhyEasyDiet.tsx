import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    title: "Personalised",
    description:
      "Your nutrition should reflect your goals, preferences, routine and the foods you actually enjoy.",
  },
  {
    number: "02",
    title: "Practical",
    description:
      "Healthy eating needs to work on ordinary days — not just when everything goes perfectly.",
  },
  {
    number: "03",
    title: "Sustainable",
    description:
      "We focus on realistic habits that can become part of your lifestyle rather than short-term restrictions.",
  },
];

export default function WhyEasyDiet() {
  return (
    <section
      id="why-easydiet"
      className="relative overflow-hidden bg-[#F8EFE3] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
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
              Why EasyDiet
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
                Better nutrition

                <br />

                starts with

                <span className="font-normal italic text-[#075B32]">
                  {" "}better understanding.
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
              We don't believe healthy eating has to mean giving up the
              foods you love or following rules that don't fit your life.
              EasyDiet is built around a simpler idea — understand what
              works for you, then make it easier to follow.
            </motion.p>

          </div>

        </div>

        {/* =========================================
            PRINCIPLES
        ========================================= */}

        <div className="mt-20 grid border-t border-[#17352A]/15 md:grid-cols-3">

          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-[#17352A]/15 px-0 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
            >

              <div className="flex items-center justify-between">

                <span className="text-[12px] font-semibold tracking-[0.2em] text-[#075B32]">
                  {principle.number}
                </span>

                <span className="h-px w-10 bg-[#075B32]/20" />

              </div>

              <h3 className="mt-12 text-4xl font-light tracking-[-0.04em] text-[#17352A] md:text-5xl">
                {principle.title}
              </h3>

              <p className="mt-5 max-w-[360px] text-base leading-7 text-[#17352A]/55 md:text-lg md:leading-8">
                {principle.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* =========================================
            CLOSING STATEMENT
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="mt-20 border-t border-[#17352A]/15 pt-10 md:mt-28 md:pt-12"
        >

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <p className="max-w-[750px] text-3xl font-light leading-[1.3] tracking-[-0.025em] text-[#17352A] md:text-5xl">
              Food shouldn't make your life harder.

              <span className="font-normal italic text-[#075B32]">
                {" "}It should make it better.
              </span>
            </p>

            <Link
              to="/philosophy"
              className="group flex shrink-0 items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#075B32]"
            >
              Explore Our Philosophy

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/25 transition-all duration-300 group-hover:bg-[#075B32] group-hover:text-white">

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                />

              </span>
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const guides = [
  {
    number: "01",
    category: "Weight Loss",
    title: "Understanding calories without making food complicated.",
    href: "/guides",
  },
  {
    number: "02",
    category: "Protein",
    title: "A practical guide to getting enough protein every day.",
    href: "/guides",
  },
  {
    number: "03",
    category: "Indian Food",
    title: "How to build a balanced Indian meal.",
    href: "/guides",
  },
  {
    number: "04",
    category: "Healthy Eating",
    title: "Simple habits that make healthy eating easier.",
    href: "/guides",
  },
];

export default function GuidesIntro() {
  return (
    <section
      id="guides"
      className="relative overflow-hidden bg-[#F4E5D0] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Background number */}

      <div className="pointer-events-none absolute -left-10 top-10 hidden select-none text-[18rem] font-light leading-none tracking-[-0.08em] text-[#075B32]/[0.035] lg:block">
        05
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
              Nutrition Guides
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
                Learn to make
                <br />
                <span className="font-normal italic text-[#075B32]">
                  better food choices.
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
              Clear, practical nutrition information to help you understand
              food better and make choices that work for your everyday life.
            </motion.p>

          </div>

        </div>

        {/* =========================================
            GUIDES
        ========================================= */}

        <div className="mt-20 border-t border-[#17352A]/15">

          {guides.map((guide, index) => (
            <motion.div
              key={guide.number}
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
              <Link
                to={guide.href}
                className="grid items-center gap-6 py-9 md:grid-cols-[80px_190px_1fr_60px] md:gap-10 md:py-11"
              >

                {/* NUMBER */}

                <span className="text-[12px] font-semibold tracking-[0.2em] text-[#075B32]">
                  {guide.number}
                </span>

                {/* CATEGORY */}

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#075B32]/70">
                  {guide.category}
                </span>

                {/* TITLE */}

                <h3 className="max-w-[700px] text-2xl font-light leading-[1.2] tracking-[-0.025em] text-[#17352A] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
                  {guide.title}
                </h3>

                {/* ARROW */}

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#075B32]/25 text-[#075B32] transition-all duration-500 group-hover:bg-[#075B32] group-hover:text-white">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>

              </Link>
            </motion.div>
          ))}

        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="text-base leading-7 text-[#17352A]/50 md:text-lg">
            More nutrition knowledge. Fewer confusing rules.
          </p>

          <Link
            to="/guides"
            className="group flex w-fit items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#075B32]"
          >
            Explore All Guides

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/25 transition-all duration-300 group-hover:bg-[#075B32] group-hover:text-white">
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
              />
            </span>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
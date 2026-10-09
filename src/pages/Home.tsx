import {
  ArrowDownRight,
  ArrowUpRight,
  Leaf,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import heroImage from "../assets/hero.png";

import PhilosophyIntro from "../sections/PhilosophyIntro";
import ProgramsIntro from "../sections/ProgramsIntro";
import HowItWorksIntro from "../sections/HowItWorksIntro";
import WhyEasyDiet from "../sections/WhyEasyDiet";
import TestimonialsIntro from "../sections/TestimonialsIntro";
import GuidesIntro from "../sections/GuidesIntro";
import FAQIntro from "../sections/FAQIntro";
import FinalCTA from "../sections/FinalCTA";

import DietPlanForm from "../components/DietPlanForm";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">

      {/* =====================================================
          FULL SCREEN HERO
      ====================================================== */}

      <section className="relative min-h-screen w-full overflow-hidden bg-[#F4E5D0]">

        {/* BACKGROUND IMAGE */}

        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>


        {/* SOFT OVERLAYS */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#F4E5D0]/25 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17352A]/10 via-transparent to-[#F4E5D0]/5" />


        {/* =====================================================
            CREATIVE RIGHT SIDE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute right-[3%] top-[19%] hidden h-[520px] w-[520px] lg:block"
        >

          {/* Large organic circle */}

          <div className="absolute inset-0 rounded-full border border-[#075B32]/15 bg-[#B8D9A6]/15 backdrop-blur-[2px]" />

          {/* Inner circle */}

          <div className="absolute left-[11%] top-[11%] h-[78%] w-[78%] rounded-full border border-[#075B32]/10" />

          {/* Decorative rings */}

          <div className="absolute -right-5 top-[18%] h-20 w-20 rounded-full border border-[#075B32]/20" />

          <div className="absolute -bottom-3 left-[12%] h-12 w-12 rounded-full bg-[#075B32]/10" />


          {/* Large floating leaf */}

          <motion.div
            animate={{
              rotate: [0, 4, 0],
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[10%] top-[23%] text-[#075B32]/35"
          >
            <Leaf
              size={100}
              strokeWidth={0.8}
            />
          </motion.div>


          {/* Second leaf */}

          <motion.div
            animate={{
              rotate: [0, -5, 0],
              y: [0, 6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[8%] rotate-[35deg] text-[#075B32]/30"
          >
            <Leaf
              size={75}
              strokeWidth={0.8}
            />
          </motion.div>


          {/* Small floating leaf */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[17%] left-[4%] rotate-[-25deg] text-[#62B82F]/50"
          >
            <Leaf
              size={52}
              strokeWidth={1}
            />
          </motion.div>


          {/* Floating EasyDiet card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[15%] right-[-7%] w-[210px] border border-white/50 bg-white/60 p-5 shadow-[0_20px_60px_rgba(23,53,42,0.08)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#075B32]">
                EasyDiet
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075B32]/10 text-[#075B32]">
                <Sparkles
                  size={13}
                  strokeWidth={1.4}
                />
              </span>

            </div>

            <p className="mt-5 text-xl font-light tracking-[-0.03em] text-[#17352A]">
              Built around
              <br />

              <span className="font-normal italic text-[#075B32]">
                you.
              </span>
            </p>

            <div className="mt-5 h-px w-full bg-[#17352A]/10" />

            <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[#17352A]/45">
              Personalised nutrition
            </p>
          </motion.div>


          {/* Small number */}

          <div className="absolute left-[3%] top-[8%] flex h-14 w-14 items-center justify-center rounded-full border border-[#075B32]/15 bg-white/30 backdrop-blur-sm">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-[#075B32]">
              01
            </span>
          </div>

        </motion.div>


        {/* =====================================================
            MAIN HERO CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-20 pt-32 md:px-10 lg:px-14">

          <div className="w-full max-w-[820px]">

            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#075B32]/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#075B32] md:text-[11px]">
                Personalised Nutrition
              </span>
            </motion.div>


            {/* MAIN HEADING */}

            <div className="overflow-hidden">

              <motion.h1
                initial={{
                  y: "110%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="max-w-[900px] text-[5.5rem] font-light leading-[0.88] tracking-[-0.065em] text-[#17352A] sm:text-[6.5rem] md:text-[8rem] lg:text-[9.2rem] xl:text-[10rem]"
              >
                Food that
                <br />

                <span className="font-normal italic text-[#075B32]">
                  fits
                </span>{" "}

                your life.
              </motion.h1>

            </div>


            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[590px] text-base leading-7 text-[#17352A]/65 md:text-lg md:leading-8"
            >
              Personalised diet plans designed around your goals,
              preferences and everyday routine — because healthy eating
              should feel natural, not restrictive.
            </motion.p>


            {/* =================================================
                HERO CTA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-7"
            >

              {/* GET MY DIET PLAN — OPENS FORM */}

              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="group inline-flex items-center gap-4 bg-[#075B32] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#064927]"
              >
                Get My Diet Plan

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                  />
                </span>
              </button>


              {/* HOW IT WORKS */}

              <Link
                to="/how-it-works"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#17352A]"
              >
                How It Works

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </motion.div>

          </div>
        </div>


        {/* =====================================================
            RIGHT EDITORIAL LABEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.4,
          }}
          className="absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 md:block lg:right-10"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#075B32]/55">
            Better Food · Healthy Life
          </span>
        </motion.div>


        {/* =====================================================
            BOTTOM INFORMATION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.5,
          }}
          className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between md:bottom-8 md:left-10 md:right-10 lg:left-14 lg:right-14"
        >

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#075B32]/65">
              EasyDiet.in
            </p>

            <p className="mt-1 text-xs text-[#17352A]/60">
              Nutrition made personal.
            </p>

          </div>


          <div className="hidden items-center gap-3 md:flex">

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#17352A]/50">
              Scroll to explore
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#075B32]/25 text-[#075B32]">
              <ArrowDownRight
                size={17}
                strokeWidth={1.3}
              />
            </span>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}

      <PhilosophyIntro />


      {/* =====================================================
          PROGRAMS
      ====================================================== */}

      <ProgramsIntro />


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <HowItWorksIntro />


      {/* =====================================================
          WHY EASYDIET
      ====================================================== */}

      <WhyEasyDiet />


      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <TestimonialsIntro />


      {/* =====================================================
          NUTRITION GUIDES
      ====================================================== */}

      <GuidesIntro />


      {/* =====================================================
          FAQ
      ====================================================== */}

      <FAQIntro />


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <FinalCTA />


      {/* =====================================================
          HOME HERO FORM
      ====================================================== */}

      <DietPlanForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
      />

    </div>
  );
}
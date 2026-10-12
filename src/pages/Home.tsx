
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Heart,
  Leaf,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import heroImage from "../assets/hero.png";

// import PhilosophyIntro from "../sections/PhilosophyIntro";
import ProgramsIntro from "../sections/ProgramsIntro";
import HowItWorksIntro from "../sections/HowItWorksIntro";
import WhyEasyDiet from "../sections/WhyEasyDiet";
import TestimonialsIntro from "../sections/TestimonialsIntro";
import GuidesIntro from "../sections/GuidesIntro";
import FAQIntro from "../sections/FAQIntro";
import FinalCTA from "../sections/FinalCTA";
import CustomerReviews from "../sections/CustomerReviews";


import DietPlanForm from "../components/DietPlanForm";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#F4E5D0]">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          className="absolute inset-0 -z-20"
        >
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Background overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F4E5D0]/95 via-[#F4E5D0]/85 to-[#F4E5D0]/50 lg:from-[#F4E5D0]/95 lg:via-[#F4E5D0]/75 lg:to-[#F4E5D0]/15" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F7F4EC]/25 via-transparent to-[#F7F4EC]/50" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-5 pb-24 pt-28 sm:px-8 sm:pt-32 md:px-10 lg:px-14">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 xl:gap-14">
            {/* LEFT CONTENT */}
            <div className="relative z-10 w-full max-w-[720px]">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="mb-5 flex items-center gap-3 sm:mb-7"
              >
                <span className="h-px w-9 bg-[#075B32]/60 sm:w-12" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#075B32] sm:text-[11px] sm:tracking-[0.3em]">
                  Personalised Nutrition
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[760px] text-[clamp(3.1rem,10vw,5.5rem)] font-light leading-[0.94] tracking-[-0.065em] text-[#17352A] md:text-[6rem] lg:text-[clamp(3.8rem,5vw,6.2rem)] xl:text-[6.8rem]"
              >
                Food that
                <br />
                <span className="font-normal italic text-[#075B32]">
                  fits
                </span>{" "}
                your life.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-5 max-w-[550px] text-sm leading-6 text-[#17352A]/75 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg lg:leading-8"
              >
                Personalised diet plans designed around your goals,
                preferences and everyday routine — because healthy eating
                should feel natural, not restrictive.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-6"
              >
                <button
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="group inline-flex items-center gap-3 bg-[#075B32] px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#064927] sm:gap-4 sm:px-6 sm:py-4 sm:text-[11px] sm:tracking-[0.13em]"
                >
                  Get My Diet Plan

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 sm:h-8 sm:w-8">
                    <ArrowUpRight size={15} />
                  </span>
                </button>

                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#17352A] transition-colors hover:text-[#075B32] sm:text-[11px] sm:tracking-[0.15em]"
                >
                  How It Works
                  <ArrowUpRight size={15} />
                </Link>
              </motion.div>

              {/* Quick benefits */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 grid max-w-[540px] grid-cols-3 border-t border-[#075B32]/15 pt-4 sm:mt-9 sm:pt-5"
              >
                <div className="pr-2 sm:pr-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/30 text-[#075B32] sm:h-10 sm:w-10">
                    <CheckCircle2 size={19} strokeWidth={1.4} />
                  </span>
                  <p className="mt-2 text-[10px] leading-4 text-[#17352A]/80 sm:text-sm sm:leading-5">
                    Goal-focused plans
                  </p>
                </div>

                <div className="border-l border-[#075B32]/10 px-3 sm:px-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/30 text-[#075B32] sm:h-10 sm:w-10">
                    <Leaf size={19} strokeWidth={1.4} />
                  </span>
                  <p className="mt-2 text-[10px] leading-4 text-[#17352A]/80 sm:text-sm sm:leading-5">
                    Balanced nutrition
                  </p>
                </div>

                <div className="border-l border-[#075B32]/10 pl-3 sm:pl-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/30 text-[#075B32] sm:h-10 sm:w-10">
                    <Heart size={19} strokeWidth={1.4} />
                  </span>
                  <p className="mt-2 text-[10px] leading-4 text-[#17352A]/80 sm:text-sm sm:leading-5">
                    Healthy lifestyle
                  </p>
                </div>
              </motion.div>

              {/* Left-side customer trust card */}
              {/* <motion.a
                href="#testimonials"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.75 }}
                className="mt-6 flex w-full max-w-[540px] items-center gap-3 rounded-2xl border border-[#075B32]/20 bg-white/85 p-4 shadow-[0_12px_35px_rgba(23,53,42,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,53,42,0.15)] sm:mt-7 sm:gap-5 sm:p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B8D9A6]/45 text-[#075B32] sm:h-16 sm:w-16">
                  <UsersRound size={25} strokeWidth={1.6} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-3xl leading-none tracking-tight text-[#075B32] sm:text-4xl">
                    2,000+
                  </span>

                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#17352A] sm:text-xs sm:tracking-[0.13em]">
                    Transformations & Happy Customers
                  </span>

                  <span className="mt-1.5 block text-xs leading-5 text-[#17352A]/65 sm:text-sm">
                    Every journey starts with a healthier choice.
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#075B32]/70"
                />
              </motion.a> */}
            </div>

            {/* RIGHT-SIDE IMAGE AND TRUST CARD */}
            <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:ml-auto lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* Image frame */}
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-[30px] border border-white/70 bg-[#B8D9A6]/20 shadow-[0_25px_70px_rgba(23,53,42,0.13)] sm:aspect-[5/4] sm:rounded-[42px] lg:aspect-[4/5] lg:max-w-[500px] xl:max-w-[540px]">
                  <img
                    src="/images/hero-positive.png"
                    alt="A joyful healthy lifestyle with fresh nutritious food"
                    loading="eager"
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover object-[55%_center]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17352A]/25 via-transparent to-white/5" />

                  {/* Image caption */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-[#F7F4EC]/90 p-3 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B8D9A6]/50 text-[#075B32]">
                        <Leaf size={20} />
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-[#17352A] sm:text-base">
                          Healthy habits, made personal.
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#17352A]/70">
                          Practical food guidance for everyday life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating testimonial link */}
                <motion.a
                  href="#testimonials"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-1 top-4 flex max-w-[195px] items-center gap-2 rounded-xl border border-white/70 bg-white/95 p-3 shadow-lg sm:-right-3 sm:top-8 sm:max-w-[220px] sm:gap-3 sm:p-4 lg:-right-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#075B32]/10 text-[#075B32] sm:h-10 sm:w-10">
                    <Heart size={18} />
                  </span>

                  <span>
                    <span className="block text-xs font-semibold text-[#17352A] sm:text-sm">
                      Real experiences
                    </span>
                    <span className="mt-1 block text-[10px] leading-4 text-[#17352A]/65 sm:text-xs">
                      Read customer stories
                    </span>
                  </span>
                </motion.a>

                {/* Floating leaf */}
                <motion.div
                  animate={{ rotate: [0, 8, 0], y: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-2 top-8 text-[#075B32]/70 sm:-left-4 sm:top-12"
                  aria-hidden="true"
                >
                  <Leaf size={30} strokeWidth={1.1} />
                </motion.div>
              </motion.div>

              {/* Premium customer count directly below image */}
              <motion.a
                href="#testimonials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mx-auto mt-5 flex w-full max-w-[500px] items-center gap-4 rounded-2xl border border-[#075B32]/15 bg-white/90 p-4 shadow-[0_15px_45px_rgba(23,53,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,53,42,0.16)] sm:mt-6 sm:gap-5 sm:p-5 lg:ml-auto lg:mr-0"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#075B32] to-[#4D8A43] text-white shadow-md sm:h-16 sm:w-16">
                  <UsersRound size={27} strokeWidth={1.5} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-3xl leading-none tracking-tight text-[#075B32] sm:text-4xl">
                    2,000+
                  </span>

                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#17352A] sm:text-xs sm:tracking-[0.13em]">
                    Transformations & Happy Customers
                  </span>

                  <span className="mt-1.5 block text-xs leading-5 text-[#17352A]/60">
                    Every journey starts with a healthier choice.
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#075B32]/70"
                />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="pointer-events-none absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between sm:bottom-6 sm:left-8 sm:right-8 lg:left-14 lg:right-14">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#075B32]/65">
              EasyDiet.in
            </p>
            <p className="mt-1 text-[10px] text-[#17352A]/60 sm:text-xs">
              Nutrition made personal.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#17352A]/50">
              Scroll to explore
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#075B32]/25 text-[#075B32]">
              <ArrowDownRight size={17} strokeWidth={1.3} />
            </span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      {/* <PhilosophyIntro /> */}

      {/* PROGRAMS */}
      <ProgramsIntro />

      {/* HOW IT WORKS */}
      <HowItWorksIntro />

      {/* WHY EASYDIET */}
      <WhyEasyDiet />

      {/* CUSTOMER REVIEWS — separate section */}
<CustomerReviews />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-24">
        <TestimonialsIntro />
      </section>

      {/* GUIDES */}
      <GuidesIntro />

      {/* FAQ */}
      <FAQIntro />

      {/* FINAL CTA */}
      <FinalCTA />

      {/* EXISTING DIET PLAN FORM */}
      <DietPlanForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </div>
  );
}

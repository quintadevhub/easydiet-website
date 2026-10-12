
import {
  ArrowUpRight,
  MessageCircle,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import DietPlanForm from "../components/DietPlanForm";

export default function FinalCTA() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {/* =========================================
          PREMIUM FOUNDERS SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-5 py-20 md:px-10 md:py-28 lg:px-14">
        {/* Top decorative wave */}
        <div className="pointer-events-none absolute inset-x-0 top-0">
          <svg
            viewBox="0 0 1440 100"
            className="h-auto w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,0 H1440 V35 C1120,100 850,0 560,45 C320,80 150,70 0,35 Z"
              fill="#E8F0E2"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1120px]">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center md:mb-16"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-[#075B32]/15 bg-white/70 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#075B32]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#75A85C]" />
              The People Behind EasyDiet
            </span>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.045em] text-[#17352A] md:text-6xl">
              Meet the minds
              <br />
              behind your{" "}
              <span className="font-normal italic text-[#52814A]">
                wellbeing.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#17352A]/65 md:text-base">
              Building a more thoughtful, personal and practical
              approach to everyday nutrition.
            </p>
          </motion.div>

          {/* Founder profile cards */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10">
            {/* FOUNDER & CEO */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-[28px] border border-[#17352A]/10 bg-white shadow-[0_12px_50px_rgba(23,53,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(23,53,42,0.13)]"
            >
              {/* Founder photo */}
              <div className="relative h-[350px] overflow-hidden bg-[#E9E4D8] sm:h-[410px]">
                <img
                  src="/images/ankit-founder.png"
                  alt="Mr Ankit, Founder and CEO of EasyDiet"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102A20]/40 via-transparent to-transparent" />

                {/* Wave-shaped photo edge */}
                <div className="absolute bottom-0 left-0 w-full">
                  <svg
                    viewBox="0 0 600 90"
                    preserveAspectRatio="none"
                    className="block h-[65px] w-full sm:h-[80px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,55 C120,5 220,90 350,48 C450,15 520,20 600,42 L600,90 L0,90 Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>

                <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#17352A] backdrop-blur-md">
                  Leadership
                </span>
              </div>

              {/* Founder details */}
              <div className="relative px-7 pb-8 pt-2 text-center sm:px-10 sm:pb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#64845D]">
                  Founder &amp; CEO
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-tight text-[#17352A] sm:text-4xl">
                  Mr Ankit
                </h3>

                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-px w-10 bg-[#B8D9A6]" />
                  <span className="h-2 w-2 rounded-full bg-[#75A85C]" />
                  <span className="h-px w-10 bg-[#B8D9A6]" />
                </div>

                <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-[#17352A]/65">
                  Leading the vision to make personalised nutrition
                  simpler and more accessible.
                </p>

                <div className="pointer-events-none absolute -bottom-8 -right-5 select-none text-8xl font-light tracking-tighter text-[#075B32]/[0.045]">
                  01
                </div>
              </div>
            </motion.article>

            {/* CO-FOUNDER */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group relative mt-0 overflow-hidden rounded-[28px] border border-[#17352A]/10 bg-white shadow-[0_12px_50px_rgba(23,53,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(23,53,42,0.13)] md:mt-12"
            >
              {/* Co-founder photo */}
              <div className="relative h-[350px] overflow-hidden bg-[#E9E4D8] sm:h-[410px]">
                <img
                  src="/images/shivam-cofounder.jpeg"
                  alt="Shivam Chandra, Co-Founder of EasyDiet"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102A20]/40 via-transparent to-transparent" />

                {/* Wave-shaped photo edge */}
                <div className="absolute bottom-0 left-0 w-full">
                  <svg
                    viewBox="0 0 600 90"
                    preserveAspectRatio="none"
                    className="block h-[65px] w-full sm:h-[80px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,35 C100,70 220,10 340,50 C450,85 530,65 600,25 L600,90 L0,90 Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>

                <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#17352A] backdrop-blur-md">
                  Strategy &amp; Growth
                </span>
              </div>

              {/* Co-founder details */}
              <div className="relative px-7 pb-8 pt-2 text-center sm:px-10 sm:pb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#64845D]">
                  Co-Founder
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-tight text-[#17352A] sm:text-4xl">
                  Shivam Chandra
                </h3>

                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-px w-10 bg-[#B8D9A6]" />
                  <span className="h-2 w-2 rounded-full bg-[#75A85C]" />
                  <span className="h-px w-10 bg-[#B8D9A6]" />
                </div>

                <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-[#17352A]/65">
                  Helping shape the EasyDiet experience around
                  everyday needs and healthier habits.
                </p>

                <div className="pointer-events-none absolute -bottom-8 -right-5 select-none text-8xl font-light tracking-tighter text-[#075B32]/[0.045]">
                  02
                </div>
              </div>
            </motion.article>
          </div>
        </div>

        {/* Wave transition into green CTA */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-px">
          <svg
            viewBox="0 0 1440 90"
            className="block h-auto w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,50 C280,0 460,85 720,48 C990,10 1190,0 1440,45 L1440,90 L0,90 Z"
              fill="#075B32"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          EXISTING MAIN CTA SECTION
      ========================================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#075B32] px-6 py-28 text-[#FFFDF8] md:px-10 md:py-36 lg:px-14 lg:py-44"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-24 select-none text-[22rem] font-light leading-none tracking-[-0.08em] text-white/[0.035] md:text-[32rem]">
          07
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-[45%] w-[45%] rounded-full bg-[#B8D9A6]/[0.05] blur-3xl" />

        {/* Main content */}
        <div className="relative mx-auto max-w-[1250px]">
          <div className="grid gap-16 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#CBE5BA]">
                Start Your Journey
              </p>

              <div className="mt-6 hidden h-20 w-px bg-[#CBE5BA]/30 lg:block" />
            </motion.div>

            {/* CTA content */}
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
                  className="max-w-[1050px] text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-7xl lg:text-[6.5rem]"
                >
                  Ready to make
                  <br />

                  <span className="font-normal italic text-[#CBE5BA]">
                    healthy eating
                  </span>

                  <br />

                  easier?
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
                className="mt-10 max-w-[680px] text-lg leading-8 text-white/65 md:text-xl md:leading-9"
              >
                Tell us about your goals, your routine and the way
                you like to eat. We'll help you take the first step
                towards a more personalised approach to nutrition.
              </motion.p>

              {/* Contact actions */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-12 flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center"
              >
                {/* Get My Diet Plan */}
                <button
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="group inline-flex w-fit items-center gap-4 bg-[#FFFDF8] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#075B32] transition-all duration-300 hover:bg-[#CBE5BA] sm:px-6"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#075B32]/10">
                    <MessageCircle size={17} strokeWidth={1.5} />
                  </span>

                  <span>Get My Diet Plan</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#075B32]/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight size={15} strokeWidth={1.6} />
                  </span>
                </button>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918923161712"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors duration-300 hover:text-[#CBE5BA]"
                >
                  <MessageCircle size={17} strokeWidth={1.5} />

                  <span>Talk on WhatsApp</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* Business email */}
                <a
                  href="mailto:info@easydiet.in"
                  className="group inline-flex w-fit items-center gap-3 text-[11px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#CBE5BA]"
                >
                  <Mail size={17} strokeWidth={1.5} />

                  <span className="normal-case tracking-normal">
                    info@easydiet.in
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </motion.div>

              {/* Bottom details */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                }}
                className="mt-16 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CBE5BA]/70">
                    Personalised
                  </p>

                  <p className="mt-2 text-sm text-white/55">
                    Built around you
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CBE5BA]/70">
                    Practical
                  </p>

                  <p className="mt-2 text-sm text-white/55">
                    Designed for real life
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CBE5BA]/70">
                    Sustainable
                  </p>

                  <p className="mt-2 text-sm text-white/55">
                    Made for lasting habits
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING DIET PLAN FORM */}
      <DietPlanForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </>
  );
}

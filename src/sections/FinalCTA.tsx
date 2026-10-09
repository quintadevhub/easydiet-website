
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
      {/* MAIN CTA SECTION */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#075B32] px-6 py-28 text-[#FFFDF8] md:px-10 md:py-36 lg:px-14 lg:py-44"
      >
        {/* DECORATIVE BACKGROUND */}
        <div className="pointer-events-none absolute -right-20 -top-24 select-none text-[22rem] font-light leading-none tracking-[-0.08em] text-white/[0.035] md:text-[32rem]">
          07
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-[45%] w-[45%] rounded-full bg-[#B8D9A6]/[0.05] blur-3xl" />

        {/* MAIN CONTENT */}
        <div className="relative mx-auto max-w-[1250px]">
          <div className="grid gap-16 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            {/* SECTION LABEL */}
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

            {/* MAIN CONTENT */}
            <div>
              {/* HEADING */}
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

              {/* DESCRIPTION */}
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
                Tell us about your goals, your routine and the way you like
                to eat. We'll help you take the first step towards a more
                personalised approach to nutrition.
              </motion.p>

              {/* CONTACT ACTIONS */}
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
                {/* GET MY DIET PLAN */}
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

                {/* WHATSAPP */}
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

                {/* EMAIL */}
                <a
                  href="mailto:in.easydiet@gmail.com"
                  className="group inline-flex w-fit items-center gap-3 text-[11px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#CBE5BA]"
                >
                  <Mail size={17} strokeWidth={1.5} />

                  <span className="normal-case tracking-normal">
                    in.easydiet@gmail.com
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </motion.div>

              {/* BOTTOM DETAILS */}
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

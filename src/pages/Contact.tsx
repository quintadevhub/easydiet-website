
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import DietPlanForm from "../components/DietPlanForm";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      <section className="relative px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-48">
        <div className="absolute right-[-100px] top-20 h-80 w-80 rounded-full bg-[#CBE5BA]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              <span className="h-px w-8 bg-[#075B32]" />
              Let's talk about your goals
            </p>

            <h1 className="text-5xl font-light leading-[1.08] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              Your journey.
              <br />
              Your goals.
              <br />
              <span className="font-serif italic text-[#075B32]">
                Your EasyDiet.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#17352A]/65 md:text-base">
              Looking to lose weight, gain weight or build healthier eating
              habits? Tell us what you are working towards, and take the first
              step towards a more personalised approach to nutrition.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="group inline-flex items-center gap-4 rounded-full bg-[#075B32] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#17352A]"
              >
                Get My Diet Plan
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <a
                href="https://wa.me/918923161712"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#17352A]/15 px-6 py-4 text-xs font-semibold transition hover:border-[#075B32] hover:text-[#075B32]"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[32px] bg-[#17352A] p-8 text-white sm:p-10 md:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#CBE5BA]">
                <Sparkles size={22} strokeWidth={1.4} />
              </div>

              <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CBE5BA]">
                A better place to begin
              </p>

              <h2 className="mt-4 text-3xl font-light leading-tight tracking-[-0.04em] sm:text-4xl">
                Tell us what
                <br />
                healthy means to you.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Every journey starts with understanding your goals and
                everyday routine. Share your details through our inquiry form
                to get started.
              </p>

              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-9 flex w-full items-center justify-between border-t border-white/15 pt-6 text-left text-sm transition hover:text-[#CBE5BA]"
              >
                <span>Start your inquiry</span>
                <ArrowUpRight size={19} />
              </button>
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-[#17352A]/5 bg-white px-5 py-4 shadow-xl shadow-[#17352A]/10 sm:right-8">
              <Clock size={19} className="text-[#075B32]" />
              <span className="text-xs text-[#17352A]/70">
                Start at your own pace
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#17352A]/10 bg-white/50 px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#075B32]">
              Weight goals
            </p>
            <h3 className="mt-3 text-xl font-light">Weight loss or gain</h3>
            <p className="mt-3 text-sm leading-7 text-[#17352A]/60">
              Share your goals and explore the nutrition approach most relevant
              to you.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#075B32]">
              Everyday habits
            </p>
            <h3 className="mt-3 text-xl font-light">Healthy lifestyle</h3>
            <p className="mt-3 text-sm leading-7 text-[#17352A]/60">
              Explore practical ways to make balanced eating part of your
              routine.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#075B32]">
              Direct contact
            </p>
            <h3 className="mt-3 text-xl font-light">Chat on WhatsApp</h3>
            <p className="mt-3 text-sm leading-7 text-[#17352A]/60">
              Reach EasyDiet directly through WhatsApp for an initial inquiry.
            </p>
            <a
              href="https://wa.me/918923161712"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#075B32]"
            >
              Start a conversation <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center md:px-12 md:py-20">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#075B32]">
          Explore EasyDiet
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-light tracking-[-0.04em] sm:text-4xl">
          Find an approach that fits your life.
        </h2>

        <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm">
          <Link to="/weight-loss" className="text-[#075B32] hover:underline">
            Weight Loss
          </Link>
          <Link to="/weight-gain" className="text-[#075B32] hover:underline">
            Weight Gain
          </Link>
          <Link
            to="/healthy-lifestyle"
            className="text-[#075B32] hover:underline"
          >
            Healthy Lifestyle
          </Link>
          <Link to="/faq" className="text-[#075B32] hover:underline">
            FAQs
          </Link>
        </div>
      </section>

      <DietPlanForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </div>
  );
}

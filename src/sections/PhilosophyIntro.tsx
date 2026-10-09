import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  HeartPulse,
  Leaf,
  Sparkles,
  Target,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    icon: Leaf,
    title: "Food first",
    text: "We believe better health begins with better everyday food. Your nutrition plan should be built around real meals, familiar ingredients and choices you can actually enjoy.",
  },
  {
    number: "02",
    icon: Target,
    title: "Personal by design",
    text: "There is no universal diet. Your goals, routine, preferences and lifestyle should shape the way your nutrition journey is designed.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Health over shortcuts",
    text: "We focus on sustainable progress instead of extreme restrictions, crash diets or short-term fixes that are difficult to maintain.",
  },
  {
    number: "04",
    icon: Utensils,
    title: "Made for real life",
    text: "Nutrition should fit around your life, not force your life around a diet. We keep recommendations practical, flexible and achievable.",
  },
];

const beliefs = [
  "Simple food choices can create meaningful change.",
  "Healthy eating should be enjoyable, not restrictive.",
  "Consistency matters more than perfection.",
  "Your nutrition should fit your lifestyle.",
  "Progress should be sustainable.",
  "Every person deserves a plan built around them.",
];

export default function PhilosophyIntro() {
  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[90vh] overflow-hidden bg-[#F4E5D0] px-6 pb-20 pt-32 md:px-10 md:pt-40 lg:px-16 lg:pt-44">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#B8D9A6]/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#CBE5BA]/30 blur-3xl" />

        <div className="pointer-events-none absolute right-[8%] top-[18%] hidden text-[15rem] font-light leading-none tracking-[-0.08em] text-[#075B32]/[0.035] lg:block">
          02
        </div>

        <div className="relative mx-auto grid max-w-[1500px] items-end gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          {/* LEFT */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                <span className="h-px w-10 bg-[#075B32]" />
                Our Philosophy
              </p>
            </motion.div>

            <div className="mt-8 overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="max-w-6xl text-[clamp(4rem,8vw,8.5rem)] font-light leading-[0.87] tracking-[-0.065em]"
              >
                Better food.
                <br />
                <span className="font-normal italic text-[#075B32]">
                  Better life.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 max-w-2xl text-lg leading-8 text-[#17352A]/65 md:text-xl md:leading-9"
            >
              We believe healthy eating should become a natural part of your
              life — not another difficult rule to follow.
            </motion.p>

            <motion.a
              href="#approach"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#17352A]/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-[#17352A] hover:text-white"
            >
              Explore our approach

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-y-1">
                <ArrowDownRight size={15} strokeWidth={1.5} />
              </span>
            </motion.a>
          </div>

          {/* RIGHT EDITORIAL ELEMENT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: 4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[230px_230px_45px_45px] bg-[#075B32]">

              {/* Inner frame */}

              <div className="absolute inset-7 rounded-[205px_205px_32px_32px] border border-white/15" />

              {/* Decorative circles */}

              <div className="absolute left-1/2 top-[28%] h-32 w-32 -translate-x-1/2 rounded-full border border-[#B8D9A6]/30" />

              <div className="absolute left-1/2 top-[28%] h-20 w-20 -translate-x-1/2 rounded-full bg-[#B8D9A6]/10" />

              {/* Main content */}

              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">

                <Leaf
                  size={48}
                  strokeWidth={1.1}
                  className="text-[#B8D9A6]"
                />

                <p className="mt-9 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                  Better Food
                </p>

                <p className="mt-1 text-4xl font-medium italic tracking-[-0.04em] text-[#CBE5BA] md:text-5xl">
                  Healthy Life
                </p>

                <div className="mt-9 h-px w-14 bg-white/25" />

                <p className="mt-5 max-w-[220px] text-sm leading-6 text-white/55">
                  Nutrition designed around the person, not just the plate.
                </p>
              </div>

              {/* Bottom label */}

              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                <span>Nutrition</span>
                <span>Wellness</span>
                <span>EasyDiet</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        id="approach"
        className="bg-[#F7F4EC] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-14 lg:grid-cols-[0.3fr_1fr] lg:gap-24">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                The EasyDiet Approach
              </p>

              <div className="mt-6 hidden h-24 w-px bg-[#075B32]/20 lg:block" />
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
                  className="max-w-[1050px] text-5xl font-light leading-[1.01] tracking-[-0.045em] md:text-7xl lg:text-[6.5rem]"
                >
                  Healthy eating should
                  <br />
                  <span className="font-normal italic text-[#075B32]">
                    fit into your life.
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
                }}
                className="mt-10 max-w-[720px] text-lg leading-8 text-[#17352A]/60 md:text-xl md:leading-9"
              >
                We believe nutrition works best when it is built around you —
                your goals, your routine, your preferences and the way you
                actually live.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                }}
                className="mt-14 grid border-t border-[#17352A]/15 pt-7 sm:grid-cols-3 sm:gap-10"
              >
                <div>
                  <span className="text-[12px] font-semibold tracking-[0.18em] text-[#075B32]">
                    01
                  </span>

                  <p className="mt-3 text-base leading-7 text-[#17352A]/65">
                    Personalised around you
                  </p>
                </div>

                <div>
                  <span className="text-[12px] font-semibold tracking-[0.18em] text-[#075B32]">
                    02
                  </span>

                  <p className="mt-3 text-base leading-7 text-[#17352A]/65">
                    Practical for everyday life
                  </p>
                </div>

                <div>
                  <span className="text-[12px] font-semibold tracking-[0.18em] text-[#075B32]">
                    03
                  </span>

                  <p className="mt-3 text-base leading-7 text-[#17352A]/65">
                    Built for lasting habits
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="bg-[#17352A] px-6 py-28 text-white md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-20 grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B8D9A6]">
              What guides us
            </p>

            <h2 className="max-w-5xl text-4xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Four principles behind every{" "}
              <span className="font-normal italic text-[#B8D9A6]">
                EasyDiet plan.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className={`group border-b border-white/15 py-12 md:px-8 md:py-14 ${
                    index % 2 === 0 ? "md:border-r" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[12px] tracking-[0.18em] text-white/35">
                      {item.number}
                    </span>

                    <Icon
                      size={30}
                      strokeWidth={1.2}
                      className="text-[#B8D9A6] transition-transform duration-500 group-hover:rotate-12"
                    />
                  </div>

                  <h3 className="mt-14 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOD FIRST
      ===================================================== */}

      <section className="bg-[#F8EFE3] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-2 lg:gap-28">

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-[600px] rounded-full bg-[#B8D9A6] p-8 md:p-12">

              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-[#17352A]/15 bg-[#F7F4EC] px-8 text-center">

                <Sparkles
                  size={42}
                  strokeWidth={1.1}
                  className="text-[#075B32]"
                />

                <p className="mt-7 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                  Real food.
                </p>

                <p className="mt-2 text-4xl font-medium italic tracking-[-0.04em] text-[#075B32] md:text-5xl">
                  Real life.
                </p>

                <p className="mt-7 max-w-xs text-sm leading-6 text-[#17352A]/60">
                  Nutrition designed around foods you can actually enjoy,
                  prepare and continue eating.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]"
            >
              Food first
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-7 text-4xl font-light leading-[1.02] tracking-[-0.045em] md:text-6xl"
            >
              Healthy eating doesn't have to feel like a{" "}
              <span className="font-normal italic text-[#075B32]">
                punishment.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/65"
            >
              We don't believe that eating well means removing everything you
              love. The goal is to understand your food, improve your choices
              and create a routine that works for you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-8 text-[#17352A]/65"
            >
              From everyday meals to busy workdays, social occasions and
              changing routines, your nutrition plan should be flexible enough
              to move with you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BELIEFS
      ===================================================== */}

      <section className="bg-[#F7F4EC] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                What we believe
              </p>

              <h2 className="mt-7 text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Small changes.
                <br />
                <span className="font-normal italic text-[#075B32]">
                  Lasting habits.
                </span>
              </h2>
            </div>

            <div className="border-t border-[#17352A]/15">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={belief}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="flex items-center gap-5 border-b border-[#17352A]/15 py-6"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#075B32] text-white">
                    <Check size={15} strokeWidth={2} />
                  </span>

                  <p className="text-lg text-[#17352A]/75 md:text-xl">
                    {belief}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSONALISATION
      ===================================================== */}

      <section className="bg-[#CBE5BA] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.7fr]">

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#075B32]">
                Personalisation matters
              </p>

              <h2 className="mt-7 max-w-5xl text-4xl font-light leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Your body.
                <br />
                Your routine.
                <br />
                <span className="font-normal italic text-[#075B32]">
                  Your plan.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#17352A]/70">
                Your nutrition journey is personal. That's why EasyDiet starts
                by understanding you — your goals, preferences, habits and
                everyday routine — before recommending a path forward.
              </p>

              <Link
                to="/weight-loss"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#17352A] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#075B32]"
              >
                Explore our programs

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="bg-[#075B32] px-6 py-28 text-white md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1150px] text-center">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B8D9A6]"
          >
            Better Food — Healthy Life
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-10 text-4xl font-light leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl"
          >
            Healthy eating isn't about being perfect.
            <br />
            <span className="font-normal italic text-[#CBE5BA]">
              It's about finding what works for you.
            </span>
          </motion.blockquote>

          <div className="mx-auto mt-12 h-px w-16 bg-white/30" />

          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/45">
            The EasyDiet philosophy
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#F4E5D0] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">

          <div className="relative overflow-hidden rounded-[40px] bg-[#17352A] px-7 py-16 text-white md:px-14 md:py-20 lg:px-20 lg:py-24">

            {/* Decorative shapes */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#075B32] opacity-70 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#B8D9A6]/20 blur-3xl" />

            <div className="relative grid items-end gap-12 lg:grid-cols-[1fr_auto]">

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B8D9A6]">
                  Your next step
                </p>

                <h2 className="mt-7 max-w-4xl text-4xl font-light leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                  Ready to make healthy eating{" "}
                  <span className="font-normal italic text-[#B8D9A6]">
                    part of your life?
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
                  Tell us a little about yourself and your goals. Start your
                  EasyDiet journey with a nutrition approach designed around
                  you.
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
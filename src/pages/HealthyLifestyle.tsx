import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Heart,
  Leaf,
  Moon,
  Sparkles,
  Target,
  Utensils,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: Utensils,
    number: "01",
    title: "Eat with intention",
    text: "Build a balanced relationship with food by choosing nourishing meals that support your energy, health and everyday routine.",
  },
  {
    icon: Activity,
    number: "02",
    title: "Move your body",
    text: "Regular movement is an important part of a healthy lifestyle. Find activities that feel realistic and enjoyable for you.",
  },
  {
    icon: Moon,
    number: "03",
    title: "Prioritise recovery",
    text: "Good nutrition works alongside quality sleep, recovery and enough time for your body and mind to recharge.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Create sustainable habits",
    text: "The best lifestyle is one you can continue. Small, consistent changes can become meaningful long-term habits.",
  },
];

const benefits = [
  "Balanced everyday nutrition",
  "Better meal planning and food choices",
  "Practical habits for your routine",
  "Support for energy and wellbeing",
  "Healthy relationship with food",
  "Long-term lifestyle guidance",
];

const steps = [
  {
    number: "01",
    title: "Understand your routine",
    text: "We begin by understanding your current food habits, schedule, activity and lifestyle goals.",
  },
  {
    number: "02",
    title: "Identify what needs to change",
    text: "Together, we focus on realistic areas that can improve your nutrition and everyday wellbeing.",
  },
  {
    number: "03",
    title: "Build better habits",
    text: "Your approach is designed around simple, practical actions that can fit naturally into your life.",
  },
  {
    number: "04",
    title: "Keep progressing",
    text: "Healthy living is a continuous journey. Your habits can evolve as your lifestyle and goals change.",
  },
];

const lifestyleAreas = [
  {
    title: "Nutrition",
    text: "Balanced meals, better food choices and a sustainable eating routine.",
  },
  {
    title: "Movement",
    text: "Encouraging regular physical activity that works for your lifestyle.",
  },
  {
    title: "Sleep",
    text: "Supporting a routine that gives your body enough time to rest and recover.",
  },
  {
    title: "Mindset",
    text: "Creating a healthier and more positive relationship with food and wellbeing.",
  },
];

const faqs = [
  {
    question: "What does a healthy lifestyle actually mean?",
    answer:
      "A healthy lifestyle is not one strict routine. It is a combination of balanced nutrition, regular movement, sufficient rest and sustainable habits that support your overall wellbeing.",
  },
  {
    question: "Do I need to follow a strict diet?",
    answer:
      "No. A sustainable lifestyle does not need to be built around unnecessary restrictions. The focus is on balanced choices that you can maintain consistently.",
  },
  {
    question: "Can I follow this program with a busy schedule?",
    answer:
      "Yes. The approach is designed around real-life routines. The goal is to find practical habits that fit your work, studies, family and daily responsibilities.",
  },
  {
    question: "Is this program only for weight management?",
    answer:
      "No. Healthy Lifestyle is broader than weight. It focuses on nutrition, movement, recovery, habits and overall wellbeing.",
  },
  {
    question: "Will the approach be personalised?",
    answer:
      "Yes. Your routine, food preferences, lifestyle and personal goals are important when creating a practical approach for you.",
  },
];

export default function HealthyLifestyle() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918923161712?text=Hi%20EasyDiet%2C%20I%20want%20to%20know%20more%20about%20the%20Healthy%20Lifestyle%20program.",
      "_blank"
    );
  };

  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">

      {/* HERO */}
      <section className="relative min-h-[88vh] bg-[#F4E5D0] px-6 pb-20 pt-32 md:px-10 lg:px-16 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                Healthy Lifestyle
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6.3rem]">
                Feel better.
                <br />
                <span className="text-[#075B32]">
                  Live healthier.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/70 md:text-xl">
                A healthy lifestyle is not about being perfect. It is about
                creating everyday habits that help you feel stronger, more
                energetic and more balanced.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#075B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#064b2a]"
                >
                  Start My Journey
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#17352A]/20 px-7 py-4 text-sm font-semibold transition hover:bg-white/40"
                >
                  Explore the approach
                  <ArrowDownRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#B8D9A6]">

                <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-[#075B32]/20" />

                <div className="absolute right-10 top-16 h-20 w-20 rounded-full bg-[#F7F4EC]/50" />

                <div className="absolute inset-0 flex items-end p-8 md:p-10">
                  <div className="max-w-sm rounded-[1.5rem] bg-[#F7F4EC]/90 p-6 backdrop-blur-md">

                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#075B32] text-white">
                      <Leaf size={20} />
                    </div>

                    <p className="text-2xl font-medium leading-tight">
                      Small habits.
                      <br />
                      Meaningful change.
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[#17352A]/65">
                      Build a lifestyle that supports your health today and
                      continues to work for you tomorrow.
                    </p>

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="approach"
        className="bg-[#F7F4EC] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                Our approach
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Healthy living should feel
                <span className="text-[#075B32]"> achievable.</span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#17352A]/65">
                There is no single definition of a healthy lifestyle. Your
                needs are different from someone else's. EasyDiet focuses on
                practical improvements across nutrition, movement, recovery
                and everyday habits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#17352A] px-6 py-24 text-[#F7F4EC] md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              The EasyDiet difference
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Four foundations
              <br />
              of better living.
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  whileHover={{ y: -4 }}
                  className="border-b border-white/15 p-8 md:border-r md:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between gap-6">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                      <Icon size={20} />
                    </div>

                    <span className="text-sm text-white/40">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-12 text-2xl font-medium md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F4E5D0] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                What you get
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Better habits for
                <span className="text-[#075B32]"> everyday life.</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#17352A]/65">
                The goal is not to completely change your life overnight.
                It is to make healthier choices easier to understand and
                easier to maintain.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[1.5rem] border border-[#17352A]/10 bg-[#F7F4EC]/60 p-6"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#075B32] text-white">
                    <Check size={18} />
                  </div>

                  <p className="text-base font-medium leading-6">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* LIFESTYLE AREAS */}
      <section className="bg-[#F7F4EC] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Your whole lifestyle
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Health is bigger than
                <span className="text-[#075B32]"> food.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#17352A]/60">
                Nutrition is an important foundation, but your overall
                wellbeing is shaped by many everyday choices.
              </p>
            </div>

          </div>

          <div className="grid border-t border-[#17352A]/15 md:grid-cols-2">

            {lifestyleAreas.map((area, index) => (
              <div
                key={area.title}
                className="border-b border-[#17352A]/15 p-8 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#075B32]">
                    0{index + 1}
                  </span>

                  <ArrowDownRight
                    size={20}
                    className="text-[#17352A]/40"
                  />
                </div>

                <h3 className="mt-14 text-3xl font-medium">
                  {area.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-[#17352A]/60">
                  {area.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#B8D9A6] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              How it works
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Simple steps.
                <br />
                <span className="text-[#075B32]">
                  Sustainable change.
                </span>
              </h2>
            </div>

          </div>

          <div className="grid border-t border-[#17352A]/15 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="border-b border-[#17352A]/15 p-7 md:border-r md:p-8 lg:border-b-0 lg:p-9"
              >
                <span className="text-sm font-medium text-[#075B32]">
                  {step.number}
                </span>

                <h3 className="mt-16 text-2xl font-medium leading-tight">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#17352A]/60">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MINDSET */}
      <section className="bg-[#F7F4EC] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1200px] text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#075B32] text-white">
            <Target size={22} />
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
            The mindset
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-7xl">
            You do not need a perfect routine.
            <br />
            <span className="text-[#075B32]">
              You need one you can keep.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#17352A]/60">
            Sustainable health comes from consistency, not perfection. The
            right approach is one that works alongside your real life.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4E5D0] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1100px]">

          <div className="mb-14 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Questions
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Healthy lifestyle,
              <br />
              <span className="text-[#075B32]">made simple.</span>
            </h2>

          </div>

          <div className="divide-y divide-[#17352A]/15 border-y border-[#17352A]/15">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg font-medium md:text-xl">

                  <span>{faq.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#17352A]/20 text-[#075B32] transition group-open:rotate-45">
                    <span className="text-xl font-light">
                      +
                    </span>
                  </span>

                </summary>

                <p className="mt-5 max-w-3xl pr-12 text-base leading-7 text-[#17352A]/60">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#075B32] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/20">
                <Sparkles size={22} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
                Your next step
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-7xl">
                Ready to make
                <span className="text-[#B8D9A6]">
                  {" "}health a habit?
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
                Tell us about your lifestyle and discover a healthier,
                more practical approach designed around your everyday life.
              </p>

            </div>

            <button
              type="button"
              onClick={openWhatsApp}
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#F7F4EC] px-7 py-4 text-sm font-semibold text-[#17352A] transition hover:bg-white"
            >
              Get Started

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </div>

        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="bg-[#17352A] px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowRight
              className="rotate-180"
              size={16}
            />
            Back to Programs
          </Link>

          <div className="text-sm text-white/40">
            EasyDiet — Better Food · Healthy Life
          </div>

        </div>
      </section>

    </main>
  );
}
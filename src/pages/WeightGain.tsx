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
  Dumbbell,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: Target,
    number: "01",
    title: "A goal built around you",
    text: "Healthy weight gain looks different for everyone. Your plan should reflect your body, routine, preferences and personal goals.",
  },
  {
    icon: Utensils,
    number: "02",
    title: "More nutrition, not just more food",
    text: "We focus on nutrient-dense meals that help you increase your intake without depending on excessive processed or empty-calorie foods.",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Strength & nourishment",
    text: "The aim is to support healthy weight gain while giving your body the nutrition it needs for strength, energy and recovery.",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Habits that last",
    text: "A sustainable routine matters more than a short-term increase on the weighing scale. We help you build habits you can actually maintain.",
  },
];

const benefits = [
  "Personalised nutrition guidance",
  "Calorie and meal structure based on your needs",
  "Balanced protein, carbohydrates and healthy fats",
  "Practical meal options for your daily routine",
  "Support for consistent eating habits",
  "Progress-focused approach without extreme diets",
];

const steps = [
  {
    number: "01",
    title: "Understand your body",
    text: "We start by understanding your current lifestyle, food habits, routine and weight-gain goal.",
  },
  {
    number: "02",
    title: "Build your nutrition plan",
    text: "Your food strategy is structured around balanced nutrition, appropriate portions and foods you can enjoy.",
  },
  {
    number: "03",
    title: "Make it practical",
    text: "Your plan is designed to fit into real life — work, studies, family meals and your everyday schedule.",
  },
  {
    number: "04",
    title: "Track & improve",
    text: "As your routine progresses, your approach can evolve with your changing needs and goals.",
  },
];

const faqs = [
  {
    question: "Is healthy weight gain just about eating more?",
    answer:
      "Not necessarily. Healthy weight gain is about improving overall nutrition and creating an appropriate energy intake with balanced meals, rather than simply increasing the amount of food you eat.",
  },
  {
    question: "Can I gain weight without eating junk food?",
    answer:
      "Yes. A healthy approach can include nutrient-dense foods such as dairy, grains, pulses, nuts, seeds, fruits, vegetables and other foods that fit your dietary preferences.",
  },
  {
    question: "Will my diet plan be personalised?",
    answer:
      "Yes. EasyDiet is designed around your individual goal, food preferences, lifestyle and routine rather than providing the same plan to everyone.",
  },
  {
    question: "How long does healthy weight gain take?",
    answer:
      "The pace can vary from person to person. Consistency, nutrition, activity, sleep and your individual starting point can all influence progress.",
  },
  {
    question: "Can I follow the plan with a busy schedule?",
    answer:
      "Yes. The goal is to make your nutrition practical. Meal choices and timing can be structured around your daily routine.",
  },
];

export default function WeightGain() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918923161712?text=Hi%20EasyDiet%2C%20I%20want%20to%20know%20more%20about%20the%20Healthy%20Weight%20Gain%20program.",
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
                Healthy Weight Gain
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6.3rem]">
                Gain weight.
                <br />
                <span className="text-[#075B32]">
                  Build better health.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/70 md:text-xl">
                Healthy weight gain is about giving your body the nutrition,
                consistency and nourishment it needs to become stronger.
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
                <div className="absolute inset-0 flex items-end p-8 md:p-10">
                  <div className="max-w-sm rounded-[1.5rem] bg-[#F7F4EC]/90 p-6 backdrop-blur-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#075B32] text-white">
                      <Dumbbell size={20} />
                    </div>

                    <p className="text-2xl font-medium leading-tight">
                      Nourish your body.
                      <br />
                      Build your strength.
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[#17352A]/65">
                      A balanced approach to gaining weight with better
                      nutrition and sustainable habits.
                    </p>
                  </div>
                </div>

                <div className="absolute right-8 top-8 h-32 w-32 rounded-full border border-[#075B32]/20" />
                <div className="absolute right-16 top-16 h-16 w-16 rounded-full bg-[#F7F4EC]/40" />
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
                Weight gain should be about
                <span className="text-[#075B32]"> health first.</span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#17352A]/65">
                Your body needs more than calories. It needs quality
                nutrition, enough protein, balanced meals, energy and
                consistency. EasyDiet focuses on creating a practical food
                routine that supports your individual weight-gain journey.
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
              A smarter way to
              <br />
              gain weight.
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  whileHover={{ y: -4 }}
                  className="border-b border-white/15 p-8 md:nth-[odd]:border-r md:p-10 lg:p-12"
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

      {/* WHAT YOU GET */}
      <section className="bg-[#F4E5D0] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                What you get
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Nutrition that works
                <span className="text-[#075B32]"> with your life.</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#17352A]/65">
                Instead of forcing you into a rigid routine, EasyDiet focuses
                on making healthy weight gain practical and sustainable.
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

      {/* HOW IT WORKS */}
      <section className="bg-[#F7F4EC] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              How it works
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                From understanding
                <br />
                <span className="text-[#075B32]">to progress.</span>
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

      {/* FOOD PHILOSOPHY */}
      <section className="bg-[#B8D9A6] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#075B32] text-white">
                <Utensils size={22} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                Food philosophy
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Eat more.
                <br />
                <span className="text-[#075B32]">Eat better.</span>
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-[#17352A]/75">
                Healthy weight gain does not mean filling your plate with
                whatever is available. It means choosing foods that provide
                meaningful nutrition and making them a consistent part of
                your routine.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Protein-rich foods",
                  "Healthy fats",
                  "Whole grains",
                  "Dairy & alternatives",
                  "Fruits & vegetables",
                  "Energy-dense meals",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-[#17352A]/15 pb-4"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#075B32]" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F4EC] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1100px]">

          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Questions
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Healthy weight gain,
              <br />
              <span className="text-[#075B32]">explained.</span>
            </h2>
          </div>

          <div className="divide-y divide-[#17352A]/15 border-y border-[#17352A]/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg font-medium md:text-xl">
                  <span>{faq.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#17352A]/20 text-[#075B32] transition group-open:rotate-45">
                    <span className="text-xl font-light">+</span>
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
                Ready to build a healthier
                <span className="text-[#B8D9A6]"> you?</span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
                Tell us about your goal and discover an approach to healthy
                weight gain that fits your life.
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
            <ArrowRight className="rotate-180" size={16} />
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
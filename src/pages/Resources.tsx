
import { motion } from "framer-motion";

import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Heart,
  Leaf,
  ListChecks,
  MessageCircle,
  Salad,
} from "lucide-react";

import { Link } from "react-router-dom";

const resources = [
  {
    number: "01",
    category: "Meal Planning",
    title: "Weekly Meal Planner",
    description:
      "Organise your meals, plan ahead and create a more consistent eating routine throughout the week.",
    format: "Planning resource",
    icon: CalendarDays,
    color: "bg-[#B8D9A6]",
  },
  {
    number: "02",
    category: "Nutrition Basics",
    title: "Balanced Plate Guide",
    description:
      "Explore the role of vegetables, protein sources, grains and variety in balanced everyday meals.",
    format: "Nutrition guide",
    icon: Salad,
    color: "bg-[#F4E5D0]",
  },
  {
    number: "03",
    category: "Healthy Habits",
    title: "Daily Habit Tracker",
    description:
      "Keep track of everyday routines such as meal planning, movement, sleep and hydration.",
    format: "Habit-building tool",
    icon: ListChecks,
    color: "bg-[#D9E7DC]",
  },
  {
    number: "04",
    category: "Food Choices",
    title: "Mindful Eating Checklist",
    description:
      "Use simple reflection prompts to become more aware of your eating habits without pursuing perfection.",
    format: "Practical checklist",
    icon: ClipboardList,
    color: "bg-[#E8DDCF]",
  },
  {
    number: "05",
    category: "Healthy Living",
    title: "Everyday Wellness Guide",
    description:
      "Explore how food, physical activity, sleep and consistency can contribute to everyday wellbeing.",
    format: "Lifestyle resource",
    icon: Heart,
    color: "bg-[#CBE5BA]",
  },
  {
    number: "06",
    category: "Nutrition Education",
    title: "Nutrition Learning Library",
    description:
      "Discover introductory information about food choices, balanced eating and personal nutrition goals.",
    format: "Learning resource",
    icon: BookOpen,
    color: "bg-[#E7E9D8]",
  },
];

const faqs = [
  {
    question: "Are these resources free?",
    answer:
      "The resource cards introduce the materials planned for the EasyDiet library. Availability and any applicable charges will be confirmed when the actual resource files are published.",
  },
  {
    question: "Can these resources replace a personalised diet plan?",
    answer:
      "No. These materials are intended for general education and planning. They do not replace individualised nutrition advice or medical care when needed.",
  },
  {
    question: "How do I choose the right nutrition resource?",
    answer:
      "Start with your immediate need. Choose meal planning for organisation, the balanced plate guide for nutrition basics, or the habit tracker for building consistency.",
  },
  {
    question: "Can I get help choosing an EasyDiet program?",
    answer:
      "Yes. Contact EasyDiet through WhatsApp to discuss your goals and the available weight-loss, weight-gain and healthy-lifestyle programs.",
  },
];

const programs = [
  {
    title: "Healthy Weight Loss",
    description:
      "Explore balanced approaches to your weight-management goals.",
    href: "/weight-loss",
  },
  {
    title: "Healthy Weight Gain",
    description:
      "Learn about nutrition strategies for your weight-gain journey.",
    href: "/weight-gain",
  },
  {
    title: "Healthy Lifestyle",
    description:
      "Build realistic routines that support everyday wellbeing.",
    href: "/healthy-lifestyle",
  },
];

export default function Resources() {
  const contactWhatsApp = () => {
    window.open(
      "https://wa.me/918923161712?text=Hi%20EasyDiet%2C%20I%20would%20like%20to%20know%20more%20about%20your%20nutrition%20resources.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      {/* HERO */}
      <section className="bg-[#F4E5D0] px-6 pb-20 pt-32 md:px-10 lg:px-16 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                The EasyDiet Resource Centre
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6rem]">
                Simple tools.
                <br />
                <span className="text-[#075B32]">
                  Healthier habits.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/70 md:text-xl">
                Explore practical planning tools, nutrition
                education and everyday resources designed to
                help you make more informed lifestyle choices.
              </p>

              <a
                href="#resource-library"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#075B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#064b2a]"
              >
                Explore resources
                <ArrowDownRight size={18} />
              </a>

              <p className="mt-5 text-xs leading-6 text-[#17352A]/50">
                Educational materials for everyday use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-[#B8D9A6] p-8 md:p-12">
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#075B32]/20" />
                <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full border border-[#075B32]/20" />

                <div className="relative rounded-[1.5rem] bg-[#F7F4EC] p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#075B32] text-white">
                      <Leaf size={22} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#075B32]">
                      Your wellness toolkit
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-medium leading-tight md:text-4xl">
                    Small steps.
                    <br />
                    Meaningful habits.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#17352A]/60">
                    Make everyday nutrition easier to plan,
                    understand and practise.
                  </p>

                  <div className="mt-8 space-y-4 border-t border-[#17352A]/10 pt-6">
                    {[
                      "Plan your meals",
                      "Learn about balanced nutrition",
                      "Build consistent habits",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={19}
                          className="shrink-0 text-[#075B32]"
                        />
                        <span className="text-sm font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
            Knowledge into action
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Make healthy choices
              <span className="text-[#075B32]">
                {" "}more practical.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#17352A]/65">
              Healthy living is not about getting everything
              right. It is about finding useful information,
              creating realistic routines and making changes
              that fit your everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCE LIBRARY */}
      <section
        id="resource-library"
        className="bg-white/40 px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Explore the collection
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Resources for everyday wellbeing.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#17352A]/60">
              Find a starting point for meal planning, nutrition
              learning and healthier everyday habits.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.article
                  key={resource.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="flex flex-col overflow-hidden rounded-[1.5rem] border border-[#17352A]/10 bg-[#F7F4EC] transition hover:-translate-y-1"
                >
                  <div
                    className={`flex min-h-44 items-center justify-between p-7 ${resource.color}`}
                  >
                    <span className="text-sm font-medium text-[#17352A]/60">
                      RESOURCE / {resource.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F4EC]/80 text-[#075B32]">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#075B32]">
                      {resource.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-medium leading-tight">
                      {resource.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#17352A]/60">
                      {resource.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-3 border-t border-[#17352A]/10 pt-5">
                      <span className="text-xs text-[#17352A]/50">
                        {resource.format}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#075B32]">
                        <BookOpen size={16} />
                        Preview
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-[#17352A]/10 bg-[#F4E5D0]/60 p-5 md:p-6">
            <p className="text-sm leading-7 text-[#17352A]/65">
              <strong className="text-[#17352A]">
                Resource availability:
              </strong>{" "}
              These cards currently introduce planned resources.
              Actual PDF downloads and interactive tools can be
              connected when their files or functionality are
              ready.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                Start where you are
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
                A simple way to get started.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#17352A]/65">
                You do not need to change everything at once.
                Choose one area, explore the relevant material
                and build from there.
              </p>

              <Link
                to="/guides"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B32] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#064b2a]"
              >
                Explore nutrition guides
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="space-y-0">
              {[
                {
                  number: "01",
                  title: "Choose your focus",
                  text: "Start with meal planning, nutrition basics or daily habits.",
                },
                {
                  number: "02",
                  title: "Keep it realistic",
                  text: "Select ideas that fit your schedule, preferences and circumstances.",
                },
                {
                  number: "03",
                  title: "Build consistency",
                  text: "Focus on practical routines rather than expecting instant results.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[52px_1fr] gap-5 border-t border-[#17352A]/15 py-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B8D9A6]/60 text-sm font-semibold text-[#075B32]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#17352A]/60">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-[#17352A] px-6 py-20 text-[#F7F4EC] md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              Personalise your next step
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Find a program that fits your goals.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/60">
              General resources can help you learn. Explore
              our programs to find the right direction for your
              individual goals.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {programs.map((program, index) => (
              <Link
                key={program.href}
                to={program.href}
                className="group rounded-[1.5rem] border border-white/15 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.08] md:p-8"
              >
                <span className="text-sm text-[#B8D9A6]">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-2xl font-medium">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {program.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#B8D9A6]">
                  Explore program
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#B8D9A6] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Frequently asked questions
            </p>

            <h2 className="mt-5 text-4xl font-medium md:text-5xl">
              About our resources.
            </h2>
          </div>

          <div className="divide-y divide-[#17352A]/15 border-y border-[#17352A]/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium md:text-xl">
                  <span>{faq.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#17352A]/20 text-[#075B32] transition group-open:rotate-45">
                    <span className="text-xl font-light">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl pr-12 text-base leading-7 text-[#17352A]/65">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-[#075B32] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              Need a little guidance?
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-7xl">
              Your next step
              <span className="text-[#B8D9A6]">
                {" "}starts here.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Talk to EasyDiet about your nutrition goals and
              explore the available programs.
            </p>
          </div>

          <button
            type="button"
            onClick={contactWhatsApp}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#F7F4EC] px-7 py-4 text-sm font-semibold text-[#17352A] transition hover:bg-white"
          >
            <MessageCircle size={18} />
            Talk to EasyDiet
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="bg-[#17352A] px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowRight
              className="rotate-180"
              size={16}
            />
            Back to Nutrition Guides
          </Link>

          <span className="text-sm text-white/40">
            EasyDiet — Better Food · Healthy Life
          </span>
        </div>
      </section>
    </main>
  );
}

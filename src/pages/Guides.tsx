
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Leaf,
  Salad,
  Sparkles,
  Utensils,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const guides = [
  {
    number: "01",
    category: "Nutrition Basics",
    title: "Building a balanced plate",
    description:
      "Understand how vegetables, protein sources, grains and other foods can fit into balanced everyday meals.",
    readTime: "5 min read",
    icon: Salad,
    color: "bg-[#B8D9A6]",
  },
  {
    number: "02",
    category: "Healthy Eating",
    title: "Making better food choices",
    description:
      "Learn practical ways to choose nourishing foods without making eating unnecessarily complicated.",
    readTime: "4 min read",
    icon: Utensils,
    color: "bg-[#F4E5D0]",
  },
  {
    number: "03",
    category: "Everyday Habits",
    title: "Creating a consistent routine",
    description:
      "Explore meal planning, regular eating habits and small changes that can work with your daily schedule.",
    readTime: "6 min read",
    icon: Clock3,
    color: "bg-[#D9E7DC]",
  },
  {
    number: "04",
    category: "Mindful Living",
    title: "A healthier relationship with food",
    description:
      "Discover ways to approach food with flexibility, awareness and less pressure to eat perfectly.",
    readTime: "5 min read",
    icon: Heart,
    color: "bg-[#E8DDCF]",
  },
  {
    number: "05",
    category: "Weight Management",
    title: "Understanding your nutrition goals",
    description:
      "Explore how balanced nutrition and consistent habits can support individual weight-management goals.",
    readTime: "7 min read",
    icon: Sparkles,
    color: "bg-[#CBE5BA]",
  },
  {
    number: "06",
    category: "Lifestyle",
    title: "Nutrition beyond your plate",
    description:
      "Understand how food choices work alongside movement, sleep, recovery and everyday wellbeing.",
    readTime: "5 min read",
    icon: Leaf,
    color: "bg-[#E7E9D8]",
  },
];

const categories = [
  "All Guides",
  "Nutrition Basics",
  "Healthy Eating",
  "Everyday Habits",
  "Mindful Living",
  "Weight Management",
  "Lifestyle",
];

const faqs = [
  {
    question: "Who are these nutrition guides for?",
    answer:
      "These guides are intended for people who want to understand everyday nutrition and build more balanced eating habits. They provide general educational information and are not a substitute for individual medical advice.",
  },
  {
    question:
      "Can I use these guides instead of a personalised diet plan?",
    answer:
      "The guides offer general education. Your individual nutrition needs may differ, so personalised guidance may be appropriate depending on your goals and circumstances.",
  },
  {
    question: "Do I need to stop eating my favourite foods?",
    answer:
      "Healthy eating does not automatically mean eliminating favourite foods. The aim is to understand balance, variety and habits that are practical for you.",
  },
  {
    question: "How do I choose the right EasyDiet program?",
    answer:
      "Explore the weight-loss, weight-gain and healthy-lifestyle programs. Choose the option that best matches your goals, then contact EasyDiet to discuss the next steps.",
  },
];

const principles = [
  "Choose balance over extremes.",
  "Build habits instead of chasing perfection.",
  "Make room for individual preferences.",
  "Seek professional advice when needed.",
];

const programs = [
  {
    title: "Healthy Weight Loss",
    text: "Explore a balanced approach to your weight-management goals.",
    href: "/weight-loss",
  },
  {
    title: "Healthy Weight Gain",
    text: "Learn about nutrition strategies for your weight-gain journey.",
    href: "/weight-gain",
  },
  {
    title: "Healthy Lifestyle",
    text: "Build everyday habits that support your overall wellbeing.",
    href: "/healthy-lifestyle",
  },
];

export default function Guides() {
  const [activeCategory, setActiveCategory] =
    useState("All Guides");

  const filteredGuides =
    activeCategory === "All Guides"
      ? guides
      : guides.filter(
          (guide) => guide.category === activeCategory
        );

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918923161712?text=Hi%20EasyDiet%2C%20I%20would%20like%20nutrition%20guidance.",
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
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                The EasyDiet Journal
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6.2rem]">
                Knowledge for
                <br />
                <span className="text-[#075B32]">
                  healthier living.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#17352A]/70 md:text-xl">
                Explore practical nutrition information,
                thoughtful food guidance and everyday ideas to
                help you make more informed choices for your
                wellbeing.
              </p>

              <a
                href="#all-guides"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#075B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#064b2a]"
              >
                Explore the guides
                <ArrowDownRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative flex aspect-[4/3.7] items-center justify-center overflow-hidden rounded-[2rem] bg-[#B8D9A6] p-8 md:p-12">
                <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-[#075B32]/20" />
                <div className="absolute bottom-8 right-8 h-36 w-36 rounded-full border border-[#075B32]/20" />

                <div className="relative w-full max-w-sm rounded-[1.8rem] bg-[#F7F4EC] p-7 shadow-sm md:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#075B32] text-white">
                    <BookOpen size={22} />
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#075B32]">
                    Read · Learn · Grow
                  </p>

                  <h2 className="mt-4 text-3xl font-medium leading-tight">
                    Small lessons.
                    <br />
                    Better choices.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#17352A]/60">
                    Make nutrition easier to understand, one idea
                    at a time.
                  </p>

                  <div className="mt-7 flex items-center gap-3 border-t border-[#17352A]/10 pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B8D9A6]/60 text-[#075B32]">
                      <Check size={17} />
                    </div>
                    <p className="text-sm font-medium">
                      Practical everyday guidance
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
            Learn at your own pace
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Better information.
              <span className="text-[#075B32]">
                {" "}Better decisions.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#17352A]/65">
              Nutrition can feel overwhelming when advice is
              confusing or contradictory. Our guide collection
              is designed to make common topics easier to
              explore and apply to everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDE LIBRARY */}
      <section
        id="all-guides"
        className="bg-white/40 px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Explore the library
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Find what you need.
            </h2>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mb-12 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-[#075B32] bg-[#075B32] text-white"
                    : "border-[#17352A]/15 bg-transparent text-[#17352A]/70 hover:border-[#075B32]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GUIDE CARDS */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide, index) => {
              const Icon = guide.icon;

              return (
                <motion.article
                  key={guide.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#17352A]/10 bg-[#F7F4EC] transition hover:-translate-y-1"
                >
                  <div
                    className={`flex min-h-48 items-center justify-between p-7 ${guide.color}`}
                  >
                    <span className="text-sm font-medium text-[#17352A]/65">
                      GUIDE / {guide.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F4EC]/80 text-[#075B32]">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#075B32]">
                      {guide.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-medium leading-tight">
                      {guide.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#17352A]/60">
                      {guide.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-[#17352A]/10 pt-5">
                      <span className="text-xs text-[#17352A]/50">
                        {guide.readTime}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#075B32]">
                        Explore topic
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-8 text-sm leading-7 text-[#17352A]/50">
            These cards introduce nutrition topics. Detailed
            individual articles can be added as separate pages
            as the library grows.
          </p>
        </div>
      </section>

      {/* EASYDIET PHILOSOPHY */}
      <section className="bg-[#17352A] px-6 py-20 text-[#F7F4EC] md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              The EasyDiet philosophy
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Nutrition should feel
              <span className="text-[#B8D9A6]">
                {" "}understandable.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              We believe better choices begin with better
              understanding. Learn the basics, explore your
              options and take a realistic approach to your own
              health goals.
            </p>

            <Link
              to="/philosophy"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
            >
              Our philosophy
              <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            {principles.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-t border-white/15 py-6"
              >
                <span className="text-sm text-[#B8D9A6]">
                  0{index + 1}
                </span>

                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Put knowledge into practice
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Choose your next step.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {programs.map((program, index) => (
              <Link
                key={program.href}
                to={program.href}
                className="group rounded-[1.5rem] border border-[#17352A]/10 bg-[#F4E5D0]/50 p-7 transition hover:-translate-y-1 hover:bg-[#F4E5D0] md:p-8"
              >
                <span className="text-sm text-[#075B32]">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-2xl font-medium">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#17352A]/60">
                  {program.text}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#075B32]">
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
              Questions
            </p>

            <h2 className="mt-5 text-4xl font-medium md:text-5xl">
              About our guides.
            </h2>
          </div>

          <div className="divide-y divide-[#17352A]/15 border-y border-[#17352A]/15">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-7"
              >
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

      {/* CTA */}
      <section className="bg-[#075B32] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              Your health journey
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-7xl">
              Ready to make
              <span className="text-[#B8D9A6]">
                {" "}a change?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Explore your goals with EasyDiet and find a
              practical next step towards healthier everyday
              habits.
            </p>
          </div>

          <button
            type="button"
            onClick={openWhatsApp}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#F7F4EC] px-7 py-4 text-sm font-semibold text-[#17352A] transition hover:bg-white"
          >
            Talk to EasyDiet
            <ArrowRight size={18} />
          </button>
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

          <span className="text-sm text-white/40">
            EasyDiet — Better Food · Healthy Life
          </span>
        </div>
      </section>
    </main>
  );
}

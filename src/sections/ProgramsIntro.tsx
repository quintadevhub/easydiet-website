
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import {
  ArrowDownRight,
  ArrowRight,
  HeartPulse,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

type DietPackage = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  original_price_paise: number | null;
  price_paise: number;
  duration_days: number;
  features: string[] | null;
  is_active: boolean;
};

const programs = [
  {
    number: "01",
    icon: TrendingDown,
    title: "Healthy Weight Loss",
    subtitle: "Lose weight without losing your life.",
    description:
      "A practical nutrition approach focused on healthy, sustainable weight loss without extreme restrictions or complicated diets.",
    points: [
      "Personalised nutrition guidance",
      "Practical everyday meal choices",
      "Sustainable weight management",
      "Flexible approach for real life",
    ],
    href: "/weight-loss",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Healthy Weight Gain",
    subtitle: "Build your body with better nutrition.",
    description:
      "A structured approach to healthy weight gain using balanced meals, better nutrition and habits that support your everyday routine.",
    points: [
      "Personalised nutrition strategy",
      "Balanced calorie surplus",
      "Protein-focused food choices",
      "Healthy and sustainable progress",
    ],
    href: "/weight-gain",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Healthy Lifestyle",
    subtitle: "Feel better. Eat better. Live better.",
    description:
      "A flexible nutrition program for people who want to improve everyday eating habits, energy and overall lifestyle.",
    points: [
      "Balanced everyday nutrition",
      "Better eating habits",
      "Practical meal planning",
      "Long-term lifestyle support",
    ],
    href: "/healthy-lifestyle",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand you",
    text: "We start with your goals, lifestyle, food preferences and current routine.",
  },
  {
    number: "02",
    title: "Build your approach",
    text: "Your nutrition strategy is designed around what is realistic for your everyday life.",
  },
  {
    number: "03",
    title: "Create better habits",
    text: "The focus is not perfection. It is building choices you can consistently maintain.",
  },
  {
    number: "04",
    title: "Keep moving forward",
    text: "Your nutrition journey can evolve as your goals, routine and lifestyle change.",
  },
];

const formatINR = (paise: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(paise / 100);

export default function ProgramsIntro() {
  const [packages, setPackages] = useState<DietPackage[]>([]);
  const [packagesLoading, setPackagesLoading] = useState(true);
  const [packagesError, setPackagesError] = useState("");
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPackages() {
      setPackagesLoading(true);
      setPackagesError("");

      const { data, error } = await supabase
        .from("diet_packages")
        .select(
          "id, name, slug, description, original_price_paise, price_paise, duration_days, features, is_active"
        )
        .eq("is_active", true)
        .in("slug", [
          "7-day-starter",
          "30-day-transformation",
          "90-day-lifestyle",
        ])
        .order("duration_days", { ascending: true });

      if (cancelled) return;

      if (error) {
        console.error("Failed to load diet packages:", error.message);
        setPackagesError(
          "Plans abhi load nahi ho pa rahe. Please refresh karke try karein."
        );
      } else {
        setPackages((data ?? []) as DietPackage[]);
      }

      setPackagesLoading(false);
    }

    fetchPackages();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      {/* PREMIUM HERO */}
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-[radial-gradient(ellipse_at_78%_20%,rgba(184,217,166,0.4),transparent_35%),linear-gradient(135deg,#F8EFE3_0%,#F4E5D0_50%,#F7F4EC_100%)] px-6 pb-20 pt-32 md:px-10 md:pt-40 lg:px-16">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#B8D9A6]/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[450px] w-[450px] rounded-full bg-white/60 blur-[90px]" />

        <div className="pointer-events-none absolute right-[5%] top-[10%] hidden select-none font-serif text-[19rem] font-light leading-none tracking-[-0.1em] text-[#075B32]/[0.045] lg:block">
          E
        </div>

        <div className="relative mx-auto w-full max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#075B32] md:text-xs"
          >
            <span className="h-px w-10 bg-[#075B32]" />
            The EasyDiet Experience
          </motion.p>

          <div className="mt-9 overflow-hidden pb-2">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="max-w-[1100px] text-[clamp(3.7rem,8.4vw,8.8rem)] font-light leading-[0.88] tracking-[-0.075em]"
            >
              Nutrition,
              <br />
              <span className="font-normal italic text-[#075B32]">
                thoughtfully
              </span>{" "}
              personalised.
            </motion.h1>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-base leading-8 text-[#17352A]/70 md:text-xl md:leading-9"
            >
              Your goals. Your routine. Your food preferences. Discover a more
              thoughtful approach to nutrition that fits your everyday life.
            </motion.p>

            <motion.a
              href="#pricing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="group flex w-fit items-center gap-4 rounded-full border border-[#17352A]/20 bg-white/40 py-2 pl-6 pr-2 text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm backdrop-blur-sm transition duration-300 hover:bg-[#17352A] hover:text-white"
            >
              Explore memberships
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#075B32] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowDownRight size={17} />
              </span>
            </motion.a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#17352A]/15 pt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17352A]/55 md:mt-20">
            <span>● Personalised approach</span>
            <span>● Practical nutrition</span>
            <span>● Sustainable habits</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-24">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#075B32]">
              A more personal approach
            </p>
            <div className="mt-6 hidden h-24 w-px bg-[#075B32]/20 lg:block" />
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-[1000px] text-4xl font-light leading-[1.02] tracking-[-0.055em] md:text-6xl lg:text-7xl"
            >
              One goal at a time.
              <br />
              <span className="font-normal italic text-[#075B32]">
                One better you.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 max-w-2xl text-base leading-8 text-[#17352A]/65 md:text-lg md:leading-9"
            >
              Every EasyDiet program is designed to make nutrition simpler,
              more practical and easier to sustain. No unnecessary complexity.
              Just a thoughtful approach built around you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="bg-[#17352A] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#B8D9A6]">
              Find your starting point
            </p>

            <h2 className="max-w-5xl text-4xl font-light leading-[1.02] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              A plan for where you are
              <br />
              <span className="font-normal italic text-[#B8D9A6]">
                and where you want to go.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/15 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group border-b border-white/15 py-10 lg:px-8 lg:py-12 ${
                    index !== programs.length - 1 ? "lg:border-r" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-white/35">
                      {program.number}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B8D9A6]/25 transition duration-500 group-hover:rotate-12 group-hover:bg-[#B8D9A6] group-hover:text-[#17352A]">
                      <Icon size={22} strokeWidth={1.3} />
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm italic text-[#B8D9A6]">
                    {program.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {program.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8D9A6]" />
                        <span className="text-sm leading-6 text-white/65">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={program.href}
                    className="group/link mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#B8D9A6]"
                  >
                    Explore program
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8D9A6]/30 transition duration-300 group-hover/link:bg-[#B8D9A6] group-hover/link:text-[#17352A]">
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREMIUM EXPANDABLE PRICING */}
      <section
        id="pricing"
        className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#F8EFE3_0%,#F7F4EC_50%,#F2F0E5_100%)] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40"
      >
        <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#B8D9A6]/35 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[25rem] w-[25rem] rounded-full bg-[#F4E5D0]/90 blur-[90px]" />

        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.27em] text-[#075B32]">
                <span className="h-px w-9 bg-[#075B32]" />
                EasyDiet memberships
              </p>

              <h2 className="mt-6 text-4xl font-light leading-[0.98] tracking-[-0.06em] sm:text-5xl md:text-7xl">
                A better you,
                <br />
                <span className="font-normal italic text-[#075B32]">
                  by design.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#17352A]/65 md:text-lg md:leading-8">
                Thoughtful nutrition plans for real life. Choose the level of
                support that fits your goals, routine and pace.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-full border border-[#075B32]/15 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F2DE] text-[#075B32]">
                <Sparkles size={18} />
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#17352A]/75">
                Simple plans. Clear pricing.
              </span>
            </div>
          </div>

          {/* Loading */}
          {packagesLoading && (
            <div className="grid gap-5 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="min-h-[280px] animate-pulse rounded-[30px] border border-[#075B32]/10 bg-white/80 p-8"
                >
                  <div className="h-4 w-24 rounded bg-[#075B32]/10" />
                  <div className="mt-8 h-8 w-3/4 rounded bg-[#075B32]/10" />
                  <div className="mt-5 h-12 w-1/2 rounded bg-[#075B32]/10" />
                  <div className="mt-8 h-12 rounded-full bg-[#075B32]/10" />
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {!packagesLoading && packagesError && (
            <div
              role="alert"
              className="rounded-2xl border border-red-200 bg-white p-6 text-center text-sm text-red-700"
            >
              {packagesError}
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="ml-3 rounded-full bg-[#075B32] px-4 py-2 text-xs font-semibold text-white"
              >
                Refresh
              </button>
            </div>
          )}

          {/* No packages */}
          {!packagesLoading &&
            !packagesError &&
            packages.length === 0 && (
              <div className="rounded-2xl border border-[#075B32]/15 bg-white/80 p-8 text-center">
                <p className="text-lg font-medium">
                  Plans are currently unavailable.
                </p>
                <p className="mt-2 text-sm text-[#17352A]/65">
                  Please check back soon.
                </p>
              </div>
            )}

          {/* Pricing cards */}
          {!packagesLoading &&
            !packagesError &&
            packages.length > 0 && (
              <div className="grid items-start gap-6 md:grid-cols-3">
                {packages.map((plan, index) => {
                  const originalPrice = plan.original_price_paise;
                  const hasDiscount =
                    originalPrice !== null &&
                    originalPrice > plan.price_paise;

                  const discount = hasDiscount
                    ? Math.round(
                        ((originalPrice - plan.price_paise) /
                          originalPrice) *
                          100
                      )
                    : 0;

                  const features = Array.isArray(plan.features)
                    ? plan.features
                    : [];

                  const isPopular = index === 1;
                  const isExpanded = expandedPlan === plan.id;

                  return (
                    <motion.article
                      key={plan.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      onMouseEnter={() => setExpandedPlan(plan.id)}
                      onMouseLeave={() => setExpandedPlan(null)}
                      className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl md:p-7 ${
                        isPopular
                          ? "border-[#075B32] bg-[#17352A] text-white shadow-xl shadow-[#17352A]/15"
                          : "border-[#17352A]/10 bg-white text-[#17352A] shadow-lg shadow-[#17352A]/5 hover:border-[#075B32]/30"
                      }`}
                    >
                      {isPopular && (
                        <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#CBE5BA] px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#17352A]">
                          Most popular
                        </div>
                      )}

                      {/* Always visible */}
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                            isPopular
                              ? "bg-white/10 text-[#CBE5BA]"
                              : "bg-[#E6F2DE] text-[#075B32]"
                          }`}
                        >
                          <HeartPulse size={21} strokeWidth={1.5} />
                        </span>

                        {hasDiscount && (
                          <span className="rounded-full bg-[#F28A16] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                            Save {discount}%
                          </span>
                        )}
                      </div>

                      <p
                        className={`mt-6 text-[10px] font-bold uppercase tracking-[0.18em] ${
                          isPopular ? "text-[#B8D9A6]" : "text-[#075B32]"
                        }`}
                      >
                        {plan.duration_days} days
                      </p>

                      <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em]">
                        {plan.name}
                      </h3>

                      <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-4xl font-semibold tracking-[-0.06em]">
                          {formatINR(plan.price_paise)}
                        </span>

                        {hasDiscount && (
                          <span
                            className={`text-sm line-through ${
                              isPopular
                                ? "text-white/40"
                                : "text-[#17352A]/40"
                            }`}
                          >
                            {formatINR(originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Button always stays visible */}
                      <Link
                        to="/signup"
                        className={`mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] transition duration-300 ${
                          isPopular
                            ? "bg-[#CBE5BA] text-[#17352A] hover:bg-white"
                            : "bg-[#075B32] text-white hover:bg-[#064927]"
                        }`}
                      >
                        Choose plan
                        <ArrowRight size={15} />
                      </Link>

                      {/* Hidden details expand on hover or mobile tap */}
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isExpanded
                            ? "grid-rows-[1fr] pt-6 opacity-100"
                            : "grid-rows-[0fr] pt-0 opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          {plan.description && (
                            <p
                              className={`text-sm leading-6 ${
                                isPopular
                                  ? "text-white/60"
                                  : "text-[#17352A]/60"
                              }`}
                            >
                              {plan.description}
                            </p>
                          )}

                          {hasDiscount && (
                            <p
                              className={`mt-3 text-xs font-semibold ${
                                isPopular
                                  ? "text-[#CBE5BA]"
                                  : "text-[#075B32]"
                              }`}
                            >
                              You save{" "}
                              {formatINR(
                                originalPrice - plan.price_paise
                              )}
                            </p>
                          )}

                          <div
                            className={`my-5 h-px ${
                              isPopular
                                ? "bg-white/15"
                                : "bg-[#17352A]/10"
                            }`}
                          />

                          <p
                            className={`text-[10px] font-extrabold uppercase tracking-[0.18em] ${
                              isPopular
                                ? "text-[#B8D9A6]"
                                : "text-[#075B32]"
                            }`}
                          >
                            What&apos;s included
                          </p>

                          <ul className="mt-4 space-y-3">
                            {features.length > 0 ? (
                              features.map((feature, featureIndex) => (
                                <li
                                  key={`${plan.id}-${featureIndex}`}
                                  className="flex items-start gap-3"
                                >
                                  <span
                                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                                      isPopular
                                        ? "bg-[#B8D9A6]/15 text-[#CBE5BA]"
                                        : "bg-[#E6F2DE] text-[#075B32]"
                                    }`}
                                  >
                                    ✓
                                  </span>

                                  <span
                                    className={`text-sm leading-6 ${
                                      isPopular
                                        ? "text-white/75"
                                        : "text-[#17352A]/70"
                                    }`}
                                  >
                                    {feature}
                                  </span>
                                </li>
                              ))
                            ) : (
                              <li className="text-sm leading-6 opacity-60">
                                Plan details will be shared after signup.
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Mobile expand/collapse */}
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedPlan(isExpanded ? null : plan.id)
                        }
                        className={`mt-4 flex w-full items-center justify-center gap-2 py-2 text-[9px] font-bold uppercase tracking-[0.15em] ${
                          isPopular ? "text-[#B8D9A6]" : "text-[#075B32]"
                        }`}
                      >
                        {isExpanded ? "Show less" : "View plan details"}
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ArrowDownRight size={13} />
                        </motion.span>
                      </button>
                    </motion.article>
                  );
                })}
              </div>
            )}

          <p className="mt-9 text-center text-xs leading-5 text-[#17352A]/45">
            Nutrition needs differ from person to person. Plans and prices
            shown here are loaded from EasyDiet&apos;s package database.
          </p>
        </div>
      </section>

      {/* PERSONALISATION */}
      <section className="bg-[#F8EFE3] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square max-w-[560px] rounded-full bg-[#B8D9A6] p-5 md:p-10">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-[#17352A]/15 bg-[#F7F4EC] px-6 text-center md:px-8">
                <Target
                  size={42}
                  strokeWidth={1.1}
                  className="text-[#075B32]"
                />
                <p className="mt-6 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                  Your goal.
                </p>
                <p className="mt-2 text-3xl font-medium italic tracking-[-0.04em] text-[#075B32] md:text-5xl">
                  Your plan.
                </p>
                <p className="mt-6 max-w-xs text-sm leading-6 text-[#17352A]/60">
                  A nutrition approach built around your needs, preferences
                  and everyday routine.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#075B32]">
              Personalised nutrition
            </p>

            <h2 className="mt-7 text-4xl font-light leading-[1.02] tracking-[-0.05em] md:text-6xl">
              Your program should work with your life,{" "}
              <span className="font-normal italic text-[#075B32]">
                not against it.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#17352A]/65 md:text-lg">
              We consider more than just a number on the weighing scale. Your
              routine, food preferences, activity level and goals all matter
              when creating a sustainable nutrition approach.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#17352A]/65 md:text-lg">
              The result is a plan that feels realistic enough to follow and
              flexible enough to live with.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#075B32]">
                The EasyDiet approach
              </p>

              <h2 className="mt-7 text-4xl font-light leading-[1.02] tracking-[-0.05em] md:text-6xl">
                Simple steps.
                <br />
                <span className="font-normal italic text-[#075B32]">
                  Meaningful change.
                </span>
              </h2>
            </div>

            <div className="border-t border-[#17352A]/15">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="grid gap-4 border-b border-[#17352A]/15 py-7 md:grid-cols-[70px_0.7fr_1fr] md:items-start md:gap-6"
                >
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#075B32]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-7 text-[#17352A]/60 md:text-base">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY EASYDIET */}
      <section className="bg-[#CBE5BA] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#075B32]">
                Why EasyDiet
              </p>

              <h2 className="mt-7 max-w-5xl text-4xl font-light leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                Less restriction.
                <br />
                More understanding.
                <br />
                <span className="font-normal italic text-[#075B32]">
                  Better habits.
                </span>
              </h2>
            </div>

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#075B32] text-white">
                <Sparkles size={25} strokeWidth={1.2} />
              </div>

              <p className="mt-7 text-base leading-8 text-[#17352A]/70 md:text-lg">
                We want nutrition to feel clear, practical and achievable.
                Instead of making food complicated, EasyDiet helps you
                understand what works for you and why.
              </p>

              <Link
                to="/philosophy"
                className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#075B32]"
              >
                Read our philosophy
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/25 transition duration-300 hover:bg-[#075B32] hover:text-white">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F4E5D0] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative isolate overflow-hidden rounded-[30px] bg-[#17352A] px-7 py-14 text-white md:rounded-[40px] md:px-14 md:py-20 lg:px-20 lg:py-24">
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#075B32] opacity-80 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-[#B8D9A6]/20 blur-3xl" />

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#B8D9A6]">
                  Start your journey
                </p>

                <h2 className="mt-7 max-w-4xl text-4xl font-light leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                  Find the nutrition approach that{" "}
                  <span className="font-normal italic text-[#B8D9A6]">
                    fits you.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                  Tell us a little about yourself and your goals. Take the
                  first step towards a more personalised nutrition journey.
                </p>
              </div>

              <Link
                to="/signup"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#CBE5BA] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#17352A] transition duration-300 hover:bg-white md:px-7 md:py-4"
              >
                Get My Diet Plan
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17352A] text-white transition-transform duration-300 group-hover:translate-x-1">
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

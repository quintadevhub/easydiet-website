
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    number: "01",
    title: "Health before trends",
    description:
      "We believe healthy eating should support your well-being, not force you to follow every new diet trend.",
  },
  {
    icon: Target,
    number: "02",
    title: "Personalised approach",
    description:
      "Your goals, food preferences, routine and lifestyle matter when building a sustainable nutrition plan.",
  },
  {
    icon: Leaf,
    number: "03",
    title: "Balance over restriction",
    description:
      "A healthier lifestyle is built through realistic food choices, consistency and habits you can maintain.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Progress with purpose",
    description:
      "We encourage a thoughtful, long-term approach to nutrition instead of quick fixes and unrealistic promises.",
  },
];

const focusAreas = [
  {
    title: "Healthy weight loss",
    description:
      "Build healthier eating habits while working towards a weight goal that suits your individual needs.",
    link: "/weight-loss",
    label: "Explore weight loss",
  },
  {
    title: "Healthy weight gain",
    description:
      "Explore balanced nutrition strategies designed to support gradual weight gain and your personal goals.",
    link: "/weight-gain",
    label: "Explore weight gain",
  },
  {
    title: "Everyday wellness",
    description:
      "Make everyday nutrition more intentional with practical habits and a balanced approach to food.",
    link: "/healthy-lifestyle",
    label: "Explore healthy living",
  },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-[#F7F4EC] text-[#17352A]">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:px-14">
        <div className="absolute right-[-120px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#CBE5BA]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              <span className="h-px w-9 bg-[#075B32]" />
              The story behind EasyDiet
            </p>

            <h1 className="max-w-2xl text-5xl font-light leading-[1.08] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[84px]">
              A healthier life
              <br />
              starts with
              <br />
              <span className="font-serif italic text-[#075B32]">
                better choices.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-8 text-[#17352A]/65 md:text-base">
              At EasyDiet, we believe that eating well should feel achievable,
              personal and enjoyable. Our goal is to help make healthier
              choices a natural part of your everyday life.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/how-it-works"
                className="group inline-flex items-center gap-3 rounded-full bg-[#075B32] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#17352A]"
              >
                Discover our approach
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-3 py-3 text-xs font-semibold text-[#17352A] transition hover:text-[#075B32]"
              >
                Explore our programs
                <ArrowDownRight size={15} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[48%_48%_8px_8px] border border-[#075B32]/15 sm:-right-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-[48%_48%_8px_8px] bg-[#E7EAD9]">
              <img
                src="/logo/easydiet-hero.png"
                alt="EasyDiet healthy lifestyle"
                className="aspect-[4/4.7] h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-2 max-w-[250px] rounded-2xl border border-[#17352A]/5 bg-white/95 p-5 shadow-xl shadow-[#17352A]/10 backdrop-blur sm:-left-8">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF3E3] text-[#075B32]">
                <Sparkles size={17} />
              </div>
              <p className="text-sm font-medium leading-6">
                Small, consistent choices can shape a healthier everyday life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-[#17352A] px-5 py-20 text-[#F7F4EC] sm:px-8 md:py-28 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B8D9A6]">
              Our belief
            </p>
            <p className="mt-5 font-serif text-2xl italic text-[#B8D9A6] md:text-3xl">
              Better food.
              <br />
              Better habits.
              <br />
              Better life.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl">
              Nutrition should fit into your life, not take it over.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
              We want to make the journey towards better health feel less
              complicated. By focusing on balanced food choices and practical
              routines, EasyDiet aims to make nutrition easier to understand
              and healthier habits easier to maintain.
            </p>
          </div>
        </motion.div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#075B32]">
                What guides us
              </p>
              <h2 className="max-w-xl text-4xl font-light leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Our philosophy is
                <span className="font-serif italic text-[#075B32]">
                  {" "}simple.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-8 text-[#17352A]/60 md:justify-self-end">
              There is no single approach that works for everyone. We value
              thoughtful guidance, realistic expectations and a balanced
              relationship with food.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#17352A]/10 bg-[#17352A]/10 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group bg-[#F7F4EC] p-7 transition-colors duration-300 hover:bg-[#F0F3E8] sm:p-9 md:p-11"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#075B32]/15 text-[#075B32] transition group-hover:bg-[#075B32] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <span className="text-xs tracking-widest text-[#17352A]/35">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-medium tracking-tight md:text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#17352A]/60">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR FOCUS */}
      <section className="bg-[#F0EBDD] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              Your goals, your journey
            </p>
            <h2 className="text-4xl font-light leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Different goals.
              <br />
              <span className="font-serif italic text-[#075B32]">
                One thoughtful approach.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-3xl border border-[#17352A]/10 bg-[#F7F4EC] p-7 sm:p-8"
              >
                <span className="text-xs text-[#075B32]">
                  0{index + 1} / EasyDiet
                </span>

                <h3 className="mt-8 text-2xl font-light tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#17352A]/60">
                  {area.description}
                </p>

                <Link
                  to={area.link}
                  className="mt-8 inline-flex items-center gap-2 border-t border-[#17352A]/10 pt-5 text-xs font-semibold text-[#075B32] transition hover:gap-3"
                >
                  {area.label}
                  <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROMISE */}
      <section className="px-5 py-20 sm:px-8 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[32px] bg-[#E7EDE0] p-7 sm:p-10 md:grid-cols-[1fr_auto] md:p-14">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#075B32]">
              The EasyDiet difference
            </p>

            <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl">
              A more considered way to think about food and well-being.
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Practical, everyday food choices",
                "Goals tailored to individual needs",
                "A focus on sustainable habits",
                "A balanced, non-judgemental mindset",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#075B32]"
                  />
                  <p className="text-sm leading-6 text-[#17352A]/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden h-32 w-32 items-center justify-center rounded-full border border-[#075B32]/20 text-[#075B32] md:flex">
            <Leaf size={48} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#075B32] px-7 py-14 text-center text-white sm:px-12 md:py-20">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-12 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#CBE5BA]">
              Take your next step
            </p>

            <h2 className="text-4xl font-light leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Your healthier journey
              <br />
              <span className="font-serif italic text-[#CBE5BA]">
                starts here.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75">
              Tell us about your goals and explore a nutrition approach that
              fits your lifestyle.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F7F4EC] px-7 py-4 text-xs font-semibold text-[#17352A] transition hover:bg-[#CBE5BA]"
            >
              Get started with EasyDiet
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#17352A]/10 px-5 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="inline-flex items-center">
            <img
              src="/logo/easydiet-logo.png"
              alt="EasyDiet"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <p className="text-xs leading-6 text-[#17352A]/50">
            Better food for a better life.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#17352A]/65">
            <Link to="/philosophy" className="hover:text-[#075B32]">
              Philosophy
            </Link>
            <Link to="/guides" className="hover:text-[#075B32]">
              Guides
            </Link>
            <Link to="/faq" className="hover:text-[#075B32]">
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-[#075B32]">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

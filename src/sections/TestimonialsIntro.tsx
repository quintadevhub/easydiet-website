import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "For the first time, eating healthy felt realistic. The plan worked around my routine instead of asking me to completely change it.",
    name: "EasyDiet Member",
    journey: "Healthy Weight Loss",
    result: "Built sustainable eating habits",
  },
  {
    quote:
      "I stopped thinking of food as something I had to restrict. The guidance helped me understand what my body actually needed.",
    name: "EasyDiet Member",
    journey: "Healthy Lifestyle",
    result: "Created a balanced daily routine",
  },
  {
    quote:
      "The biggest difference was how practical everything felt. I could actually follow the plan with the food I already eat at home.",
    name: "EasyDiet Member",
    journey: "Personalised Nutrition",
    result: "Made healthy eating easier",
  },
];

export default function TestimonialsIntro() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  const previous = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#17352A] px-6 py-28 text-[#FFFDF8] md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Background quotation mark */}

      <div className="pointer-events-none absolute -right-5 top-0 select-none text-[22rem] font-serif font-light leading-none text-white/[0.035] md:text-[30rem]">
        “
      </div>

      <div className="relative mx-auto max-w-[1250px]">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">

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
              Real Journeys
            </p>

            <div className="mt-6 hidden h-20 w-px bg-[#CBE5BA]/30 lg:block" />
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
                className="max-w-[1000px] text-5xl font-light leading-[1.02] tracking-[-0.045em] md:text-7xl lg:text-[6.5rem]"
              >
                Small changes.
                <br />
                <span className="font-normal italic text-[#CBE5BA]">
                  Real difference.
                </span>
              </motion.h2>

            </div>

          </div>

        </div>

        {/* =========================================
            TESTIMONIAL
        ========================================= */}

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 border-t border-white/15 pt-12 md:mt-28 md:pt-16"
        >

          <div className="grid gap-12 lg:grid-cols-[1fr_0.35fr] lg:gap-24">

            {/* QUOTE */}

            <div>

              <div className="mb-8 text-5xl font-serif font-light text-[#CBE5BA]/60 md:text-7xl">
                “
              </div>

              <blockquote className="max-w-[900px] text-3xl font-light leading-[1.25] tracking-[-0.025em] md:text-5xl lg:text-6xl">
                {testimonial.quote}
              </blockquote>

              <div className="mt-10">

                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#CBE5BA]">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-base text-white/50">
                  {testimonial.journey}
                </p>

              </div>

            </div>

            {/* RESULT */}

            <div className="flex flex-col justify-end">

              <div className="border-t border-white/15 pt-7">

                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Journey
                </p>

                <p className="mt-5 text-xl font-light leading-8 text-white/85">
                  {testimonial.result}
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =========================================
            CONTROLS
        ========================================= */}

        <div className="mt-14 flex items-center justify-between border-t border-white/15 pt-7">

          <div className="flex items-center gap-3">

            {testimonials.map((item, index) => (
              <button
                key={item.journey}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View testimonial ${index + 1}`}
                className={`h-px transition-all duration-300 ${
                  index === active
                    ? "w-12 bg-[#CBE5BA]"
                    : "w-6 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}

          </div>

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#CBE5BA]/50 hover:bg-white/5"
            >
              <ArrowLeft size={16} strokeWidth={1.4} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#CBE5BA]/50 hover:bg-white/5"
            >
              <ArrowRight size={16} strokeWidth={1.4} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
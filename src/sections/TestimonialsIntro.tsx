
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { image: "/images/seema-testimonial.png", name: "Seema" },
  { image: "/images/priya-testimonial.png", name: "Priya" },
  { image: "/images/adarsh-testimonial.png", name: "Adarsh Pal" },
  { image: "/images/padma-testimonial.png", name: "Padma" },
  { image: "/images/anita-testimonial.png", name: "Anita" },
];

export default function TestimonialsIntro() {
  const items = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#112D23] py-24 text-[#F8F6EF] sm:py-32 lg:py-36"
    >
      {/* Premium ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-[#8DBD70]/[0.09] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#D4C19A]/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.15)_100%)]" />

      {/* Editorial header */}
      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D0B5]/30 text-[#D8D0B5]">
                <Sparkles size={15} strokeWidth={1.3} />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#D8D0B5] sm:text-xs sm:tracking-[0.38em]">
                The EasyDiet Experience
              </span>
            </div>

            <h2 className="max-w-5xl text-[clamp(3rem,7.5vw,7.6rem)] font-light leading-[0.99] tracking-[-0.065em]">
              A healthier life,
              <br />
              <span className="font-serif italic font-normal text-[#D8D0B5]">
                one story at a time.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/55 sm:mt-9 sm:text-base sm:leading-8">
              Meaningful change looks different for everyone. Explore
              personal journeys shaped by mindful choices and healthier
              everyday habits.
            </p>
          </div>

          <div className="hidden pb-2 lg:block">
            <div className="flex items-center gap-4 border-l border-[#D8D0B5]/30 pl-5">
              <span className="font-serif text-5xl italic text-[#D8D0B5]">
                05
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                  Personal stories
                </p>
                <p className="mt-2 text-xs text-white/40">
                  Every journey is unique
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex items-center gap-4 sm:mt-16">
          <span className="h-px w-12 bg-[#D8D0B5]/70 sm:w-20" />
          <span className="text-[9px] uppercase tracking-[0.32em] text-white/40 sm:text-[10px]">
            Stories of progress
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      {/* Seamless horizontal showcase */}
      <div className="testimonial-viewport group relative mt-10 sm:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#112D23] via-[#112D23]/80 to-transparent sm:w-24 lg:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#112D23] via-[#112D23]/80 to-transparent sm:w-24 lg:w-36" />

        <div className="ed-luxury-track flex w-max items-stretch gap-5 px-5 sm:gap-7 sm:px-8 lg:gap-8">
          {items.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group/card w-[265px] shrink-0 rounded-[25px] border border-[#D8D0B5]/15 bg-gradient-to-b from-white/[0.075] to-white/[0.025] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.17)] transition-colors duration-500 hover:border-[#D8D0B5]/45 sm:w-[320px] sm:rounded-[30px] sm:p-2.5 lg:w-[355px]"
            >
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${item.name}'s full testimonial`}
                className="relative block overflow-hidden rounded-[18px] bg-[#F7F4EC] sm:rounded-[22px]"
              >
                <img
                  src={item.image}
                  alt={`${item.name} EasyDiet customer story`}
                  loading={index < 3 ? "eager" : "lazy"}
                  draggable={false}
                  className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover/card:scale-[1.025]"
                />

                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#F8F6EF]/90 text-[#17352A] shadow-lg backdrop-blur-md transition duration-300 group-hover/card:rotate-45 group-hover/card:bg-white">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </a>

              <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8D0B5]/20 bg-[#D8D0B5]/[0.07] text-[#D8D0B5] transition-colors group-hover/card:bg-[#D8D0B5]/15">
                    <Heart size={17} strokeWidth={1.35} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium tracking-wide text-[#F8F6EF] sm:text-base">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-[#D8D0B5]/65 sm:text-[10px]">
                      The EasyDiet Story
                    </p>
                  </div>
                </div>

                <span className="font-serif text-sm italic text-[#D8D0B5]/60">
                  {String((index % testimonials.length) + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Refined footer */}
      <div className="mx-auto mt-12 flex max-w-[1450px] flex-col gap-5 px-6 sm:mt-16 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
        <p className="max-w-md text-[11px] leading-6 text-white/40 sm:text-xs">
          Every journey is personal. Individual experiences and results may vary.
        </p>

        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#D8D0B5]/50" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#D8D0B5]/75 sm:text-[10px] sm:tracking-[0.32em]">
            Better Food. Healthier Life.
          </span>
          <span className="h-px w-7 bg-[#D8D0B5]/50" />
        </div>
      </div>

      <style>{`
        .ed-luxury-track {
          animation: ed-luxury-marquee 52s linear infinite;
          will-change: transform;
        }

        .testimonial-viewport:hover .ed-luxury-track {
          animation-play-state: paused;
        }

        @keyframes ed-luxury-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ed-luxury-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

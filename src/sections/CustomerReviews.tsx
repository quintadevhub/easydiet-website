
import { Quote, Sparkles, ArrowUpRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Mohit",
    initials: "M",
    review:
      "Simple food recommendations that fit into everyday life. A practical approach to building healthier eating habits.",
    number: "01",
  },
  {
    name: "Sanjana",
    initials: "S",
    review:
      "I love the idea of keeping healthy eating simple. Familiar home-cooked meals make the approach feel more realistic.",
    number: "02",
  },
  {
    name: "Ashok",
    initials: "A",
    review:
      "The focus on everyday food choices makes nutrition feel less complicated. Small, manageable steps matter.",
    number: "03",
  },
  {
    name: "Piyush",
    initials: "P",
    review:
      "A convenient concept for people with busy schedules who want to pay more attention to their daily food choices.",
    number: "04",
  },
  {
    name: "Nandhini",
    initials: "N",
    review:
      "I appreciate the emphasis on balanced meals and simple routines rather than making healthy eating feel difficult.",
    number: "05",
  },
  {
    name: "Shivani",
    initials: "S",
    review:
      "The idea of personalising food guidance around everyday routines makes healthy habits feel more approachable.",
    number: "06",
  },
  {
    name: "Jiya",
    initials: "J",
    review:
      "A thoughtful approach to everyday nutrition, with an emphasis on practical choices and habits that fit real life.",
    number: "07",
  },
];

const repeatedReviews = [...reviews, ...reviews];

export default function CustomerReviews() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F4E5D0] py-20 text-[#17352A] sm:py-28 lg:py-32">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-[#B8D9A6]/35 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#D8C49E]/30 blur-[130px]" />

      {/* Top decorative wave */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="h-20 w-full sm:h-28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 0H1440V48C1200 135 1010 10 750 68C490 125 245 150 0 65V0Z"
            fill="#F7F4EC"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">
        {/* Premium editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#075B32]/15 bg-white/50 px-5 py-2.5 backdrop-blur-md">
            <Sparkles size={14} className="text-[#946F35]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#075B32] sm:text-[10px]">
              The EasyDiet Experience
            </span>
          </div>

          <h2 className="text-[clamp(2.8rem,6.5vw,6.2rem)] font-light leading-[1.02] tracking-[-0.065em]">
            A little better,
            <br />
            <span className="font-serif italic text-[#075B32]">
              every day.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#17352A]/65 sm:text-base sm:leading-8">
            Everyday nutrition, thoughtful choices and a more personal
            approach to building healthy habits.
          </p>

          <div className="mx-auto mt-9 flex max-w-sm items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#075B32]/20" />
            <Leaf size={17} strokeWidth={1.3} className="text-[#075B32]" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#17352A]/55">
              Customer stories
            </span>
            <span className="h-px flex-1 bg-[#075B32]/20" />
          </div>
        </motion.div>
      </div>

      {/* Horizontal wave-shaped review showcase */}
      <div className="review-wave-viewport group relative mt-12 overflow-hidden py-5 sm:mt-16 sm:py-8">
        {/* Soft edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F4E5D0] to-transparent sm:w-24 lg:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F4E5D0] to-transparent sm:w-24 lg:w-36" />

        <div className="ed-review-wave-track flex w-max items-stretch gap-5 px-5 sm:gap-7 sm:px-10">
          {repeatedReviews.map((review, index) => (
            <motion.article
              key={`${review.number}-${index}`}
              whileHover={{ y: -7, rotate: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`group/review relative flex min-h-[300px] w-[280px] shrink-0 flex-col overflow-hidden rounded-t-[46px] rounded-b-[24px] border border-white/80 bg-[#F9F7F0]/95 p-6 shadow-[0_18px_55px_rgba(23,53,42,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_24px_65px_rgba(23,53,42,0.15)] sm:min-h-[330px] sm:w-[330px] sm:rounded-t-[58px] sm:rounded-b-[28px] sm:p-7`}
              style={{
                transform: `translateY(${index % 2 === 0 ? "0px" : "15px"})`,
              }}
            >
              {/* Decorative card glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B8D9A6]/25 blur-2xl transition-opacity group-hover/review:opacity-100" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#075B32]/10 bg-[#075B32]/[0.06] text-[#075B32]">
                  <Quote size={21} strokeWidth={1.4} />
                </span>

                <span className="font-serif text-4xl italic leading-none text-[#075B32]/15">
                  {review.number}
                </span>
              </div>

              <p className="relative mt-7 flex-1 font-serif text-[17px] leading-7 text-[#17352A]/85 sm:text-lg sm:leading-8">
                “{review.review}”
              </p>

              <div className="relative mt-7 border-t border-[#17352A]/10 pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#075B32] font-serif text-lg italic text-[#F7F4EC] shadow-md">
                    {review.initials}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold tracking-wide text-[#17352A]">
                      {review.name}
                    </h3>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#075B32]/60">
                      EasyDiet community
                    </p>
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#075B32]/15 text-[#075B32]/70 transition-all duration-300 group-hover/review:rotate-45 group-hover/review:bg-[#075B32] group-hover/review:text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              {/* Fine decorative bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#075B32]/70 via-[#B8D9A6] to-transparent transition-transform duration-500 group-hover/review:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="pointer-events-none mt-10 overflow-hidden sm:mt-14">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-16 w-full sm:h-24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 75C230 10 420 112 690 57C960 2 1180 10 1440 70V120H0V75Z"
            fill="#F7F4EC"
          />
        </svg>
      </div>

      <div className="relative mx-auto mt-2 max-w-[1450px] px-6 text-center sm:px-10">
        <p className="text-[9px] uppercase tracking-[0.28em] text-[#17352A]/50 sm:text-[10px]">
          Better food. Healthier life.
        </p>
      </div>

      <style>{`
        .ed-review-wave-track {
          animation: ed-review-marquee 65s linear infinite;
          will-change: transform;
        }

        .review-wave-viewport:hover .ed-review-wave-track {
          animation-play-state: paused;
        }

        @keyframes ed-review-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ed-review-wave-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

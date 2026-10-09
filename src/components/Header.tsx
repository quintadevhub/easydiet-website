
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import DietPlanForm from "./DietPlanForm";

const programs = [
  { label: "Healthy Weight Loss", href: "/weight-loss" },
  { label: "Healthy Weight Gain", href: "/weight-gain" },
  { label: "Healthy Lifestyle", href: "/healthy-lifestyle" },
];

const navigation = [
  { label: "About EasyDiet", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Nutrition Guides", href: "/guides" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Header() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu after navigation
  useEffect(() => {
    setMenuOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while overlays are open
  useEffect(() => {
    document.body.style.overflow =
      menuOpen || formOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, formOpen]);

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#FFFDF8]/95 shadow-[0_8px_35px_rgba(23,53,42,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-[110px] w-full items-center justify-between px-7 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          {/* LARGER LOGO WITH MORE LEFT SPACING */}
          <Link
            to="/"
            className="relative z-[110] flex shrink-0 items-center"
            aria-label="EasyDiet Home"
          >
            <img
              src="/logo/easydiet-logo.png"
              alt="EasyDiet.in"
              className="h-[88px] w-auto object-contain md:h-[100px] lg:h-[108px]"
            />
          </Link>

          {/* RIGHT CONTROLS */}
          <div className="relative z-[110] flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* GET MY DIET PLAN */}
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="group hidden h-[60px] items-center gap-4 rounded-xl bg-[#FFFDF8] px-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#075B32] shadow-[0_8px_30px_rgba(23,53,42,0.08)] transition-all duration-300 hover:bg-[#CBE5BA] sm:flex md:px-7"
            >
              <span>Get My Diet Plan</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#075B32]/[0.08] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </span>
            </button>

            {/* HAMBURGER */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              className="group flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#FFFDF8] text-[#075B32] shadow-[0_8px_30px_rgba(23,53,42,0.08)] transition-all duration-300 hover:bg-[#075B32] hover:text-white md:h-[60px] md:w-[60px]"
            >
              <Menu
                size={25}
                strokeWidth={1.25}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ANIMATED NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.button
              type="button"
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[120] bg-[#17352A]/40 backdrop-blur-[3px]"
            />

            {/* SIDE MENU */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.55,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="fixed right-0 top-0 z-[130] flex h-[100dvh] w-full max-w-[570px] flex-col bg-[#FFFDF8] shadow-[-20px_0_80px_rgba(23,53,42,0.12)]"
            >
              {/* MENU HEADER */}
              <div className="flex h-[82px] shrink-0 items-center justify-between border-b border-[#17352A]/10 px-6 md:px-10">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  aria-label="EasyDiet Home"
                >
                  <img
                    src="/logo/easydiet-logo.png"
                    alt="EasyDiet.in"
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation"
                  className="group flex h-11 w-11 items-center justify-center rounded-full text-[#075B32] transition-all duration-300 hover:bg-[#075B32] hover:text-white"
                >
                  <X size={23} strokeWidth={1.25} />
                </button>
              </div>

              {/* SCROLLABLE MENU CONTENT */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-5 md:px-10 md:py-7">
                {/* HOME */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    to="/"
                    className="group flex items-center justify-between border-b border-[#17352A]/10 py-4"
                  >
                    <span className="text-2xl font-light tracking-[-0.045em] text-[#17352A] transition-colors group-hover:text-[#075B32] md:text-[2rem]">
                      Home
                    </span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.2}
                      className="text-[#075B32] opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>

                {/* PHILOSOPHY */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.04 }}
                >
                  <Link
                    to="/philosophy"
                    className="group flex items-center justify-between border-b border-[#17352A]/10 py-4"
                  >
                    <span className="text-2xl font-light tracking-[-0.045em] text-[#17352A] transition-colors group-hover:text-[#075B32] md:text-[2rem]">
                      Our Philosophy
                    </span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.2}
                      className="text-[#075B32] opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>

                {/* PROGRAMS DROPDOWN */}
                <div className="border-b border-[#17352A]/10">
                  <button
                    type="button"
                    onClick={() => setProgramsOpen(!programsOpen)}
                    aria-expanded={programsOpen}
                    className="group flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-2xl font-light tracking-[-0.045em] text-[#17352A] transition-colors group-hover:text-[#075B32] md:text-[2rem]">
                      Programs
                    </span>

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#075B32]/20 text-[#075B32] transition-transform duration-300 ${
                        programsOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={17} strokeWidth={1.3} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {programsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pl-1">
                          {programs.map((program, index) => (
                            <Link
                              key={program.href}
                              to={program.href}
                              className="group flex items-center gap-4 py-3"
                            >
                              <span className="text-[9px] font-semibold tracking-[0.18em] text-[#075B32]/60">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="text-sm font-light text-[#17352A]/75 transition-colors group-hover:text-[#075B32] md:text-base">
                                {program.label}
                              </span>

                              <ArrowUpRight
                                size={14}
                                strokeWidth={1.4}
                                className="text-[#075B32] opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ALL OTHER PAGES */}
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.06 + index * 0.035,
                    }}
                  >
                    <Link
                      to={item.href}
                      className="group flex items-center justify-between border-b border-[#17352A]/10 py-4"
                    >
                      <span className="text-2xl font-light tracking-[-0.045em] text-[#17352A] transition-colors group-hover:text-[#075B32] md:text-[2rem]">
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.2}
                        className="translate-x-[-4px] text-[#075B32] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* GET MY DIET PLAN */}
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setFormOpen(true);
                  }}
                  className="group mt-6 flex w-full items-center justify-between bg-[#075B32] px-5 py-4 text-left text-white transition-colors duration-300 hover:bg-[#064927] sm:hidden"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                    Get My Diet Plan
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </span>
                </button>
              </div>

              {/* MENU FOOTER */}
              <div className="shrink-0 border-t border-[#17352A]/10 bg-[#FFFDF8] px-6 py-4 md:px-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#075B32]">
                      Better Food · Healthy Life
                    </p>

                    <p className="mt-1 text-xs text-[#17352A]/45">
                      Nutrition made personal.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/918923161712"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#17352A]/55 transition-colors hover:text-[#075B32]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* EXISTING DIET PLAN FORM */}
      <DietPlanForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </>
  );
}

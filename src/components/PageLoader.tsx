import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F4EC]"
    >
      <div className="flex flex-col items-center">

        {/* Logo */}
        <motion.img
          src="/logo/easydiet-logo.png"
          alt="EasyDiet"
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-20 w-auto object-contain md:h-24"
        />

        {/* Line */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 80,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="mt-5 h-px bg-[#075B32]"
        />

        {/* Slogan */}
        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.35,
          }}
          className="mt-4 text-[9px] font-medium uppercase tracking-[0.28em] text-[#17352A]/60"
        >
          Better Food — Healthy Life
        </motion.p>

      </div>
    </motion.div>
  );
}
import { motion } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export default function ImageReveal({
  src,
  alt,
  className = "",
  imageClassName = "",
}: ImageRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>

      <motion.div
        initial={{
          clipPath: "inset(100% 0 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0% 0 0 0)",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="h-full w-full"
      >

        <motion.img
          src={src}
          alt={alt}
          initial={{
            scale: 1.12,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`h-full w-full object-cover ${imageClassName}`}
        />

      </motion.div>

    </div>
  );
}
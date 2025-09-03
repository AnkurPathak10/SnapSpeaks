import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href, className }) => {
  // Ensure children is always a string when we animate text
  const text = typeof children === "string" ? children : String(children ?? "")

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className={cn(
        "relative block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase dark:text-white/90 sm:text-7xl md:text-8xl",
        className
      )}
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {text.split("").map((l: string, i: number) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {text.split("").map((l: string, i: number) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}

export default FlipLink

"use client"

import { motion, useReducedMotion } from "framer-motion"

export default function Hero(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      ease: "easeOut",
    },
  }

  return (
    <motion.section
      id="hero"
      className="relative flex w-full min-h-dvh items-center justify-center overflow-hidden before:absolute before:inset-0 before:bg-[var(--color-text)] before:opacity-70 before:content-['']"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/zzz-sm-d-mergeproof-final-deleteme/cleo/1785885371714-hero-TEST-PLACEHOLDER.png)",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          className="mb-6 font-[family-name:var(--font-display)] text-[88px] leading-[0.94] tracking-[-0.01em] text-[var(--color-bg)] sm:text-[120px]"
          {...fadeInUp}
          transition={{
            ...fadeInUp.transition,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
        >
          Objects For Thought
        </motion.h1>

        <motion.p
          className="mb-8 max-w-xl font-[family-name:var(--font-body)] text-[17px] leading-[1.65] text-[var(--color-bg)] opacity-80"
          {...fadeInUp}
          transition={{
            ...fadeInUp.transition,
            delay: shouldReduceMotion ? 0 : 0.4,
          }}
        >
          A quiet physical notebook for better memory
        </motion.p>

        <motion.a
          href="#registry"
          className="font-[family-name:var(--font-body)] text-[17px] leading-[1.65] text-[var(--color-accent)] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          {...fadeInUp}
          transition={{
            ...fadeInUp.transition,
            delay: shouldReduceMotion ? 0 : 0.6,
          }}
        >
          Join the Registry
        </motion.a>
      </div>
    </motion.section>
  )
}

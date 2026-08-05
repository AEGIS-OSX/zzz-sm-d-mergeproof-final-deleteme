"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const sectionMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut", delay },
        };

  return (
    <>
      <style>{`
        .hero-scrim::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: color-mix(in srgb, var(--color-text) 70%, transparent);
          z-index: 1;
        }
        .hero-cta {
          transition: opacity 200ms ease;
        }
        .hero-cta:hover {
          opacity: 0.9;
        }
        .hero-cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-accent);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-scrim {
            background-attachment: scroll !important;
          }
        }
      `}</style>
      <motion.section
        id="hero"
        aria-label="Hero"
        className="hero-scrim relative flex w-full items-center justify-center overflow-hidden"
        style={{
          minHeight: "100dvh",
          backgroundImage: "url(/images/archival-book.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        {...sectionMotion}
      >
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32 text-center md:px-8">
          <motion.span
            className="mb-6 font-mono font-medium"
            style={{
              fontSize: "14px",
              lineHeight: "1.2",
              letterSpacing: "0.02em",
              color: "var(--color-bg)",
            }}
            {...fadeUp(0.1)}
          >
            Preview: Launching 2026
          </motion.span>

          <motion.h1
            className="font-display"
            style={{
              fontSize: "clamp(88px, 10vw, 120px)",
              lineHeight: "0.94",
              letterSpacing: "-0.01em",
              color: "var(--color-bg)",
            }}
            {...fadeUp(0.2)}
          >
            Margin
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-balance"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              lineHeight: "1.65",
              color: "var(--color-text-muted)",
            }}
            {...fadeUp(0.3)}
          >
            The archival alternative to the disposable digital note. A physical vessel for permanent thought.
          </motion.p>

          <motion.a
            href="#registry"
            className="hero-cta mt-12 inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              borderRadius: "0px",
            }}
            {...fadeUp(0.4)}
          >
            Join the Registry
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}

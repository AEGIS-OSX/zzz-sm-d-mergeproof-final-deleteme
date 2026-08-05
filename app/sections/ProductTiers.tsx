"use client";

import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const tiers = [
  {
    name: "The Apprentice",
    price: "$48",
    description:
      "A single Smyth-sewn notebook in your choice of cloth or leather binding. For the writer establishing a daily practice.",
    cta: "Begin",
    featured: false,
  },
  {
    name: "The Artisan",
    price: "$128",
    description:
      "A quarterly set of three notebooks, each with a unique seasonal cover, delivered to your door.",
    cta: "Subscribe",
    featured: true,
  },
  {
    name: "The Atelier",
    price: "$380",
    description:
      "A complete annual library of twelve notebooks, plus a bespoke leather folio and archival storage box.",
    cta: "Commission",
    featured: false,
  },
];

export default function ProductTiers() {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? "visible" : "hidden";
  const whileInView = prefersReducedMotion ? undefined : "visible";

  return (
    <motion.section
      id="product-tiers"
      className="relative w-full bg-[var(--color-canvas)] py-[var(--space-2xl)] px-[var(--space-2xs)] md:px-[var(--space-sm)]"
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-12">
          <motion.h2
            variants={itemVariants}
            className="font-[family-name:var(--font-display)] text-[var(--text-xl)] leading-tight text-[var(--color-ink)] mb-[var(--space-xs)]"
          >
            Product Tiers
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-[family-name:var(--font-body)] text-[var(--text-md)] leading-relaxed text-[var(--color-ink)] max-w-xl"
          >
            Select the instrument that matches the scale of your work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <motion.article
              key={tier.name}
              variants={itemVariants}
              className={`relative flex flex-col p-6 border ${
                tier.featured
                  ? "border-[var(--color-accent)]"
                  : "border-[var(--color-divider)]"
              } bg-[var(--color-bg)]`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-[family-name:var(--font-body)] bg-[var(--color-accent)] text-[var(--color-canvas)]">
                  Most Popular
                </span>
              )}

              <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-[var(--color-ink)] mb-2">
                {tier.name}
              </h3>

              <p className="font-[family-name:var(--font-display)] text-[var(--text-xl)] leading-tight text-[var(--color-ink)] mb-4">
                {tier.price}
              </p>

              <p className="font-[family-name:var(--font-body)] text-[var(--text-md)] leading-relaxed text-[var(--color-ink)] mb-6 flex-grow">
                {tier.description}
              </p>

              <button
                type="button"
                className={`w-full py-3 px-6 font-[family-name:var(--font-body)] text-sm leading-normal transition-colors ${
                  tier.featured
                    ? "bg-[var(--color-accent)] text-[var(--color-canvas)] hover:opacity-90"
                    : "bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-[var(--color-accent)]"
                }`}
              >
                {tier.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

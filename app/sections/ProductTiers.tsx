import React from 'react';

const tiers = [
  {
    name: 'Essential',
    price: '$29',
    period: '/month',
    description: 'Perfect for individuals and small teams getting started.',
    features: [
      'Core platform access',
      'Up to 5 team members',
      'Basic analytics dashboard',
      'Email support',
      '1GB storage',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Everything in Essential',
      'Up to 25 team members',
      'Advanced analytics & reporting',
      'Priority email & chat support',
      '10GB storage',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with specific needs.',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Dedicated account manager',
      'SLA & uptime guarantees',
      'Unlimited storage',
      'On-premise deployment option',
      'Custom security audits',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function ProductTiers() {
  return (
    <section className="py-[var(--space-2xl)] px-[var(--space-sm)] bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-[var(--space-2xl)]">
          <h2 className="text-[var(--text-xl)] font-bold text-[var(--color-ink)] mb-[var(--space-xs)]">
            Product Tiers
          </h2>
          <p className="text-[var(--text-md)] text-[var(--color-text-muted)]">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-sm)]">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-[var(--space-sm)] border ${
                tier.highlighted
                  ? 'border-[var(--color-accent)] bg-[var(--color-bg)]'
                  : 'border-[var(--color-divider)] bg-[var(--color-bg)]'
              }`}
            >
              <h3 className="text-[var(--text-md)] font-semibold text-[var(--color-ink)] mb-[var(--space-xs)]">
                {tier.name}
              </h3>
              <div className="flex items-baseline mb-[var(--space-xs)]">
                <span className="text-[var(--text-xl)] font-bold text-[var(--color-ink)]">
                  {tier.price}
                </span>
                <span className="text-[var(--text-md)] text-[var(--color-text-muted)] ml-[var(--space-2xs)]">
                  {tier.period}
                </span>
              </div>
              <p className="text-[var(--text-md)] text-[var(--color-text-muted)] mb-[var(--space-sm)]">
                {tier.description}
              </p>
              <ul className="space-y-[var(--space-xs)] mb-[var(--space-sm)]">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start text-[var(--text-md)] text-[var(--color-text-muted)]"
                  >
                    <span className="mr-[var(--space-2xs)] text-[var(--color-success)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-[var(--space-xs)] px-[var(--space-sm)] rounded text-[var(--text-md)] font-medium ${
                  tier.highlighted
                    ? 'bg-[var(--color-accent)] text-[var(--color-bg)]'
                    : 'bg-[var(--color-divider)] text-[var(--color-ink)]'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

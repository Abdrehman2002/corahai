import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Micro",
    price: "$450",
    period: "/mo",
    setupFee: "$1,200 setup",
    description: "Perfect for small practices",
    features: [
      "Up to 15 calls/day",
      "24/7 availability",
      "Bilingual support",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Small",
    price: "$750",
    period: "/mo",
    setupFee: "$1,800 setup",
    description: "Ideal for growing businesses",
    features: [
      "15-40 calls/day",
      "24/7 availability",
      "Bilingual support",
      "Advanced analytics",
      "Priority support",
      "Calendar integration",
    ],
    popular: true,
  },
  {
    name: "Medium",
    price: "$1,200",
    period: "/mo",
    setupFee: "$2,800 setup",
    description: "For high-volume operations",
    features: [
      "40-80 calls/day",
      "24/7 availability",
      "Bilingual support",
      "Full analytics suite",
      "Dedicated support",
      "Custom integrations",
      "Multi-location support",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that fits your call volume. No hidden fees, no surprises.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary shadow-card"
                  : "bg-card text-foreground border-border shadow-soft hover:shadow-medium"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-card text-foreground text-sm font-semibold rounded-full shadow-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-foreground/60"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-primary-foreground/70" : "text-foreground/60"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? "text-primary-foreground/70" : "text-foreground/50"}`}>
                  {plan.setupFee}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-primary-foreground/20" : "bg-secondary"
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 ${
                  plan.popular
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

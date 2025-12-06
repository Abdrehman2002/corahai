import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

const pricingTiers = [
  {
    name: "Micro Business",
    subtitle: "Solo operators, small operations (≤15 calls/day)",
    price: "$450–$650",
    setup: "$1,200–$1,500",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500",
  },
  {
    name: "Small Business",
    subtitle: "Salons, small shops (15-40 calls/day)",
    price: "$750–$1,100",
    setup: "$1,800–$2,200",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500",
  },
  {
    name: "Medium Business",
    subtitle: "Busy restaurants, gyms (40-80 calls/day)",
    price: "$1,200–$1,800",
    setup: "$2,800–$3,500",
    color: "from-amber-500 to-amber-600",
    borderColor: "border-amber-500",
  },
  {
    name: "High Volume",
    subtitle: "Med spas, clinics (80-150 calls/day)",
    price: "$2,000–$3,000",
    setup: "$4,500–$6,000",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-500",
  },
  {
    name: "Enterprise",
    subtitle: "Multi-location operations (150+ calls/day)",
    price: "$3,500–$6,000+",
    setup: "$8,000–$15,000",
    color: "from-red-500 to-red-600",
    borderColor: "border-red-500",
  },
];

const allFeatures = [
  "24/7 A.I. Phone Answering - Answers every call instantly",
  "Professional greeting customized to your business",
  "Captures caller information on every call",
  "Google Calendar integration - real-time availability",
  "Books, reschedules, and cancels appointments automatically",
  "Professional email confirmations sent instantly",
  "Every call logged automatically with full details",
  "Real-time dashboard showing all activity",
  "Easy to view, export, and track customer interactions",
  "Text alerts when appointments are booked",
  "Never miss important calls or bookings",
  "Bilingual support - fluent English and Spanish",
  "Automatic confirmations after every booking",
  "Reduces no-shows and keeps customers informed",
];

export function PricingNew() {
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
            Pricing That Scales With Your Business
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            CORAH pricing is customized based on your business needs — call volume, appointment frequency, and operational complexity.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl border border-border">
            <h3 className="text-3xl font-bold text-center mb-12">
              Pricing Ranges By Business Size
            </h3>

            <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-card p-6 rounded-2xl border-l-4 ${tier.borderColor} shadow-soft hover:shadow-medium transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{tier.name}</h4>
                      <p className="text-sm text-foreground/60">{tier.subtitle}</p>
                    </div>
                    <div className="text-right md:text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                        {tier.price}<span className="text-lg text-foreground/60 font-semibold">/mo</span>
                      </div>
                      <div className="text-sm text-foreground/50 mt-1">Setup: {tier.setup}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Features Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-card mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Every Package Includes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {allFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-primary" strokeWidth={3} />
                </div>
                <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-secondary/30 p-8 rounded-3xl border border-border text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Book a Free Consultation</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Every business is different. Let's discuss your specific needs and create a custom solution that delivers maximum ROI for your operation.
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0?cid=Y29yYWhhaS50eEBnbWFpbC5jb20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold shadow-medium hover:opacity-90 transition-all duration-200"
          >
            Schedule Pricing Consultation
            <ExternalLink size={20} />
          </a>
          <p className="mt-4 text-sm text-foreground/60">
            Flexible terms • Scalable pricing • ROI-focused
          </p>
        </motion.div>
      </div>
    </section>
  );
}

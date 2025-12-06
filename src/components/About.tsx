import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingDown, Users } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "24/7",
    description: "Always available — nights, weekends, holidays. CORAH never takes a break.",
  },
  {
    icon: DollarSign,
    title: "$2K–$5K",
    description: "Average monthly revenue recovered from missed calls and no-shows.",
  },
  {
    icon: TrendingDown,
    title: "25–40%",
    description: "Reduction in no-shows with automated reminders and confirmations.",
  },
  {
    icon: Users,
    title: "10–20hrs",
    description: "Staff time saved per week — freeing your team to focus on customers.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            About CORAH
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            CORAH is a Texas-built, AI-powered receptionist designed for service-based businesses.
            Built by Jonathan D. Cuellar (JD) in the Rio Grande Valley, CORAH helps businesses never
            miss a call, capture every lead, and stay responsive 24/7 — without hiring full-time staff.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={itemVariants}
              className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">
                {stat.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

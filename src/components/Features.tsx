import { motion } from "framer-motion";
import { Bot, Calendar, MessageSquare, TrendingUp, Clock, Shield } from "lucide-react";

const features = [
  {
    title: "24/7 Availability",
    description: "Never miss a call — nights, weekends, holidays. Your AI receptionist is always ready.",
    icon: Clock,
  },
  {
    title: "Appointment Booking",
    description: "Seamless Google Calendar integration for instant scheduling without human intervention.",
    icon: Calendar,
  },
  {
    title: "Bilingual Support",
    description: "Natural conversations in English and Spanish to serve all your customers.",
    icon: MessageSquare,
  },
  {
    title: "Revenue Recovery",
    description: "$2K-$5K/month recovered by answering missed calls that would otherwise be lost.",
    icon: TrendingUp,
  },
  {
    title: "AI-Powered Intelligence",
    description: "Smart call handling with natural language understanding and context awareness.",
    icon: Bot,
  },
  {
    title: "Enterprise Security",
    description: "Your data is protected with industry-leading security and compliance standards.",
    icon: Shield,
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

export function Features() {
  return (
    <section id="features" className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            What CORAH Does For You
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            CORAH handles the work that drains your time and costs you money — so you can focus on growing your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

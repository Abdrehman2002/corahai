import { motion } from "framer-motion";
import { PhoneOff, Clock3, UserX } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls",
    description: "42% of calls go unanswered during business hours. After hours? 100% are missed.",
  },
  {
    icon: Clock3,
    title: "Slow Response",
    description: "Customers won't wait. If you don't answer in 60 seconds, they call your competitor.",
  },
  {
    icon: UserX,
    title: "Lost Customers",
    description: "80% of customers who reach voicemail never call back — they just move on.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Problem() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            You're Losing Money Every Day
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Every missed call is a missed opportunity. Most businesses lose thousands per month simply because they can't answer fast enough.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 rounded-2xl text-center max-w-4xl mx-auto"
        >
          <p className="text-lg font-bold text-red-900 dark:text-red-200">
            A single missed call can cost you $500–$3,000 in lost revenue. How many calls are you missing right now?
          </p>
        </motion.div>
      </div>
    </section>
  );
}

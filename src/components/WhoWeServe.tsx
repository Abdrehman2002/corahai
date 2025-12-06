import { motion } from "framer-motion";

const industries = [
  "Medical & Dental Offices",
  "Salons, Spas & Medspas",
  "Real Estate Agencies",
  "Law Firms",
  "Auto Shops & Dealerships",
  "Fitness Centers & Gyms",
  "Service Companies (HVAC, Plumbing, Electrical)",
  "Small Businesses & Agencies",
  "Accounting & Financial Firms",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            Who We Serve
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            If your business thrives on customer interaction — CORAH keeps you connected, responsive, and professional 24/7.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry}
              variants={itemVariants}
              className="p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-foreground font-medium text-center">{industry}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-foreground/70">
            Serving the <span className="font-semibold text-foreground">Rio Grande Valley</span> & <span className="font-semibold text-foreground">Greater Dallas—Fort Worth</span> area.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

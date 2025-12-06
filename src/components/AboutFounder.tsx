import { motion } from "framer-motion";
import meImage from "@/assets/me.jpg";

export function AboutFounder() {
  return (
    <section id="about-founder" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            Meet the Founder
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border shadow-medium">
              <img
                src={meImage}
                alt="Jonathan Daniel Cuellar"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
              Jonathan Daniel Cuellar
            </h3>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed">
              <p>
                My name is Jonathan Daniel Cuellar, and the Rio Grande Valley is home. I grew up in a small, tight-knit community in South Texas where people work unbelievably hard—often harder than most will ever understand—yet still struggle to get ahead. Seeing friends, neighbors, and families put everything into their businesses and still barely make enough shaped how I view work, opportunity, and responsibility.
              </p>
              <p>
                My parents are two of the greatest blessings in my life. They gave me discipline, respect, and faith, and encouraged the belief that with enough work, anything is possible. They sacrificed for me and my siblings, supported ambitions that didn't always make sense, and created an environment where I felt capable of doing something meaningful.
              </p>
              <p>
                Growing up, I was quiet, introverted, curious, and always trying to solve problems in my own way. Technology and entrepreneurship fascinated me, and I always felt I was meant to build something of my own. I did well in school, but the idea of simply taking a traditional path into a high-finance desk job never fulfilled me. I wanted more—not just money, but impact.
              </p>
              <p>
                In 2025, at 19 and a freshman in college, I created CORAH because I felt called to. As AI changed the world, the Valley was being left behind. Businesses still used old methods while cities like Dallas rapidly advanced. I wanted the RGV not just to catch up, but to compete.
              </p>
              <p>
                Outside of business, my life is centered around faith, self-improvement, discipline, and family. My journey hasn't been perfect, but purposeful. My vision is simple: I want CORAH in every business across the Rio Grande Valley—to help this community evolve, grow, and prove it is a place of innovation, opportunity, and ambition.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

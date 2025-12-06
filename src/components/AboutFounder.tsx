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
                I'm a 19-year-old entrepreneur from the Rio Grande Valley, and CORAH is my way of bringing cutting-edge AI to the community I grew up in. I was raised in South Texas in a tight-knit community where everyone knows everyone, and where hard work and family come first. My parents instilled in me discipline, faith, and a relentless work ethic, and those values have shaped everything I do.
              </p>
              <p>
                Growing up, I was always drawn to entrepreneurship and technology. I watched my dad run his own business, and I was fascinated by the idea of building something from the ground up. That fascination led me to start CORAH in 2025, during my freshman year of college. While my peers were settling into dorm life, I was building a company that I believed could change the way small businesses operate in the Valley.
              </p>
              <p>
                CORAH is more than just a business to me—it's a mission. The Rio Grande Valley is full of hardworking entrepreneurs who deserve the same tools and technologies as businesses in bigger cities. AI is revolutionizing the way companies interact with their customers, and I want every business owner in the Valley to have access to that innovation. Whether it's a dental office in McAllen, a law firm in Brownsville, or a salon in Harlingen, CORAH is here to help them stay connected, professional, and ahead of the curve.
              </p>
              <p>
                Outside of CORAH, I'm a BJJ athlete, a gym rat, and someone who deeply values faith and family. I believe in working hard, staying grounded, and never forgetting where I came from. My goal is simple: CORAH in every business across the Rio Grande Valley. I'm just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

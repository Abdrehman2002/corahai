import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import {
  PhoneOff,
  Clock,
  Calendar,
  TrendingUp,
  MessageSquare,
  Shield,
  Timer,
} from "lucide-react";

// Reusable BentoItem component
interface BentoItemProps {
  className?: string;
  children: React.ReactNode;
}

const BentoItem: React.FC<BentoItemProps> = ({ className = '', children }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={`bento-item ${className}`}>
      {children}
    </div>
  );
};

export function ProblemSolutionFeatures() {
  return (
    <section id="features" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px", amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            You're Losing Money Every Day
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Every missed call is a missed opportunity. Here's how CORAH solves your biggest challenges.
          </p>
        </motion.div>

        <div className="bento-grid opacity-0 animate-fade-in animation-delay-100">
            <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-foreground flex items-center justify-center mb-3 sm:mb-4">
                  <PhoneOff className="w-6 h-6 sm:w-7 sm:h-7 text-background" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                  Never Miss Another Call
                </h2>
                <p className="mt-2 text-sm sm:text-base text-foreground/70 leading-relaxed">
                  42% of calls go unanswered during business hours. After hours? 100% are missed. CORAH ensures you capture every opportunity, 24/7/365. Your AI receptionist answers instantly, every single time—no voicemail, no busy signals, no lost customers.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-secondary/30 rounded-xl">
                <p className="text-xs sm:text-sm text-foreground/60 font-medium mb-1 sm:mb-2">Impact</p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
                <p className="text-xs sm:text-sm text-foreground/70 mt-1">Call answer rate, day or night</p>
              </div>
            </BentoItem>

            <BentoItem>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-foreground flex items-center justify-center mb-2 sm:mb-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                24/7 Availability
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Never miss a call — nights, weekends, holidays. Your AI receptionist is always ready to serve your customers when they need you most.
              </p>
            </BentoItem>

            <BentoItem>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-foreground flex items-center justify-center mb-2 sm:mb-3">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                Instant Response
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Customers won't wait. If you don't answer in 60 seconds, they call your competitor. CORAH responds instantly, keeping customers engaged.
              </p>
            </BentoItem>

            <BentoItem className="row-span-2 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-foreground flex items-center justify-center mb-2 sm:mb-3">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                  Revenue Recovery
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  80% of customers who reach voicemail never call back — they just move on. CORAH recovers $2K-$5K per month by answering the calls you would have missed.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-secondary/30 rounded-xl">
                <p className="text-xs sm:text-sm text-foreground/60 font-medium mb-1">Monthly Recovery</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">$2K-$5K</p>
              </div>
            </BentoItem>

            <BentoItem className="col-span-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-foreground flex items-center justify-center mb-2 sm:mb-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                Smart Appointment Booking
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Seamless Google Calendar integration for instant scheduling without human intervention. CORAH books appointments, logs requests, and syncs everything to your calendar in real-time.
              </p>
            </BentoItem>

            <BentoItem>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-foreground flex items-center justify-center mb-2 sm:mb-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                Bilingual Support
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Natural conversations in English and Spanish to serve all your customers across the Rio Grande Valley and beyond.
              </p>
            </BentoItem>

            <BentoItem className="flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-foreground flex items-center justify-center mb-2 sm:mb-3">
                  <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                  Staff Time Saved
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  Free up 10-20 hours per week of staff time previously spent answering routine calls, booking appointments, and handling FAQs. Let your team focus on what matters most.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-secondary/30 rounded-xl">
                <p className="text-xs sm:text-sm text-foreground/60 font-medium mb-1">Weekly Savings</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">10-20 hrs</p>
              </div>
            </BentoItem>
          </div>

        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 rounded-xl sm:rounded-2xl text-center max-w-4xl mx-auto opacity-0 animate-fade-in animation-delay-300">
          <p className="text-base sm:text-lg font-bold text-red-900 dark:text-red-200">
            A single missed call can cost you $500–$3,000 in lost revenue. How many calls are you missing right now?
          </p>
        </div>
      </div>
    </section>
  );
}

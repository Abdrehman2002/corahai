import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

export function InstagramChatButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://ig.me/m/corah.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 20
        }}
        transition={{ duration: 0.2 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
      >
        <div className="bg-foreground text-background px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
          Chat on Instagram
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-foreground"></div>
        </div>
      </motion.div>

      {/* Main Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 bg-foreground rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Button */}
        <div className="relative w-16 h-16 bg-foreground hover:bg-foreground/90 rounded-full shadow-lg flex items-center justify-center transition-all duration-300">
          {/* Instagram Icon */}
          <div className="relative">
            <Instagram className="w-7 h-7 text-background" strokeWidth={2} />
            {/* Message Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center">
              <MessageCircle className="w-2.5 h-2.5 text-foreground" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Hover Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-foreground"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.15 : 1,
            opacity: isHovered ? 0.3 : 0
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.a>
  );
}

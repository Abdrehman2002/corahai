import { Suspense, Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavBar } from "./NavBar";
import Spline from "@splinetool/react-spline";
import type { SPEObject, Application } from "@splinetool/runtime";

// Error Boundary to catch Spline errors
class SplineErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Interactive gradient background that responds to mouse
function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="w-full h-full transition-all duration-300 ease-out"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
          hsl(40, 10%, 96%) 0%,
          hsl(40, 10%, 94%) 25%,
          hsl(40, 10%, 92%) 50%,
          hsl(40, 10%, 90%) 100%)`
      }}
    />
  );
}

export function Hero() {
  return (
    <header className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* Spline 3D Background - Responds to cursor but not clickable/draggable */}
      <div className="absolute inset-0 md:-inset-10 lg:-inset-20">
        <SplineErrorBoundary
          fallback={<InteractiveBackground />}
        >
          <Suspense fallback={<InteractiveBackground />}>
            <div
              className="w-full h-full scale-100 md:scale-105 lg:scale-110"
              style={{
                userSelect: 'none'
              }}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
              onDragStart={(e) => e.preventDefault()}
            >
              <Spline
                scene="https://prod.spline.design/CXF69xuCfWVJE4Wu/scene.splinecode"
                style={{ cursor: 'default' }}
              />
            </div>
          </Suspense>
        </SplineErrorBoundary>
      </div>

      {/* NavBar - Floating at top */}
      <NavBar />

      {/* Hero Content - On top with pointer events only on interactive elements */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 pt-20 pb-16" style={{ pointerEvents: 'none' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          CORAH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-4 sm:mt-6 text-lg xs:text-xl md:text-2xl text-foreground/80 max-w-xl font-medium px-4"
        >
          Always on. Always Professional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4"
          style={{ pointerEvents: 'auto' }}
        >
          <a
            href="#dashboard"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#dashboard");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full text-base sm:text-lg font-semibold shadow-medium hover:opacity-90 transition-all duration-200 hover:shadow-card w-full sm:w-auto text-center"
          >
            Get a Demo
          </a>
          <a
            href="#features"
            className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-foreground text-foreground rounded-full text-base sm:text-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-200 w-full sm:w-auto text-center"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </header>
  );
}

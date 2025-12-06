import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Check, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { RetellWebClient } from "retell-client-js-sdk";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";

const AGENTS = [
  {
    id: "agent_71d88e63296903b65f6dc0d372",
    label: "Real Estate Receptionist",
    description: "Property inquiries & showings",
  },
  {
    id: "agent_8ce17d51123f73b631cb29c6e0",
    label: "Medical Receptionist",
    description: "Patient scheduling & support",
  },
  {
    id: "agent_2c8c98f3046de28c6c9d7fa086",
    label: "Law Firm Receptionist",
    description: "Legal consultations & appointments",
  },
  {
    id: "agent_26634c1417075ff72793ffe658",
    label: "Spa/Salon Receptionist",
    description: "Beauty appointments & services",
  },
  {
    id: "agent_68d22a69f45a3ee37168684831",
    label: "AutoCare Receptionist",
    description: "Service scheduling & quotes",
  },
  {
    id: "agent_6ecbb6ef0fa72411251e18a0a1",
    label: "Fitness/Gym Receptionist",
    description: "Membership & class booking",
  },
];

const retellClient = new RetellWebClient();

export function FeaturedDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<typeof AGENTS[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [callStatus, setCallStatus] = useState<"idle" | "calling" | "connected" | "ended">("idle");

  const handleSelect = (agent: typeof AGENTS[0]) => {
    setSelected(agent);
    setIsOpen(false);
  };

  const startCall = async () => {
    if (!selected) return;

    try {
      setIsLoading(true);
      setCallStatus("calling");

      const response = await fetch("https://api.retellai.com/v2/create-web-call", {
        method: "POST",
        headers: {
          "Authorization": "Bearer key_b09d4e14ea93044cf9c6145ba672",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agent_id: selected.id }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Retell API error:", data);
        throw new Error(data.message || "Failed to create web call");
      }

      if (!data.access_token) {
        throw new Error("No access token received");
      }

      retellClient.on("call_started", () => {
        setCallStatus("connected");
        console.log("Call started");
      });

      retellClient.on("call_ended", () => {
        setCallStatus("ended");
        console.log("Call ended");
        setTimeout(() => {
          setCallStatus("idle");
        }, 2000);
      });

      await retellClient.startCall({ accessToken: data.access_token });
      console.log("Web call initiated:", data.call_id);
    } catch (err: any) {
      console.error("Error starting call:", err);
      alert("Error starting call: " + (err.message || err));
      setCallStatus("idle");
    } finally {
      setIsLoading(false);
    }
  };

  const endCall = () => {
    try {
      retellClient.stopCall();
      setCallStatus("ended");
      setTimeout(() => {
        setCallStatus("idle");
      }, 2000);
    } catch (err: any) {
      console.error("Error ending call:", err);
    }
  };

  return (
    <section id="dashboard" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            AI that Talks, Books, and Follows Up— So You Don't Have To.
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Real-time metrics, call analytics, and revenue tracking — all in one powerful admin panel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Outer glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-b from-foreground/5 to-transparent rounded-3xl blur-2xl" />
          
          {/* Main container */}
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-border bg-card p-3 md:p-4">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-3 px-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 h-7 bg-secondary rounded-lg ml-3" />
            </div>

            {/* Screenshot */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={dashboardScreenshot}
                alt="CORAH Admin Dashboard showing call analytics, revenue metrics, and appointment status"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Try Agent Section - Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border shadow-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Try Our Agent for Free
                </h3>
                <p className="text-foreground/70 text-lg">
                  Experience CORAH in action — choose an agent and start a live demo call
                </p>
              </div>

              <div className="flex-1 w-full max-w-md space-y-4">
                {/* Dropdown */}
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                      "w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 bg-background border-border text-foreground hover:border-primary flex items-center justify-between"
                    )}
                  >
                    <span className="font-medium text-left">
                      {selected ? selected.label : "Select an agent"}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute w-full mt-2 rounded-xl border-2 border-border overflow-hidden shadow-2xl bg-background z-50"
                      >
                        {AGENTS.map((agent, index) => (
                          <motion.button
                            key={agent.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            onClick={() => handleSelect(agent)}
                            className={cn(
                              "w-full px-6 py-4 text-left transition-colors duration-200 hover:bg-secondary text-foreground flex items-center justify-between group",
                              index !== AGENTS.length - 1 && "border-b border-border"
                            )}
                          >
                            <div>
                              <div className="font-medium">{agent.label}</div>
                              <div className="text-sm text-muted-foreground">
                                {agent.description}
                              </div>
                            </div>
                            {selected?.id === agent.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                <Check className="w-5 h-5 text-primary" />
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Call Buttons */}
                {callStatus === "connected" ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={endCall}
                    className="w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 bg-red-600 text-white shadow-medium hover:bg-red-700"
                  >
                    <PhoneOff className="w-5 h-5" />
                    End Call
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: selected && !isLoading && callStatus === "idle" ? 1.02 : 1 }}
                    whileTap={{ scale: selected && !isLoading && callStatus === "idle" ? 0.98 : 1 }}
                    onClick={startCall}
                    disabled={!selected || isLoading || callStatus !== "idle"}
                    className={cn(
                      "w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3",
                      selected && !isLoading && callStatus === "idle"
                        ? "bg-primary text-primary-foreground shadow-medium hover:opacity-90"
                        : "bg-secondary text-muted-foreground cursor-not-allowed"
                    )}
                  >
                    <Phone className={cn("w-5 h-5", callStatus === "calling" && "animate-bounce")} />
                    {callStatus === "idle" && "Start Demo Call"}
                    {callStatus === "calling" && "Connecting..."}
                    {callStatus === "ended" && "Call Ended"}
                  </motion.button>
                )}

                <p className="text-xs text-center text-muted-foreground">
                  No payment required • Live demo call • Instant connection
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

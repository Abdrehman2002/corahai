"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  PhoneOutgoing,
  CheckCircle2,
  Calendar,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useExpandable } from "@/hooks/use-expandable";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: "inbound" | "outbound";
  services: string[];
  addOns: string[];
  features: Array<{ title: string; description: string }>;
  isPopular?: boolean;
}

export function ServiceCard({
  title,
  subtitle,
  icon,
  services,
  addOns,
  features,
  isPopular = false,
}: ServiceCardProps) {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  const IconComponent = icon === "inbound" ? Phone : PhoneOutgoing;

  return (
    <Card
      className="w-full cursor-pointer transition-all duration-300 hover:shadow-lg border-2"
      onClick={toggleExpand}
    >
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start w-full">
          <div className="space-y-3">
            {isPopular && (
              <Badge variant="default" className="bg-foreground text-background">
                Most Popular
              </Badge>
            )}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                <p className="text-sm text-foreground/70">{subtitle}</p>
              </div>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle learn more action
                  }}
                >
                  Learn More
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View detailed information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-foreground">Base Services</h4>
            <ul className="space-y-1">
              {services.slice(0, isExpanded ? services.length : 3).map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            style={{ height: animatedHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div ref={contentRef}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 pt-2"
                  >
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Add-Ons Available
                      </h4>
                      <ul className="space-y-1">
                        {addOns.map((addon, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <span className="text-foreground/50 mt-0.5">◦</span>
                            <span>{addon}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Key Features</h4>
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="p-3 bg-secondary/30 rounded-lg space-y-1"
                        >
                          <h5 className="font-medium text-sm text-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {feature.title}
                          </h5>
                          <p className="text-xs text-foreground/70">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Button
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle get started action
                        }}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Get Started
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex items-center justify-between w-full text-sm text-foreground/60">
          <span>{services.length} base services included</span>
          <span className="text-foreground font-medium">
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

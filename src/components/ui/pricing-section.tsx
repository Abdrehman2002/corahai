import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Micro Business",
    monthlyPrice: "$450–$650",
    annuallyPrice: "$450–$650",
    setup: "$1,200–$1,500",
    desc: "Solo operators, small operations (≤15 calls/day)",
    features: [
      "24/7 A.I. Phone Answering",
      "Google Calendar Integration",
      "Email Confirmations",
      "Call Logging & Dashboard",
      "Bilingual Support (EN/ES)",
      "SMS Notifications",
    ],
  },
  {
    title: "Small Business",
    monthlyPrice: "$750–$1,100",
    annuallyPrice: "$750–$1,100",
    setup: "$1,800–$2,200",
    desc: "Salons, small shops (15-40 calls/day)",
    features: [
      "Everything in Micro",
      "Priority Support",
      "Advanced Analytics",
      "Custom Greetings",
      "Appointment Reminders",
      "Multi-user Dashboard",
    ],
    popular: true,
  },
  {
    title: "Medium Business",
    monthlyPrice: "$1,200–$1,800",
    annuallyPrice: "$1,200–$1,800",
    setup: "$2,800–$3,500",
    desc: "Busy restaurants, gyms (40-80 calls/day)",
    features: [
      "Everything in Small",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Advanced Call Routing",
      "Priority Queue",
      "Monthly Strategy Calls",
    ],
  },
  {
    title: "High Volume",
    monthlyPrice: "$2,000–$3,000",
    annuallyPrice: "$2,000–$3,000",
    setup: "$4,500–$6,000",
    desc: "Med spas, clinics (80-150 calls/day)",
    features: [
      "Everything in Medium",
      "Multi-location Support",
      "Custom Workflows",
      "API Access",
      "Dedicated Phone Lines",
      "White-glove Onboarding",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: "$3,500–$6,000+",
    annuallyPrice: "$3,500–$6,000+",
    setup: "$8,000–$15,000",
    desc: "Multi-location operations (150+ calls/day)",
    features: [
      "Everything in High Volume",
      "Custom SLA",
      "Enterprise Security",
      "Dedicated Infrastructure",
      "24/7 Priority Support",
      "Custom Contract Terms",
    ],
  },
];

const PlanCard = ({
  plan,
  billing,
}: {
  plan: typeof plans[0];
  billing: "monthly" | "annual";
}) => {
  const price = billing === "annual" ? plan.annuallyPrice : plan.monthlyPrice;

  return (
    <div
      className={cn(
        "flex flex-col relative rounded-2xl transition-all bg-card border overflow-hidden",
        plan.popular
          ? "border-2 border-primary ring-2 ring-primary/20"
          : "border border-border",
        plan.title === "Enterprise" && "border-2 border-foreground/20"
      )}
    >
      {plan.popular && (
        <div className="absolute top-0 inset-x-0 mx-auto">
          <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 sm:px-4 text-center">
            Most Popular
          </div>
        </div>
      )}

      {plan.title === "Enterprise" && (
        <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-foreground/10 rounded-2xl blur-[8rem] -z-10"></div>
      )}

      <div className={cn("p-4 sm:p-6 flex flex-col items-start w-full relative", plan.popular && "pt-8 sm:pt-10")}>
        <h2 className="font-semibold text-sm sm:text-base text-foreground">{plan.title}</h2>
        <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
          {price}
          <span className="text-xs sm:text-sm font-normal text-muted-foreground">
            /mo
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">{plan.desc}</p>
        <p className="text-xs text-muted-foreground mt-1">Setup: {plan.setup}</p>
      </div>

      <div className="flex flex-col items-start w-full px-4 sm:px-6 pb-4 sm:pb-6">
        <Button size="lg" className="w-full text-xs sm:text-sm" asChild>
          <a href="https://calendly.com/corahai/30min?month=2025-12" target="_blank" rel="noopener noreferrer">
            Schedule Consultation
          </a>
        </Button>
        <div className="h-8 overflow-hidden w-full mx-auto">
          <p className="text-xs text-center text-muted-foreground mt-3 mx-auto block">
            Custom pricing based on needs
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start w-full px-4 sm:px-6 pb-4 sm:pb-6 gap-y-1.5 sm:gap-y-2 border-t border-border pt-4 sm:pt-6">
        <span className="text-xs font-semibold mb-1 sm:mb-2">Includes:</span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-1.5 sm:gap-2">
            <CheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-primary mt-0.5" />
            <span className="text-left text-xs sm:text-sm text-foreground/80">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [billing] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4 sm:mb-6 px-2">
            Pricing That Scales With Your Business
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            CORAH pricing is customized based on your business needs — call volume, appointment frequency, and operational complexity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} billing={billing} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you?
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="https://calendly.com/corahai/30min?month=2025-12" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Flexible terms • Scalable pricing • ROI-focused
          </p>
        </div>
      </div>
    </section>
  );
}

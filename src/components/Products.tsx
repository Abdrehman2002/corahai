import { ProductCard } from "@/components/ui/product-card";

const inboundServices = [
  "24/7 call answering",
  "Business information delivery",
  "Handles FAQs & general queries",
  "Appointment booking + request logging",
  "Call transfers to human staff",
  "SMS follow-ups (basic)",
  "Multilanguage support (preset languages)",
];

const outboundServices = [
  "Automated follow-up calls",
  "Lead qualification surveys",
  "Appointment reminders",
  "Order / status updates",
  "Feedback collection",
  "SMS follow-ups (basic)",
  "Multilanguage support (preset languages)",
];

const inboundAddOns = [
  "CRM Data Entry + Pipeline Actions",
  "Lead Qualification (AI-Driven)",
  "Google Workspace Integration",
  "HubSpot Integration",
  "Zoho Integration",
  "GoHighLevel Integration",
  "Calendly Integration",
  "Other Tool Integrations",
  "WhatsApp follow-ups",
  "Advanced analytics dashboard",
  "Payment collection workflow",
  "Escalation logic",
  "Real-time CRM sync",
  "Custom voice tone",
  "Voice cloning",
  "Multi-step IVR workflows",
];

const outboundAddOns = [
  "CRM Data Entry + Pipeline Actions",
  "Lead Qualification (AI-Driven)",
  "Google Workspace Integration",
  "HubSpot Integration",
  "Zoho Integration",
  "GoHighLevel Integration",
  "Calendly Integration",
  "Other Tool Integrations",
  "No-Show Follow-Up Flow",
  "Quote Follow-Up System",
  "Membership Renewal Reminders",
  "Intake Form → CRM Sync",
  "Custom Lead Quote Workflow",
  "Review Request Flow",
];

export function Products() {
  return (
    <section id="products" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            Products
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-start">
          <div className="h-full opacity-0 animate-fade-in animation-delay-100">
            <ProductCard
              title="Inbound Voice Agent"
              subtitle="Always On. Always Professional."
              icon="inbound"
              services={inboundServices}
              addOns={inboundAddOns}
              isPopular={true}
            />
          </div>

          <div className="h-full opacity-0 animate-fade-in animation-delay-200">
            <ProductCard
              title="Outbound Voice Agent"
              subtitle="Your 24/7 Follow-Up Specialist."
              icon="outbound"
              services={outboundServices}
              addOns={outboundAddOns}
              isComingSoon={true}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-secondary/50 border border-border rounded-xl max-w-4xl mx-auto opacity-0 animate-fade-in animation-delay-300">
          <p className="text-sm text-foreground/70 text-center">
            <span className="font-semibold text-foreground">Disclaimer:</span> Outbound Agent can only be purchased if you already have an Inbound Agent. This ensures accurate data tracking and stable CRM workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

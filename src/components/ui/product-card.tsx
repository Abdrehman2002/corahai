import React from "react";
import {
  Phone,
  PhoneOutgoing,
  CheckCircle2,
  Plus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  subtitle: string;
  icon: "inbound" | "outbound";
  services: string[];
  addOns: string[];
  isPopular?: boolean;
}

export function ProductCard({
  title,
  subtitle,
  icon,
  services,
  addOns,
  isPopular = false,
}: ProductCardProps) {
  const IconComponent = icon === "inbound" ? Phone : PhoneOutgoing;

  return (
    <Card className="w-full border-2 border-border h-full flex flex-col">
      <CardHeader className="space-y-3 flex-shrink-0 p-4 sm:p-6">
        {isPopular && (
          <Badge variant="default" className="bg-foreground text-background w-fit text-xs sm:text-sm">
            Most Popular
          </Badge>
        )}
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
              {title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70">{subtitle}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Base Services */}
        <div className="space-y-2 sm:space-y-3">
          <h4 className="text-base sm:text-lg font-semibold text-foreground">
            Base Services (Included)
          </h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add-Ons */}
        <div className="space-y-2 sm:space-y-3">
          <h4 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            Add-Ons (Optional)
          </h4>
          <ul className="columns-1 md:columns-2 column-gap-4 sm:column-gap-6 space-y-1.5 sm:space-y-2">
            {addOns.map((addon, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm break-inside-avoid">
                <span className="text-foreground/50 mt-0.5 flex-shrink-0">◦</span>
                <span className="text-foreground/70">{addon}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

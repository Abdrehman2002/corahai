import { AnimatedFooter } from "@/components/ui/modem-animated-footer";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/corah.ai/",
      label: "Instagram",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      href: "https://www.tiktok.com/@corah.ai?_r=1&_t=ZP-91xRM3lwHbb",
      label: "TikTok",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/110243948/admin/dashboard/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:corahai.tx@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <AnimatedFooter
      brandName="CORAH"
      brandDescription="Your 24/7 Operational Assistant — Built in Texas. Serving the Rio Grande Valley & Greater Dallas—Fort Worth area."
      creatorName="Jonathan D. Cuellar"
      creatorUrl="https://corahaitx.com"
      socialLinks={socialLinks}
      navLinks={navLinks}
      brandIcon={<Phone className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" />}
    />
  );
}

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Palette, DollarSign, Zap, Star, Crown } from "lucide-react";

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Work", id: "/work" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Team", id: "/team" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Picasso"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardEight
          title="Our Design Services"
          description="Comprehensive design solutions tailored to elevate your brand and engage your audience"
          tag="Services"
          tagIcon={Palette}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Brand Identity",
              description: "Complete brand development from logo design to brand guidelines, creating cohesive visual identities that resonate with your target audience.",
              imageSrc: "https://pixabay.com/get/g3bb483c232c26d3ad3ceb6e4a6831108ff0f18d64fbc5e9721d2b725db8c2ce90f57e0eb50b19b0883a33b2c6782a6214012957f50f3ff9837df64af354ad3d1_1280.jpg",
              imageAlt: "Brand identity design process"
            },
            {
              id: 2,
              title: "Web Design",
              description: "Modern, responsive websites that combine beautiful aesthetics with exceptional user experience and optimal performance across all devices.",
              imageSrc: "https://pixabay.com/get/g27ab5fa15eae38b25fbf704b6baee61f1c5969df6234e467eeb7a79cfb6713270f7f6728c5849804431bef88c05c5b9541d946eedc3ef2082187789a34d3311c_1280.jpg",
              imageAlt: "Website design development process"
            },
            {
              id: 3,
              title: "Print Design",
              description: "From business cards to large-format displays, we create impactful print materials that maintain brand consistency and quality.",
              imageSrc: "https://pixabay.com/get/gbae472093a9381305c0d9c90384b9539d5914c1b4937df3409e73654fec45b8648bc576d77493d057d6b6bcc32c1174a733c768f9bb1868a03db431c7ad228db_1280.jpg",
              imageAlt: "Print design brochure layout"
            },
            {
              id: 4,
              title: "Digital Marketing",
              description: "Eye-catching digital campaigns, social media graphics, and online advertising materials that drive engagement and conversions.",
              imageSrc: "https://pixabay.com/get/g8470e80ba806553e88fd5aed65e61ec19d92eaddae63451060646f78a06cf2953c484decb821856d4c1cc8976ce9b012fd4069ca397a00a4b33a1e75169fd8e5_1280.jpg",
              imageAlt: "Digital marketing design social media"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Design Packages"
          description="Choose the perfect package for your design needs and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Starter",
              badgeIcon: Zap,
              price: "$2,500",
              subtitle: "Perfect for small businesses",
              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Learn More", href: "/about" }
              ],
              features: [
                "Logo design + 2 revisions",
                "Basic brand guidelines",
                "Business card design",
                "1 month support"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$5,500",
              subtitle: "Comprehensive brand solution",
              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "View Portfolio", href: "/work" }
              ],
              features: [
                "Complete brand identity",
                "Website design (5 pages)",
                "Marketing materials",
                "3 months support",
                "Brand strategy consultation"
              ]
            },
            {
              id: "enterprise",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$12,000",
              subtitle: "Full-scale brand transformation",
              buttons: [
                { text: "Contact Sales", href: "/contact" },
                { text: "Custom Quote", href: "/contact" }
              ],
              features: [
                "Full brand ecosystem",
                "Custom website development",
                "Digital marketing suite",
                "6 months support",
                "Dedicated account manager",
                "Brand training workshop"
              ]
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          brandName="Picasso"
          copyrightText="© 2025 | Picasso Design Studio"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Brand Identity", href: "/services" },
                { label: "Web Design", href: "/services" },
                { label: "Print Design", href: "/services" },
                { label: "Digital Marketing", href: "/services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Portfolio", href: "/work" },
                { label: "Testimonials", href: "/about" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get Started", href: "/contact" },
                { label: "Pricing", href: "/services" },
                { label: "Support", href: "/contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
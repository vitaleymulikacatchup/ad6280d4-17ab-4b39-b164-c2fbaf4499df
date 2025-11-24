"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Mail } from "lucide-react";

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Brand?"
          description="Join our newsletter to receive design insights, industry trends, and exclusive project updates from the Picasso team."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and can unsubscribe at any time."
          imageSrc="https://pixabay.com/get/gb2b40884b6739c90aa5a0a2e41505dc2e0b14915651d7dd45231789defe628aface751e9e82b38c5602f87671960fb42305107345c548284a46867905f8ed195_1280.jpg"
          imageAlt="Contact us for your design needs"
          mediaPosition="right"
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
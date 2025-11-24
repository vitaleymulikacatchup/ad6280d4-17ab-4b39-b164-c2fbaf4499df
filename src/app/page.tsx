"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Target } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Creative Design Studio"
          description="We transform ideas into stunning visual experiences that captivate audiences and drive results. From branding to digital design, we craft solutions that make your business stand out."
          tag="Design Excellence"
          tagIcon={Sparkles}
          buttons={[
            { text: "View Our Work", href: "/work" },
            { text: "Get Started", href: "/contact" }
          ]}
          imageSrc="https://pixabay.com/get/gb2b40884b6739c90aa5a0a2e41505dc2e0b14915651d7dd45231789defe628aface751e9e82b38c5602f87671960fb42305107345c548284a46867905f8ed195_1280.jpg"
          imageAlt="Modern design studio workspace with creative professionals"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Mission"
          tagIcon={Target}
          title="Bringing Ideas to Life"
          description="We believe great design has the power to transform businesses and connect with people on an emotional level. Our team combines creativity with strategy to deliver exceptional results."
          buttons={[
            { text: "Learn More", href: "/team" },
            { text: "Our Process", href: "/services" }
          ]}
          phoneOne={{
            imageSrc: "https://pixabay.com/get/gda1d5882699aab12e90fad942bb75bf8d947963a815da8d752d80e1379a4abf692f93a6cf8d69da7afa5e10da91ae14cb9b2eca1023637f773264b4fbaf3dcf6_1280.jpg",
            imageAlt: "Design team collaboration process"
          }}
          phoneTwo={{
            imageSrc: "https://pixabay.com/get/g75a6e444a9789aeed4511f40c781972a6c78a7d665646d26914989bf43be8328f93e4ba7333fb489a87d907f27307c94c7106865997e5dc7b5cb08dd56cf1e2e_1280.jpg",
            imageAlt: "Creative design process interface"
          }}
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
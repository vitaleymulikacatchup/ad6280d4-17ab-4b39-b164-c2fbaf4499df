"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Users } from "lucide-react";

export default function TeamPage() {
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

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Creative Team"
          description="Talented professionals passionate about bringing your vision to life"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="scale-rotate"
          members={[
            {
              id: "1",
              name: "Alexandra Chen",
              role: "Creative Director",
              description: "Leading creative vision with 12+ years in brand strategy and visual storytelling. Former creative lead at top agencies.",
              imageSrc: "https://pixabay.com/get/g4d3939a8af32ae296bceef9ea66867608817d54780920e31dae98662633c461ea9b082f455df9cb1785e60c0b0657f294e96d3ef18b7c90273899b88932ec92c_1280.jpg",
              imageAlt: "Alexandra Chen - Creative Director",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/alexandra-chen" },
                { icon: "Twitter", url: "https://twitter.com/alex_designs" }
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Senior Designer",
              description: "Specializes in brand identity and print design. Award-winning designer with expertise in creating memorable visual experiences.",
              imageSrc: "https://pixabay.com/get/g4afe30f98f9a882c1a9f12a772da0975bca378be55bd813143d2a801f67c42e4ff7949b46aef26aeab09d286ee92d88e28571aa52a7d64ae50052f4e385e6865_1280.jpg",
              imageAlt: "Marcus Rodriguez - Senior Designer",
              socialLinks: [
                { icon: "Dribbble", url: "https://dribbble.com/marcus_r" },
                { icon: "Instagram", url: "https://instagram.com/marcus_designs" }
              ]
            },
            {
              id: "3",
              name: "Sarah Kim",
              role: "UX/UI Designer",
              description: "Creates intuitive digital experiences focused on user-centered design principles. Expert in web and mobile interfaces.",
              imageSrc: "https://pixabay.com/get/g3158867378ed56febf40fc9d6288de0493a3276f6a47d1b215c2554ab46dcfcc110b1265890cbb85c9c5deea130e082e87b62bc1461361362d7bbbe014141307_1280.jpg",
              imageAlt: "Sarah Kim - UX/UI Designer",
              socialLinks: [
                { icon: "Behance", url: "https://behance.net/sarah_ux" },
                { icon: "Linkedin", url: "https://linkedin.com/in/sarah-kim-ux" }
              ]
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Brand Strategist",
              description: "Develops comprehensive brand strategies that align with business goals. Former consultant with Fortune 500 experience.",
              imageSrc: "https://pixabay.com/get/gca9708bf15990fec3ec7e278b87a6e387b9ddb88409c1a7214c0205c4cfbb3d80a2aeb3da4b5a6a22cdc4725ddaff74107059b633e3dba16d8afc0abb309e705_1280.jpg",
              imageAlt: "David Thompson - Brand Strategist",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/david-thompson-brand" },
                { icon: "Twitter", url: "https://twitter.com/brand_david" }
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
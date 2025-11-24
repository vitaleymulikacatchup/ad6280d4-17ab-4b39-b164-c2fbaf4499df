"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MessageSquare } from "lucide-react";

export default function AboutPage() {
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

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform through exceptional design"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Emily Foster",
              role: "CEO",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g43b021b2b06f6d76cba66389e0e79d4184108a20a90ef8f4df08f33f79cc2b113e9ba20f9e3fcce1b33faba6b598af99ebccf19cbd3e397ac27a0d83a8db4d80_1280.jpg",
              imageAlt: "Emily Foster - CEO of TechStart Inc"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2fd3c9fe1db21fb7b9624d207b6052dcda26c32e6483eecbdea20e27b661ff8be45130d648b956cc216d0ef316417cd46275037b9a5d67480c4554b0e6072349_1280.jpg",
              imageAlt: "Michael Chen - Marketing Director of GrowthCo"
            },
            {
              id: "3",
              name: "Jessica Martinez",
              role: "Founder",
              company: "Bloom Wellness",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g369e067c19269d70da518a3bcdc93cf7489da08f5b1838898498626ae16fb0f884ef18ac0f3c0f871bb1206ef7b044db2923307e76b74a970f327b0a6fcf44af_1280.jpg",
              imageAlt: "Jessica Martinez - Founder of Bloom Wellness"
            },
            {
              id: "4",
              name: "Robert Kim",
              role: "Brand Manager",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge2ea6de5190cf396372589b4007fd9784f75637e501151ca7c2b1c055500af769a6bf85a9dee0c066cf4455133f161bc617eb58edaef2aeb4bff6679e7f656ee_1280.jpg",
              imageAlt: "Robert Kim - Brand Manager of Innovation Labs"
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
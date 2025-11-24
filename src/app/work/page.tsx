"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Briefcase, Award, Users, Trophy, Handshake } from "lucide-react";

export default function WorkPage() {
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

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Work"
          description="Explore our portfolio of successful design projects and brand transformations"
          tag="Portfolio"
          tagIcon={Briefcase}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Brand Identity Suite",
              price: "View Project",
              imageSrc: "https://pixabay.com/get/g221237ae353b36f9b8d453353e3c1f451d71ec333b56a0d1dcd7b033536af7f1b69733bf9ba2c5706aec39dbca7f63cc45f4e741e7a563939c12f3b0b6d1da6a_1280.jpg",
              imageAlt: "Brand identity design portfolio showcase"
            },
            {
              id: "2",
              name: "Website Redesign",
              price: "View Project",
              imageSrc: "https://pixabay.com/get/ga5ad6098cfe30d91593e3374e8717d895d8124d69f664b209afa730391a5977fbfd26af9287843ee1c7b0e5426b517e23310be31234f7704b2273f9cb408026e_1280.jpg",
              imageAlt: "Website design portfolio modern"
            },
            {
              id: "3",
              name: "Print Campaign",
              price: "View Project",
              imageSrc: "https://pixabay.com/get/gb65c5d968b7c32fb2c9f9b11e022e5abf14edd15096d50ddafbda902939f634ec5ad9a16821353b5d3be50a26c20b08a651e31ec3eceeea6f911c67144a30cb2_1280.jpg",
              imageAlt: "Print design portfolio brochure catalog"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Impact"
          description="Numbers that showcase our commitment to delivering exceptional design results"
          tag="Achievements"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Briefcase,
              value: "250+",
              title: "Projects",
              description: "Projects Completed"
            },
            {
              id: "2",
              icon: Users,
              value: "150+",
              title: "Clients",
              description: "Happy Clients"
            },
            {
              id: "3",
              icon: Trophy,
              value: "25+",
              title: "Awards",
              description: "Design Awards"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="We're proud to partner with innovative companies across various industries"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/gbbfe2617874a7f70b2e7e2e6b62ca9d5fdf8f097665473de59f6b7c34a7ea858fcf52f9805611d1ed7062ca923213cb867236e20687632728c219b49c3cd77e9_1280.jpg",
            "https://pixabay.com/get/g3710d1107e7b025abed744ff859d5e0f069efa37096c4f507f338a2d98b3da7e9c96cfbd3bdac6719dba5b2259a76c4102ccca7c318ce0607acc2f25b7c8baf6_1280.jpg",
            "https://pixabay.com/get/gc0c0e7016484d78aefb5671138296509630740195917f96b22bf23892d8fa0e60d91d190c62ebd0daff5d5bd8bf5b6a2ee7ae6583ac579e0401e391064eaf3b4_1280.jpg",
            "https://pixabay.com/get/gcebed563e946335ef75d7293687c3ea9a98cfa2455fa6327f232bebe542394c8054d91a175ba08c9cd79ccaf8d56e9fc62032f1a79a584b1673ee3240263eca1_1280.jpg",
            "https://pixabay.com/get/g0d159419903c3173a688100a16c4d4cd53c1c89c8af6754d587813c0f6476699cb07b044f5740f82987c6f6c71a60e49322392746af9428ec3572f8095749dec_1280.jpg",
            "https://pixabay.com/get/g33dad0923349443550071066be9cefe93da0627f0711a54dadeadc2768084cdb90cf3c009f3026c710761408b946e8c9607a1b913df52875dcdf22cd59717d2f_1280.jpg",
            "https://pixabay.com/get/g78cfd7df1c26b7b88705ac8e97627a85a6ef73b2c0c06b7612f1581a7f41390b9f9312933efb9ebacc2c36d1d39feb82d8fa1f99f766583fe069112c7289df07_1280.jpg"
          ]}
          speed={35}
          showCard={true}
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
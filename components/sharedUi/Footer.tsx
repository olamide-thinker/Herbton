import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactMenu from "./ContactMenu";

const footerLinks = [
  {
    section: "Corporate",
    links: [
      { title: "About Us", urlPath: "/aboutUs" },
      { title: "Leadership", urlPath: "/leadership" },
      { title: "Research & Development", urlPath: "#", comingSoon: true },
    ],
  },
  {
    section: "Resources",
    links: [
      { title: "Investor Relations", urlPath: "#", comingSoon: true },
      { title: "Media Center", urlPath: "#", comingSoon: true },
      { title: "Careers", urlPath: "#", comingSoon: true },
    ],
  },
  {
    section: "Legal",
    links: [
      { title: "Privacy Policy", urlPath: "#" },
      { title: "Terms of Use", urlPath: "/TermsOfUsePage" },
      { title: "Accessibility", urlPath: "#", comingSoon: true },
    ],
  },
  {
    section: "Connect",
    links: [
      { title: "Locations", urlPath: "/distributors" },
      { title: "Contact Us", urlPath: "/contactUs" },
      { title: "Support", urlPath: "#", comingSoon: true },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-screen py-8 overflow-hidden bg-black">
      {/* Floating Contact Menu */}
      <div className="fixed z-50 w-fit bottom-5 right-5">
        <ContactMenu />
      </div>

      {/* Dynamic Footer Grid */}
      <div className="grid grid-cols-1 gap-10 p-4 pb-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-8">
        {footerLinks.map((section, i) => (
          <div key={i} className="flex flex-col gap-5">
            <h3 className="text-2xl font-medium text-white">
              {section.section}
            </h3>
            {section.links.map((link, j) => (
              <Link key={j} href={link.urlPath || "#"}>
                <p className="text-lg text-[#F3FFE5] flex items-center gap-2">
                  {link.title}
                  {link.comingSoon && (
                    <span className="text-[12px] bg-[#F3FFE5]/20 text-white/60 px-2 py-0.5 rounded-full font-semibold">
                      Coming Soon
                    </span>
                  )}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="w-full p-4 border-t border-[#F3FFE5]/60">
        <p className="text-[#F3FFE5]/40 text-xs text-center">
          ©2025 Herbton Ltd. All rights reserved
        </p>
      </div>

      {/* Background Image */}
      <div className="absolute top-16 left-0 w-full h-full opacity-70 z-[-1]">
        <Image
          height={500}
          width={500}
          src="/footer image.svg"
          alt="footer background image"
          className="object-contain w-full h-full rounded-xl"
        />
      </div>
    </footer>
  );
};

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactMenu from "./ContactMenu";

export const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-screen py-8 overflow-hidden bg-black">
      <div className="w-fit fixed bottom-5 right-5 z-50">
        <ContactMenu />
      </div>
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 gap-10 p-4 pb-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-8">
        {/* Corporate Column */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-medium text-white">Corporate</h3>
          <Link href={"#"} aria-label="About Us">
            <p className="text-lg text-[#F3FFE5]">About Us</p>
          </Link>
          <p className="text-lg text-[#F3FFE5]">Leadership</p>
          <p className="text-lg text-[#F3FFE5]">Research & Development</p>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-medium text-white">Resources</p>
          <p className="text-lg text-[#F3FFE5]">Investor Relations</p>
          <p className="text-lg text-[#F3FFE5]">Media Center</p>
          <p className="text-lg text-[#F3FFE5]">Careers</p>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-medium text-white">Legal</p>
          <p className="text-lg text-[#F3FFE5]">Privacy Policy</p>
          <p className="text-lg text-[#F3FFE5]">Terms of Use</p>
          <p className="text-lg text-[#F3FFE5]">Accessibility</p>
        </div>

        {/* Connect Column */}
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-medium text-white">Connect</p>
          <p className="text-lg text-[#F3FFE5]">Locations</p>
          <p className="text-lg text-[#F3FFE5]">Contact Us</p>
          <p className="text-lg text-[#F3FFE5]">Support</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full p-4 border-t border-[#F3FFE5]/60">
        <p className="text-[#F3FFE5]/40 text-xs text-center">
          ©2025 Herbton Ltd. All rights reserved
        </p>
      </div>

      {/* Footer Image */}
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

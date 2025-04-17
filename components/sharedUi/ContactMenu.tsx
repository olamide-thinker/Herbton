"use client";
import { useState } from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 p-2 bg-white border border-black group rounded-3xl"
      >
        <Image
          src={"/assets/contactUs.svg"}
          alt="contact"
          height={800}
          width={800}
          className="group-hover:animate-pulse duration-600"
        />
      </button>

      {/* Conditional Tooltip / Contact Options */}
      {isOpen && (
        <div className="absolute z-50 flex flex-col gap-2 p-4 ml-4 bg-white border shadow-lg bottom-5 right-full rounded-xl">
          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center w-full gap-2 p-2 text-white bg-green-500 rounded whitespace-nowrap hover:bg-green-600">
              <IoLogoWhatsapp size={20} />
              <span>Contact via WhatsApp</span>
            </button>
          </a>

          {/* Telephone */}
          <a href="tel:+1234567890">
            <button className="flex items-center w-full gap-2 p-2 text-white bg-blue-500 rounded whitespace-nowrap hover:bg-blue-600">
              <FaPhone size={20} />
              <span>Call Us</span>
            </button>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center w-full gap-2 p-2 text-white bg-blue-700 rounded whitespace-nowrap hover:bg-blue-800">
              <FaFacebook size={20} />
              <span>Visit Facebook</span>
            </button>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center w-full gap-2 p-2 bg-pink-500 rounded whitespace-nowrap not-even:text-white hover:bg-pink-600">
              <FaInstagram size={20} />
              <span>Visit Instagram</span>
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

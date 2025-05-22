"use client";
import { useState } from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhone,
} from "react-icons/fa6";

const contactOptions = [
  {
    label: "WhatsApp",
    href: "https://wa.me/+2348124831039?text=Hello%20Herbtons%20Team!",
    icon: <IoLogoWhatsapp size={20} />,
    bg: "bg-emerald-200 hover:bg-emerald-300",
    textColor: "text-black",
    aria: "Contact us on WhatsApp",
  },
  {
    label: "Call Us",
    href: "tel:+2348124831039",
    icon: <FaPhone size={20} />,
    bg: "bg-sky-200 hover:bg-sky-300",
    textColor: "text-black",
    aria: "Call us",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Gnhlife",
    icon: <FaFacebook size={20} />,
    bg: "bg-blue-200 hover:bg-blue-300",
    textColor: "text-black",
    aria: "Visit our Facebook page",
  },
  {
    label: "Herbtons IG",
    href: "https://www.instagram.com/herbtons?igsh=NjQweTZzb3k3ZnI4",
    icon: <FaInstagram size={20} />,
    bg: "bg-pink-200 hover:bg-pink-300",
    textColor: "text-black",
    aria: "Visit Herbtons Instagram",
  },
  {
    label: "Fumzy Lagos IG",
    href: "https://instagram.com/fumzylagoscosmetics?igshid=MzNlNGNkZWQ4Mg==",
    icon: <FaInstagram size={20} />,
    bg: "bg-pink-200 hover:bg-pink-300",
    textColor: "text-black",
    aria: "Visit Fumzy Lagos Instagram",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@globalnewherballife",
    icon: <FaYoutube size={20} />,
    bg: "bg-rose-200 hover:bg-rose-300",
    textColor: "text-black",
    aria: "Visit our YouTube channel",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@global_newherbal_life?_t=ZM-8vRWihq991z&_r=1",
    icon: <FaTiktok size={20} />,
    bg: "bg-neutral-400 hover:bg-neutral-500",
    textColor: "text-black",
    aria: "Visit our TikTok page",
  },
];

export default function ContactMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 p-2 transition duration-300 bg-white border border-gray-300 shadow-md group rounded-3xl hover:shadow-lg"
        aria-label="Open Contact Menu"
      >
        <Image
          src="/assets/contactUs.svg"
          alt="Contact Us Icon"
          height={800}
          width={800}
          className="group-hover:animate-pulse duration-600"
        />
      </button>

      {/* Conditional Tooltip Menu */}
      {isOpen && (
        <div
          className="absolute z-50 flex flex-col gap-2 p-4 bg-white border border-gray-300 shadow-xl bottom-1 right-full rounded-xl w-max"
          role="menu"
          aria-label="Contact Options"
          onMouseLeave={() => setIsOpen(false)}
        >
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={option.aria}
            >
              <button
                className={`flex items-center gap-2 p-2 rounded transition w-full ${option.bg} ${option.textColor}`}
              >
                {option.icon}
                <span>{option.label}</span>
              </button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";

// Define the words that will cycle through
const words = ["Reimagining", "Revolutionizing", "Transforming"];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Set interval to cycle through words every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-gray-900">
      {/* Text Overlay */}
      <div className="absolute z-10 flex flex-col justify-center items-start px-8 sm:p-12 md:p-16 lg:p-24 w-full h-full bg-[rgba(16,16,16,0.2)] backdrop-blur-md text-left space-y-4 sm:space-y-4 md:space-y-4">
        <p className="m-0 p-0 text-4xl text-border-2  sm:text-5xl md:text-6xl font-['PoorRichard'] font-normal text-[#F3FFE5] leading-tight sm:leading-tight md:leading-tight mb-2">
          {/* Apply the animation to the cycling word */}
          <span
            key={currentWordIndex}
            className="text-[#93FFB0] animate-text-focus-in block lg:inline"
            style={{
              animationDuration: "2s", // Animation duration for blur effect
            }}
          >
            {words[currentWordIndex]}
          </span>
          <span className=" text-[#E6FFED]"> Herbal</span> Medicine
          <span className="text-[#E6FFED]">.</span>
        </p>
        <div className="w-1/3 pt-0.5 bg-secondary/10"></div>

        <p className="m-0 p-0 text-lg sm:text-xl md:text-xl font-[Poppins] text-[#F3FFE5]">
          Through rigorous research and innovation, we’re advancing natural
          healing solutions for a healthier world.
        </p>
        <div>
          <div className="flex cursor-pointer group gap-2 px-4 py-4 rounded-3xl  mt-8  items-center bg-secondary/10 text-secondary">
            <FaPlayCircle
              size={32}
              className=" group-hover:scale-110 group-dow"
            />
            <p>Global New Herbal Life Documentary</p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover w-full h-full"
          src="/assets/home/heroImage.png"
          alt="Hero Image"
          width={3000}
          height={3000}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import { TestimonialCard } from "@/components/sharedUi/TestimonialCard";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider Settings
  const settings = {
    centerMode: true, // Center the active slide
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    centerPadding: "20px", // Adds space around the centered item
    focusOnSelect: true, // Allows you to select the slide when clicking
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          centerPadding: "40px", // Adjust space for smaller screens
        },
      },
    ],
    afterChange: (current: number) => {
      setCurrentIndex(current); // Set the active slide index when slide changes
    },
  };

  return (
    <section className="w-full py-16">
      <h2 className="mb-8 text-3xl font-[PoorRichard]  text-center text-primary">
        What Our Customers Say
      </h2>

      {/* Slider Component */}
      <Slider {...settings}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`relative transition-all duration-300 transform ${
              currentIndex === i ? "scale-100" : "scale-60 blur-md"
            } ease-in-out`}
          >
            <TestimonialCard />
          </div>
        ))}
      </Slider>
    </section>
  );
};

import React from "react";
import Image from "next/image";

export const TestimonialCard = () => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-lg p-6 mx-auto transition-all duration-300 ease-in-out bg-white rounded-3xl hover:shadow-lg hover:scale-105">
      {/* Testimonial Content */}
      <p className="mb-6 text-lg leading-relaxed text-center text-gray-800">
        “Had the most amazing experience at Fumzy Wellness Breakaway Resort! The
        serene environment, top-notch facilities, and exceptional service made
        my stay unforgettable. I came for a relaxing getaway and left feeling
        rejuvenated and refreshed.”
      </p>

      {/* Profile Image */}
      <div className="mt-4">
        <Image
          src="/assets/home/Biologically_targeted_Herbal_mixtures.jpg"
          width={80}
          height={80}
          alt="Profile Image"
          className="w-20 h-20 border-2 border-gray-300 rounded-full shadow-sm"
        />
      </div>

      {/* Name & Role */}
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold text-gray-800">Rosa James</p>
        <p className="text-sm text-gray-500">Wellness Enthusiast</p>
      </div>
    </div>
  );
};

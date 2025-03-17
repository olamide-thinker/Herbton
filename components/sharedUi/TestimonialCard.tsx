import React from 'react'
import Image from 'next/image'

export const TestimonialCard = () => {
  return (
    <div className="relative flex flex-col items-center gap-2 p-4 overflow-hidden w-fill bg-gray-50 rounded-xl">

    <Image 
        src="/assets/home/Biologically targeted Herbal mixtures.jpg" 
        width={1000}
        height={1000}
      alt="Profile Image" 
      className="w-40 h-40 border-0 rounded-full shadow-inner"
    />
    

    <p className="m-0 p-0 text-2xl font-[Poor Richard] text-green-800 text-left">
      Rosa James
    </p>
  

    <p className="p-0 m-0 text-center text-gray-700 font-poppins">
      had the most amazing experience at Fumzy Wellness Breakaway Resort! The serene environment, top-notch facilities, and exceptional service made my stay unforgettable. I came for a relaxing getaway and left feeling rejuvenated and refreshed. The team at Fumzy Wellness truly goes above and beyond to make you feel welcome. I’ll definitely be returning and recommending it to others!
    </p>
  </div>
  
  )
}

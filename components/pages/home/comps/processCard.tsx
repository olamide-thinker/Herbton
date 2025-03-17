
import Image from "next/image";
import React from "react";

export const ProcessCard: React.FC = () => {
  return (
    <div className="relative flex flex-col items-start cursor-default rounded-[20px] hover:bg-[#F3FFE5] gap-4 p-4 w-[426px] h-full bg-white">
      {/* Image Section */}
      <Image
        src="/assets/home/Biologically targeted Herbal mixtures.jpg"
        alt="Process Image"
        height={1000}
        width={1000}
        className="relative w-full h-[265.77px] rounded-lg shadow-[inset_0_0_0_1px_transparent]"
      />

      {/* Number Badge */}
      <div className="relative flex flex-col justify-center items-center px-4 py-1 bg-[#F3FFE5] rounded-full">
        <p className="text-3xl font-normal font-['PorterSansBlock'] text-[#285E27]">1</p>
      </div>

      {/* Title */}
      <p className="text-4xl font-['PoorRichard'] text-[#034401]">Plant Extraction & Analysis</p>

      {/* Description */}
      <p className="text-base font-poppins text-black/75">
        At the core of our scientific process is the meticulous extraction and analysis of natural-based compounds. We employ advanced techniques to isolate bioactive substances from medicinal plants and other natural materials, ensuring the preservation of their therapeutic properties. Our comprehensive analysis, utilizing methods like chromatography and spectroscopy, allows us to identify and quantify these compounds accurately. This rigorous approach guarantees that our herbal products are both safe and effective, providing reliable natural healing solutions.
      </p>
    </div>
  );
};


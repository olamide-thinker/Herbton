import Image from "next/image";
import React from "react";

interface prop {
  title: string;
  image: string;
}

const SecondHero = ({ title, image }: prop) => {
  return (
    <section className="w-full border h-[50vh] relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={
            image || "/assets/home/Biologically targeted Herbal mixtures.jpg"
          }
          alt="Placeholder"
          width={1000}
          height={1000}
          className="relative object-cover w-full h-90 "
        />
      </div>
      <div className="absolute z-10 flex flex-col justify-center items-start p-8 sm:p-12 md:p-16 lg:p-24 w-full h-full bg-[rgba(16,16,16,0.2)] backdrop-blur-md ">
        <h1 className="m-0 p-0 text-[48px] font-['PoorRichard'] font-normal text-center  w-full text-[#F3FFE5]">
          {title || "Title of page"}
        </h1>
        <p></p>
      </div>
    </section>
  );
};

export default SecondHero;

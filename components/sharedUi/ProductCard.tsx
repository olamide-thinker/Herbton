"use client";
import Image from "next/image";
import React from "react";
import { RippleEffect } from "../ui/RippleEffect";

export const ProductCard = () => {
  return (
    <RippleEffect className="relative flex items-center py-4 transition-all duration-300 group ">
      <div className="relative w-full max-w-[350px] flex flex-col gap-4 p-4 bg-[#FAFAFA] rounded-lg cursor-pointer h-fit hover:bg-[#F3FFE5] hover:shadow-md pb-4">
        {/* Product Image */}
        <Image
          src="/assets/home/Biologically targeted Herbal mixtures.jpg"
          alt="Product Image"
          width={1000}
          height={1000}
          className="relative object-cover w-full transition-all duration-300 ease-in-out transform rounded-lg h-60 group-hover:scale-105"
        />

        {/* Product Information */}
        <div className="flex flex-col gap-2 p-2">
          <p className="text-2xl text-[#034401] font-serif font-semibold">
            Product Name
          </p>
          <p className="text-sm text-gray-700 font-poppins">
            Developing next-generation herbal medicines using cutting-edge
            technology.
          </p>
        </div>

        {/* Tags / Labels */}
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-3 py-1 bg-white group-hover:bg-[#F3FFE5] rounded-full ring-1 ring-[#F5F5F5] transition-all duration-300 group-hover:ring-[#D2ECB4]"
            >
              <p className="text-sm text-gray-700 font-poppins">Diabetic</p>
            </div>
          ))}
        </div>
      </div>
    </RippleEffect>
  );
};

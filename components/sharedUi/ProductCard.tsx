"use client";
import Image from "next/image";
import React from "react";
import { RippleEffect } from "../ui/RippleEffect";
import { changeCase } from "@/lib/textCaseChanger";

type props = {
  image: string;
  name: string;
  short_description: string;
  forTreatmentOf: string;
};

export const ProductCard = ({
  image,
  name,
  short_description,
  forTreatmentOf,
}: props) => {
  return (
    <RippleEffect className="relative flex items-center py-4 transition-all duration-300 group ">
      <div className="relative w-full max-w-[350px] flex flex-col gap-4 p-4 bg-[#FAFAFA] rounded-lg cursor-pointer  hover:bg-[#F3FFE5] hover:shadow-md pb-4">
        {/* Product Image */}
        <Image
          // src={`https://drive.google.com/uc?export=view&id=1GZhRjSc17sxdsQRzmy7qeCKObLSFcUqm`}
          src={image || ""}
          alt={name}
          width={1000}
          height={1000}
          priority
          className="relative object-cover w-full transition-all duration-300 ease-in-out transform rounded-lg h-80 group-hover:scale-105"
        />

        {/* Product Information */}
        <div className="flex flex-col gap-2 p-2">
          <h2 className="text-3xl text-[#034401] font-[PoorRichard] ">
            {(name && changeCase(name, "titlecase", [","])) || "Product Name"}
          </h2>
          <p className="text-sm text-gray-700 font-poppins line-clamp-2">
            {short_description ||
              " Developing next-generation herbal medicines using cutting-edge technology."}
          </p>
        </div>

        {/* Tags / Labels */}
        <div className="flex gap-2">
          {Array.from({ length: 1 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-3 py-2 bg-white group-hover:bg-[#e7fcd1] rounded-xl ring-1  ring-[#F5F5F5] transition-all duration-300 gap-x-2 ]"
            >
              <p className="text-sm ">
                <span className="inline pr-2 font-semibold font-poppins">
                  Treatment for:
                </span>
                {(forTreatmentOf &&
                  changeCase(forTreatmentOf, "sentencecase", [","])) ||
                  " _ "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RippleEffect>
  );
};

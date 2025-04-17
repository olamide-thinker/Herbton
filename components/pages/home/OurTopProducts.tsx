/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { MoveRight, MoveLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductDetailModal } from "@/components/sharedUi/ProductDetailModal";
import { getSheetData, SheetData, transformSheetData } from "@/lib/getSheet";

interface prop {
  sheetName: string;
  title: string;
}

export const OurTopProducts = ({ sheetName, title }: prop) => {
  const sliderRef = useRef<Slider | null>(null);
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    getSheetData({
      sheetID: "1FnNN8wEO3jl02B7FrEYOfr5FdSt6csIi_ortuBj9o0Q",
      sheetName: sheetName,
      query: "SELECT *",
      callback: sheetDataHandler,
    });
  }, [sheetName]);

  const sheetDataHandler = (data: SheetData) => {
    if (!data || !Array.isArray(data)) {
      console.error("Invalid sheet data received:", data);
      return;
    }
    const formattedData = transformSheetData(data);
    console.log("Formatted Sheet Data:", formattedData);
    setTableData(formattedData);
  };

  console.log("first: ", tableData);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 4, // Show 4 slides at once
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Smaller screens (mobile devices)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="relative w-full p-8 overflow-hidden bg-gray-50">
      <h2 className="mb-8 text-3xl font-[PoorRichard]  text-center text-primary">
        {title}
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {tableData.slice(0, 6).map((a, i) => (
            <div key={i} className="w-full">
              {/* <ProductCard /> */}
              <ProductDetailModal
                trigger={undefined}
                img={a?.image_url}
                name={a?.name}
                description={a?.description}
                forTreatmentOf={a?.forTreatmentOf}
                ingredient={a?.ingredients?.split(",")}
              />
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div className="absolute left-0 flex justify-between w-full px-4 text-3xl inset-y-1/2">
          <Button
            variant="secondary"
            size={"icon"}
            onClick={previous}
            className="rounded-full shadow-xl cursor-pointer bg-[#F3FFE5] hover:scale-125 transition-all"
            aria-label="Previous slide"
          >
            <MoveLeft size={40} className="self-center" />
          </Button>

          <Button
            variant="secondary"
            size={"icon"}
            onClick={next}
            className="rounded-full shadow-xl cursor-pointer bg-[#F3FFE5] hover:scale-125 transition-all"
            aria-label="Next slide"
          >
            <MoveRight size={40} className="self-center" />
          </Button>
        </div>
      </div>
    </section>
  );
};

"use client";
import { Button } from "@/components/ui/button";
import { MoveRight, MoveLeft } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductDetailModal } from "@/components/sharedUi/ProductDetailModal";

export const OurTopProducts = () => {
  const sliderRef = useRef<Slider | null>(null);

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
        Our Top Products
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full">
              {/* <ProductCard /> */}
              <ProductDetailModal />
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

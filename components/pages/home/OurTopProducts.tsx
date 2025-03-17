"use client";
// import { ProductCard } from "@/components/sharedUi/ProductCard";
import { Button } from "@/components/ui/button";
import { MoveRight, MoveLeft } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductDetailModal } from "@/components/sharedUi/ProductDetailModal";

export const OurTopProducts = () => {
  const sliderRef = useRef<Slider | null>(null);
  // const [activeSlide, setActiveSlide] = useState(0) // Track the active slide index

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 4, // Show 4 slides at once
    slidesToScroll: 2,
    // afterChange: (current: number) => setActiveSlide(current), // Update active slide index on change
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
    <section className="relative w-full p-8 overflow-hidden">
      <h2>Our Top Products</h2>
      <div className="flex flex-row w-full gap-4">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full">
              {/* <ProductCard /> */}
              <ProductDetailModal />
            </div>
          ))}
        </Slider>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-0 flex justify-between min-w-full px-3 text-24 top-1/2 padding-4 ">
        <Button
          variant="secondary"
          size={"icon"}
          onClick={previous}
          className="rounded-full shadow-xl cursor-pointer size-18 hover:scale-125 bg-[#F3FFE5]"
        >
          <MoveLeft
            size={40}
            className="self-center group-hover:scale-125 ease-soft-spring ce"
          />
        </Button>

        <Button
          variant="secondary"
          size={"icon"}
          onClick={next}
          className="rounded-full cursor-pointer shadow-xl size-18 hover:scale-125 border bg-[#F3FFE5]"
        >
          <MoveRight
            size={"24px"}
            className="group-hover:scale-125 ease-soft-spring "
          />
        </Button>
      </div>
    </section>
  );
};

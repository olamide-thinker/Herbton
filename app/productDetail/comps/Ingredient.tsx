"use client";
// import { Button } from "@/components/ui/button";
// import { MoveRight, MoveLeft } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Ingredient = () => {
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

  //   const next = () => {
  //     if (sliderRef.current) {
  //       sliderRef.current.slickNext();
  //     }
  //   };

  //   const previous = () => {
  //     if (sliderRef.current) {
  //       sliderRef.current.slickPrev();
  //     }
  //   };

  return (
    <section className="relative w-full ">
      <Slider ref={sliderRef} {...settings} className="w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex justify-center w-full p-4 m-8 group">
            <div className="p-4 space-y-4 rounded-lg group-hover:shadow-xl shadow bg-background ">
              <h3 className=" font-['PoorRichard'] text-2xl">Tea leave</h3>
              <p>
                Its originated from India, famous for its indication of allergy
                attacks. this plant contains locolintygermin that binds with
                colaminyn in body to fight against rapidly spreading
                irritations.
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      {/* <div className="absolute right-0 flex justify-between min-w-full px-3 text-24 top-1/2 padding-4 ">
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
      </div> */}
    </section>
  );
};

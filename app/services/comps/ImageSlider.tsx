"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

type prop = {
  images: string[];
  slidesToShow?: number;
  slidesToScroll?: number;
};

export const ImageSlider = ({ images, slidesToShow, slidesToScroll }: prop) => {
  const sliderRef = useRef<Slider | null>(null);
  const [selectedSlide, setSelectedSlide] = useState(""); // Track the active slide index
  const [open, setOpen] = useState(true); // Track the active slide index

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 500,
    spaceBetween: 8,
    slidesToShow: slidesToShow || 1, // Show 4 slides at once
    slidesToScroll: slidesToScroll || 1,
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
    <section className="relative w-full group">
      {/* pop up image*/}
      {open && (
        <div className="w-full h-screen fixed z-50 top-0 left-0 bg-black/50 flex items-center justify-center">
          <Image
            src={selectedSlide || "/assets/home/farm_img.jpg"}
            alt="Tea Leaf"
            width={2000}
            height={2000}
            className="object-cover  delay-1000 w-auto rounded-lg h-[90%] ease-soft-spring z-10"
          />

          <div
            onClick={() => setOpen(false)}
            className=" absolute top-0 left-0 z-0 h-full w-full bg-black/15"
          ></div>
        </div>
      )}
      {/* Image Slider */}
      <Slider ref={sliderRef} {...settings} className="w-full ">
        {images?.map((a, i) => (
          <div
            key={i}
            onDoubleClick={() => {
              setSelectedSlide(a);
              setOpen(true);
            }}
            className="w-full p-1 cursor-pointer z-50"
          >
            <Image
              src={a || "/assets/home/farm_img.jpg"}
              alt="Tea Leaf"
              width={2000}
              height={2000}
              className="object-cover w-full delay-1000 rounded-lg h-80 ease-soft-spring z-50"
            />
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}

      <Button
        variant="secondary"
        size={"icon"}
        onClick={previous}
        className="rounded-full shadow-xl cursor-pointer size-8 hover:scale-125 bg-[#fff]/30"
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
        className="rounded-full cursor-pointer shadow-xl size-8 hover:scale-125 border bg-[#fff]/30"
      >
        <MoveRight
          size={"24px"}
          className="group-hover:scale-125 ease-soft-spring "
        />
      </Button>
    </section>
  );
};

"use client";
import { TestimonialCard } from "@/components/sharedUi/TestimonialCard";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    imageSrc: "/assets/leadership/placeholder_user.png",
    testimonialText:
      "My aunty I'm not sleeping on this medicinal spice!!! I have been having sleepless nights for weeks until recently when I noticed I doze off almost immediately when I hit my bed. This happened to me once, when you gave me to try at your place, I was like maybe because I am tired, but omo, it happened again o, the way my sleep has been for 3 days now eh, is surprising. I am like, what did I add or change lately? Then, I noticed that spice I got was the only thing new I added to my daily lifestyle. I have only used it twice in my meal oo. Now imagine if it's used every-time I cook... Interesting, right? I am shocked my sis😳😳. This product works. Thank you 🙏",
    name: "Stella Fadeyibi",
    // role: "Wellness Enthusiast",
  },
  {
    imageSrc: "/assets/leadership/placeholder_user.png",
    testimonialText:
      "Sis, I have this skin irritation on my skin, this has been disturbing me more often. I use on, and it went but still comes back, this last time I have it again, then I decided to try the ointment I got from your company that you say works on the skin, be it arthritis, skin irritation burn, bites and so on, I'm like let me try it ooo... Sis see now the second picture I sent now, it's totally drying up and has started getting dry unlike the ORI that takes time. Omo, I am happy oo, I just pray it does not come back again. Anyways am like I can't keep this to myself, I must share this testimony about this your products ooo.",
    name: "Aderonke Temitayo",
    // role: "Frequent Traveler",
  },
  {
    imageSrc: "/assets/leadership/placeholder_user.png",
    testimonialText:
      "“Nice tea I received my tea last week and I love it, I woke up feeling light and smart 🥰”",
    name: "Mrs. Lawal Ifeoluwa",
    // role: "Health Coach",
  },
  {
    imageSrc: "/assets/leadership/placeholder_user.png",
    testimonialText:
      "Yes I do, Thanks. The bleeding stopped on friday. Saturday and Sunday I was draining. But thank God by Monday the draining stoped. The new thing I just observed for some days now is I just lost appetite which is a big corcerned for me. Aside that am doing Good and everyone is testifying that the medication is really working.",
    name: "Mrs Debby O",
    // role: "Nature Lover",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider Settings
  const settings = {
    centerMode: true, // Center the active slide
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    centerPadding: "20px", // Adds space around the centered item
    focusOnSelect: true, // Allows you to select the slide when clicking
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          centerPadding: "40px", // Adjust space for smaller screens
        },
      },
    ],
    afterChange: (current: number) => {
      setCurrentIndex(current); // Set the active slide index when slide changes
    },
  };

  return (
    <section className="w-full py-16">
      <h2 className="mb-8 text-3xl font-[PoorRichard]  text-center text-primary">
        What Our Customers Say
      </h2>

      {/* Slider Component */}
      <Slider {...settings}>
        {testimonials.map((a, i) => (
          <div
            key={i}
            className={`relative transition-all py-8 duration-300 transform ${
              currentIndex === i ? "scale-100" : "scale-60 blur-md"
            } ease-in-out`}
          >
            <TestimonialCard
              imageSrc={"/assets/leadership/placeholder_user.png"}
              testimonialText={a.testimonialText}
              name={a.name}
              // role={a.role}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

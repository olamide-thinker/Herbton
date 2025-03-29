import { IntroSection } from "@/components/sharedUi/IntroSection";
import SecondHero from "@/components/sharedUi/SecondHero";
import React from "react";
import { FaBuildingWheat } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import { BiSpa } from "react-icons/bi";
import { PiSwimmingPool } from "react-icons/pi";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlider } from "./comps/ImageSlider";

const Services = () => {
  const facilities = [
    {
      title: "Personalized Wellness Programs",
      content:
        "Tailored to meet individual health goals, our wellness programs integrate fitness, nutrition, and mental health practices to help you achieve balance and vitality.",
      images: ["/assets/home/farm_img.jpg", "/assets/home/farm_img.jpg"],
    },
    {
      title: "Luxury Spa Treatments",
      content:
        "Experience ultimate relaxation with our range of spa services, including massages, facials, and body treatments, all designed to rejuvenate and refresh your body.",
      images: ["/assets/home/farm_img.jpg", "/assets/home/farm_img.jpg"],
    },
    {
      title: "Holistic Therapies",
      content:
        "Engage in therapies such as yoga, meditation, and aromatherapy, aimed at enhancing mental clarity, reducing stress, and promoting overall well-being.",
      images: ["/assets/home/farm_img.jpg", "/assets/home/farm_img.jpg"],
    },
    {
      title: "Nutritional Counseling",
      content:
        "Our expert nutritionists provide personalized guidance on diet and lifestyle, helping you make informed choices for optimal health.",
      images: ["/assets/home/farm_img.jpg", "/assets/home/farm_img.jpg"],
    },
    {
      title: "Fitness and Rehabilitation Services",
      content:
        "Whether you are looking to improve fitness, our professional trainers and therapists are on hand to provide customized fitness plans and rehabilitation services.",
      images: ["/assets/home/farm_img.jpg", "/assets/home/farm_img.jpg"],
    },
    {
      title: "Nature Immersion Experiences",
      content:
        "Take advantage of the serene environment surrounding the resort by participating in outdoor activities like nature walks and guided eco-tours designed to restore your connection with nature.",
      images: ["/assets/home/farm_img.jpg", "/assets/home/farm_img.jpg"],
    },
  ];

  const ima = [
    "/assets/service/20240720_144025-1-scaled.jpg",
    "/assets/service/20240720_161856-scaled.jpg",
    "/assets/service/Aerial-view-of-pool-area-FWB-scaled.jpg",
    "/assets/service/DSC01819-scaled.jpg",
    "/assets/service/Room-view-fwb-scaled.jpg",
    "/assets/service/20240720_154044-scaled.jpg",
    "/assets/service/Steam-room-scaled.jpg",
  ];

  return (
    <div className="w-full bg-blue">
      <SecondHero
        title={"Services (Fumzy Wellness Resort)"}
        image={"/assets/service/Herbton-service-hero.jpg"}
      />
      <IntroSection
        title={"At Herbton,"}
        content={`we believe in the power of holistic wellness. Through our exclusive Fumzy Wellness Breakaway Resort, located in the peaceful surroundings of Igbeba, Ogun State, we offer a luxurious retreat that combines modern wellness practices with the tranquility of nature. Our state-of-the-art facilities provide the perfect environment to relax, rejuvenate, and reconnect with your mind and body.`}
      />

      <div className=" border m-6 md:m-8 rounded-4xl space-y-8">
        <div className="flex flex-col md:flex-row gap-8 p-4 m-8 bg-cover bg-[url('/assets/service/spa.jpg')] bg-center bg-no-repeat rounded-4xl">
          {/* Text Card */}
          <div className="flex-1  max-w-[600px] bg-primary text-secondary p-6 md:p-8 rounded-4xl space-y-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-['PoorRichard']">
              Fumzy Wellness Resort
            </h3>
            <p>
              Fumzy Wellness Breakaway Resort is a luxurious retreat offering
              state-of-the-art facilities in a tranquil, serene setting in
              Igbeba, Ogun State. At Fumzy Wellness Resort, we provide the
              following services:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4 p-4 bg-foreground/20 rounded-xl">
                <FaBuildingWheat size={32} className="h-6 aspect-square" />
                <p>Accommodation/Lodging for individuals or groups</p>
              </div>
              <div className="flex gap-4 p-4 bg-foreground/20 rounded-xl">
                <GiMeal size={32} className="h-6 aspect-square" />
                <p>Planned meals for health benefits</p>
              </div>
              <div className="flex gap-4 p-4 bg-foreground/20 rounded-xl">
                <MdSportsGymnastics size={32} className="h-6 aspect-square" />
                <p>Gym and Gaming facilities</p>
              </div>
              <div className="flex gap-4 p-4 bg-foreground/20 rounded-xl">
                <BiSpa size={32} className="h-6 aspect-square" />
                <p>Massage/Spa</p>
              </div>
              <div className="flex gap-4 p-4 bg-foreground/20 rounded-xl">
                <PiSwimmingPool size={32} className="h-6 aspect-square" />
                <p>Swimming</p>
              </div>
            </div>
          </div>

          {/* Play Video Card */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 w-full max-w-xs sm:max-w-md rounded-4xl  shadow-lg">
            <Button
              size={"lg"}
              variant={"ghost"}
              className="p-4 border rounded-full text-secondary w-fit hover:bg-primary transition duration-300"
            >
              <Play className="mr-2" /> Take a tour
            </Button>
          </div>
        </div>

        <div>
          <p className="my-12 text-center text-primary text-lg sm:text-xl">
            Fumzy Wellness Breakaway Resort is designed to help you disconnect
            from the stress of daily life and reconnect with yourself. Whether
            you are here for a quick retreat or an extended wellness journey, we
            are committed to providing you with the best in luxury, comfort, and
            holistic care.
          </p>
          <div className=" p-8 bg-accent ">
            <h3 className="font-['PoorRichard'] text-2xl sm:text-3xl text-center text-primary mb-8">
              Our Rooms & Facilities
            </h3>
            <div className="">
              <ImageSlider images={ima} slidesToScroll={1} slidesToShow={3} />
            </div>
          </div>

          <div className="my-12 text-center text-primary">
            <h3 className="font-['PoorRichard'] text-2xl sm:text-3xl text-center text-primary mb-4">
              Retreat Programs
            </h3>
            <p>
              At Fumzy Wellness Resort, we offer the following services to
              ensure a comprehensive wellness experience:
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div
              className="grid grid-cols-1 
          self-center sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[70%]"
            >
              {facilities.map((a, i) => (
                <div key={i} className="w-full p-4 group flex flex-col">
                  <div className="w-full p-4 space-y-4 rounded-2xl group-hover:bg-secondary bg-muted transition-all duration-300 flex-grow">
                    <div className="flex flex-col h-full">
                      <h3 className="font-['PoorRichard'] text-lg sm:text-2xl text-primary mb-6">
                        {a.title}
                      </h3>
                      <p className="text-sm sm:text-base flex-grow">
                        {a.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

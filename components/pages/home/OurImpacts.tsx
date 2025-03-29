import Image from "next/image";
import React from "react";

export const OurImpacts = () => {
  const content = [
    {
      heading: "Changing People's Lives",
      content:
        "Herbal medicine provides natural remedies that address health issues effectively, often with fewer side effects than allopathic treatments. At our company, we are committed to pioneering scientifically validated herbal solutions, ensuring both safety and efficacy. Introducing these remedies early, especially to children, encourages a preference for natural healing, reducing reliance on allopathic medications. By embracing herbal options, individuals can achieve better health outcomes naturally.",
      image: "/assets/home/home0.png",
      isReverse: false,
    },
    {
      heading: "Revitalizing the elderly",
      content:
        "Herbton plays a vital role in promoting the health of the elderly by offering herbal solutions that target their specific needs. We focus on providing products that support cognitive health, reduce inflammation, and improve digestion, all through natural, safe, and effective ingredients. At Herbton, we carefully formulate our herbal products to ensure they address common age-related issues, such as memory decline, oxidative stress, and digestive discomfort. By using scientifically-backed methods and quality plants, we deliver remedies that help seniors maintain their health and independence.",
      image: "/assets/home/home1.png",
      isReverse: true,
    },
    {
      heading: "Making Cutting-Edge Health Technology Accessible",
      content:
        "At Herbton, we are making cutting-edge health technologies accessible to our users by offering them alongside our herbal products. We’ve partnered with global innovators to provide advanced health tracking devices and apps that allow users to monitor their vitals, such as heart rate, blood pressure, sugar level, and sleep patterns, as they use our herbal remedies. By making these technologies available, Herbton empowers users to track their health progress and make more informed decisions about their wellness, all while using our trusted, science-backed herbal solutions.",
      image: "/assets/home/home2.png",
      isReverse: false,
    },
    {
      heading: "Sustainable Cultivation for Healthier Plants",
      content:
        "We prioritize the health and nourishment of our plants through sustainable and scientifically grounded cultivation practices. Our dedicated private farms adhere to Good Agricultural and Collection Practices (GACP), ensuring that every plant receives optimal care and nutrition.",
      image: "/assets/home/farm_img.jpg",
      isReverse: true,
    },
  ];

  return (
    <section className="w-full p-2 sm:p-8 h-fit">
      <div className="p-4 border">
        {content.map((a, i) => {
          const { heading, content, image, isReverse } = a;
          return (
            <div
              key={i}
              className={` flex  items-center justify-start w-full sm:h-[680px] bg-transparent overflow-visible  ${
                isReverse
                  ? "md:flex-row-reverse flex-col-reverse"
                  : " md:flex-row flex-col-reverse"
              }`}
            >
              <div className="relative flex flex-col items-center justify-center h-full p-8 bg-transparent md:w-1/2 gap-7 ">
                <div className="relative flex flex-col items-start justify-start w-full gap-6 bg-transparent">
                  <div className="relative flex flex-col items-start justify-start w-full bg-transparent gap-7">
                    <h3 className="text-3xl md:text-[51px] font-['PoorRichard'] text-left text-[#034401] m-0 p-0">
                      {heading}
                    </h3>
                    <p className="text-[16px] font-[Poppins] text-left text-[#034401] m-0 p-0">
                      {content}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={image}
                alt=""
                height={1000}
                width={1000}
                className="inset-0 object-cover rounded-lg h-90 md:h-full md:w-1/2"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

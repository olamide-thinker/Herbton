"use client";
import React from "react";
import { IntroSection } from "@/components/sharedUi/IntroSection";
import SecondHero from "@/components/sharedUi/SecondHero";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-screen bg-white text-gray-900">
      <SecondHero
        title={"About Global New Herbal Life"}
        image={"/assets/home/farm_img.jpg"}
      />

      <IntroSection
        title={"Our Heritage and Tradition"}
        content={`Traditional medicine encompasses the accumulated knowledge, skills, and practices rooted in the theories, beliefs, and experiences indigenous to various cultures. It is used to maintain health, as well as to prevent, diagnose, improve, or treat physical and mental illnesses. Traditional medicine has been passed down through generations and adapted by other populations over time. African traditional medicine is the oldest and perhaps the most diverse of all therapeutic systems. Known as the cradle of humankind, Africa boasts rich biological and cultural diversity, leading to regional differences in healing practices. African traditional medicine is holistic, addressing both the body and the mind, and is practiced in various forms across the continent.`}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold font-[PoorRichard] text-gray-800 mb-8">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            At Global New Herbal Life, we embrace the healing power of nature.
            By incorporating the rich tradition of African herbs and plants, we
            create effective body care products and herbal remedies that promote
            natural wellness and vitality. Our mission is to bring the benefits
            of African traditional medicine to the modern world while honoring
            the ancestral practices that have supported generations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl text-center font-bold font-[PoorRichard] text-gray-800 mb-8">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16  items-center">
            <div className="md:w-5/6 mx-auto p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Global New Herbal Life Concept Limited was incorporated by the
                Corporate Affairs Commission (CAC) in December 2020 to
                specialize in the production of herbal cosmetics, drinks, and
                remedies, as well as the direct sales and multi-level marketing
                of its products. We are committed to the use of African herbs
                and plants in creating holistic products that enhance your
                overall well-being.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our registered office is located at 229 Herbert Macaulay Way,
                Alagomeji, Yaba, Lagos, and our factory operates from House 43,
                Esa Otusi, Atan Road, Erunwon, Ijebu Ode, Ogun State. These
                locations house the foundation of our operations, where
                innovation and tradition meet to create products that support
                your health and beauty.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                height={1000}
                width={1000}
                src={"/assets/home/farm_img.jpg"}
                alt="Factory"
                className="shadow-xl object-cover w-full  max-h-[60vh]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold font-[PoorRichard] text-gray-800 mb-8">
            Our Commitment to Sustainability
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            We practice backward integration by cultivating herbal plants and
            seeds on our farmland in Ilupa, Erunwon, Ijebu-Ode. Crops such as
            Cymbopogon citratus, Chasmanthera dependens, Justicia secunda, and
            more are grown. In addition, we have dedicated farmland in Apoje,
            Osun State, where we cultivate valuable plants like Theobroma cacao
            and Musa paradisiaca, further solidifying our commitment to
            sustainable farming practices and quality control.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex justify-center items-center">
              <Image
                height={1000}
                width={1000}
                src={"/assets/home/farm_img.jpg"}
                alt="Farm"
                className="rounded-xl shadow-xl w-full max-w-md"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                height={1000}
                width={1000}
                src={"/assets/home/farm_img.jpg"}
                alt="Farm"
                className="rounded-xl shadow-xl w-full max-w-md"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                height={1000}
                width={1000}
                src={"/assets/home/farm_img.jpg"}
                alt="Farm"
                className="rounded-xl shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Values</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            We believe in promoting natural health and wellness through the
            power of traditional African remedies. We are committed to
            sustainability, community development, and improving the lives of
            our customers by providing high-quality, all-natural products.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { IoFilter } from "react-icons/io5";
// import { Button } from "@/components/ui/button";

export const MissionVision = () => {
  return (
    <div className="flex justify-center w-full p-4 space-y-4">
      <Tabs defaultValue="mission" className="self-center w-full max-w-4xl">
        <TabsList className="flex justify-center w-full mb-4 space-x-4 bg-none">
          <TabsTrigger
            value="mission"
            className="px-6 py-2 text-lg font-semibold transition-all duration-300 border-b-2 border-transparent text-primary hover:border-primary focus:border-primary"
          >
            Our Mission
          </TabsTrigger>
          <TabsTrigger
            value="vision"
            className="px-6 py-2 text-lg font-semibold transition-all duration-300 border-b-2 border-transparent text-primary hover:border-primary focus:border-primary"
          >
            Our Vision
          </TabsTrigger>
          <TabsTrigger
            value="coreValue"
            className="px-6 py-2 text-lg font-semibold transition-all duration-300 border-b-2 border-transparent text-primary hover:border-primary focus:border-primary"
          >
            Our Core Values
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <p className="text-lg sm:text-xl text-center text-[#034401] font-[Poppins]">
            Our mission is to heal and empower individuals through the power of
            natural herbs while reducing reliance on chemical-based treatments.
            We are committed to providing scientifically backed herbal solutions
            that not only restore health but also educate people on the profound
            benefits of nature’s remedies. Through rigorous research and
            innovation, we ensure that every product is safe, effective, and
            well-documented—giving both individuals and health professionals the
            confidence to embrace natural healing.
          </p>
        </TabsContent>
        <TabsContent value="vision">
          <p className="text-lg sm:text-xl text-center text-[#034401] font-[Poppins]">
            Our vision is to become a global leader in natural wellness,
            offering innovative solutions that bridge the gap between modern
            science and traditional healing methods. We aspire to create a world
            where natural remedies are trusted, accessible, and widely used,
            providing people with the tools to lead healthier, more fulfilling
            lives. Through education, research, and advocacy, we will continue
            to empower individuals and communities to embrace the healing power
            of nature.
          </p>
        </TabsContent>
        <TabsContent value="coreValue">
          <p className="text-lg sm:text-xl text-center text-[#034401] font-[Poppins]">
            Our core values are rooted in respect for nature, integrity in our
            work, and a commitment to excellence. We believe in transparency,
            sustainability, and ethical practices, and we hold ourselves to the
            highest standards of quality and safety. By staying true to our
            values, we aim to inspire trust in our products and services,
            fostering long-lasting relationships with our customers and
            partners.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

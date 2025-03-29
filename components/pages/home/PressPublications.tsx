import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const PressPublications = () => {
  return (
    <section className="relative flex flex-col items-center w-full h-auto gap-12 p-10 px-6 bg-white">
      {/* Section Title */}
      <h2 className="mb-8 text-3xl font-[PoorRichard]  text-center text-primary">
        Press & Scientific Publications
      </h2>

      {/* Main Content Section */}
      <div className="relative flex flex-col w-full gap-10 lg:flex-row lg:gap-12">
        {/* Image */}
        <Image
          src="/assets/home/observing_plant.jpg"
          width={1000}
          height={1000}
          alt="Publication Image"
          className="object-cover w-full shadow-lg lg:w-1/2 rounded-xl"
        />

        {/* Publications List */}
        <div className="relative flex flex-col w-full gap-6 lg:w-1/2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 transition duration-300 ease-in-out border-b hover:bg-gray-50 rounded-xl"
            >
              <p className="text-xl font-medium text-gray-800">
                Funmi Lawrence-ogidan Unveils Health
              </p>
              <p className="text-base text-gray-600">
                Developing next-generation herbal medicines using cutting-edge
                technology.{" "}
                <a
                  href="#"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  Read Article <ExternalLinkIcon className="inline w-4 h-4" />
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

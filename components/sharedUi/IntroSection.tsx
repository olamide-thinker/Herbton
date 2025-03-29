import Image from "next/image";
import React from "react";

export const IntroSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <section className="flex items-center justify-center w-full px-4 py-8 min-h-[85vh] sm:px-8">
      <div className="flex flex-col items-center w-full max-w-3xl gap-6 overflow-visible bg-transparent">
        {/* Top Border Leaf Image */}
        <Image
          src="/assets/borderLeaf.svg"
          alt="Herbton Logo"
          height={30}
          width={200}
          className="w-auto h-[30px]"
        />

        {/* Main Content */}
        <p className="text-center text-lg sm:text-xl text-[#285E27] px-4">
          <span className="font-bold">{title || "Our mission"}</span>{" "}
          <span
            className="text-normal"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </p>

        {/* Bottom Border Leaf Image */}
        <Image
          src="/assets/borderLeaf.svg"
          alt="Herbton Logo"
          height={30}
          width={200}
          className="w-auto h-[30px] rotate-180"
        />
      </div>
    </section>
  );
};

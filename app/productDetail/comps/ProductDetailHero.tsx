import Image from "next/image";
import React from "react";

export const ProductDetailHero = ({ image }: { image: string }) => {
  return (
    <div className="relative ">
      <div className="flex items-center h-full mt-8">
        <Image
          src={"/assets/products/leaf-l.svg"}
          alt="previous"
          height={800}
          width={800}
          className=" aspect-square h-[100px]"
        />
        <Image
          src={image || ""}
          // src={"/assets/products/ProductImage.png"}
          alt="products name"
          height={2000}
          width={2000}
          priority
          className=" w-auto  rounded-3xl  h-[400px] "
        />
        <Image
          src={"/assets/products/leaf-r.svg"}
          alt="previous"
          height={800}
          width={800}
          className=" aspect-square h-[100px]  "
        />
      </div>
      {/* <div className="absolute -z-10 top-0 left-0 w-full bg-secondary h-[330px]"></div> */}
    </div>
  );
};

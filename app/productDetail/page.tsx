import React from "react";

import { ProductDetailHero } from "./comps/ProductDetailHero";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ingredient } from "./comps/Ingredient";

const Product = () => {
  return (
    <div className="flex flex-col items-center w-screen gap-8 bg-blue ">
      <ProductDetailHero />
      <div className="p-4 max-w-[500px] text-center space-y-4 items-center flex flex-col">
        <h1 className="font-['PoorRichard'] text-4xl">Product Name</h1>
        <p>
          Heal and empower individuals through the power of natural herbs while
          reducing reliance on chemical-based treatments. We are committed to
          providing scientifically backed herbal solutions.
        </p>
        <div className="flex items-center gap-1 mt-8">
          <p className="text-3xl font-bold">#</p>
          {Array.from({ length: 5 }).map((_, i) => (
            <Badge variant={"outline"} key={i}>
              Deep bone Pains
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-2 items-center p-4 aspect-auto w-[600px]  bg-secondary/75 mt-8">
        <Image
          src={"/assets/products/Scientific_paperImg.png"}
          alt=""
          width={1000}
          height={1000}
          className="w-30 h-30 aspect-square"
        />
        <div>
          <h3 className=" font-['PoorRichard'] text-xl">Scientific Paper</h3>
          <p className="text-xs">
            If you are inclined with deep science stuff, you might find this
            paper interesting. you will see how each molecular structures shows
            indications and reasons this indications play healing roles in the
            body.
          </p>
          <div>
            <Button variant={"link"}>Download ( 24mb )</Button>
            <Button variant={"link"}> Read on Medium</Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="w-full h-10 bg-repeat bg-secondary/50"
        style={{
          backgroundImage: "url('/assets/products/productDivider.svg')",
          // backgroundSize: "60px",
        }}
      ></div>

      <h3 className="font-['PoorRichard'] text-4xl mt-8 text-primary">
        Some Notable Ingredient In this Product We Want You to Know About
      </h3>

      {/* <div className="flex items-center gap-4 mt-8"> */}

      <Ingredient />
      {/* </div> */}

      {/* Divider */}
      <div
        className="w-full h-10 bg-repeat bg-secondary/50"
        style={{
          backgroundImage: "url('/assets/products/productDivider.svg')",
          // backgroundSize: "60px",
        }}
      ></div>

      <h3 className="font-['PoorRichard'] text-4xl mt-8 text-primary">
        Indications
      </h3>

      <div className="flex flex-col items-center gap-4 p-4  w-[900px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex p-4 rounded-lg g bg-secondary/75">
            <h4 className="text-[36px] w-3/2 font-['PoorRichard']">
              Avoid Alcohol while taking this medicine{" "}
            </h4>
            <p>
              Its originated from India, famous for its indication of allergy
              attacks. this plant contains locolintygermin that binds with
              colaminyn in body to fight against rapidly spreading irritations.
            </p>
          </div>
        ))}
      </div>
      <div className="py-16"></div>
    </div>
  );
};

export default Product;

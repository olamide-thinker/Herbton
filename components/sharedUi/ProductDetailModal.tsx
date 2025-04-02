"use client";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Ingredient } from "../../app/productDetail/comps/Ingredient";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductDetailHero } from "../../app/productDetail/comps/ProductDetailHero";
import { ProductCard } from "./ProductCard";
import CopyableText from "./copier";

type props = {
  trigger: React.ReactNode;
  img: string;
  name: string;
  description: string;
  forTreatmentOf: string;
  ingredient: string[];
};

export const ProductDetailModal = ({
  trigger,
  img,
  name,
  description,
  forTreatmentOf,
  ingredient,
}: props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <div>
            <ProductCard
              image={img || ""}
              name={name}
              short_description={description}
              forTreatmentOf={forTreatmentOf}
            />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit h-[90vh] overflow-y-auto items-center p-6 rounded-2xl shadow-2xl bg-background">
        <DialogTitle className="text-xl font-semibold text-primary">
          <CopyableText text="https://www.herbton.com/product/Producturl" />
        </DialogTitle>

        <div className="flex flex-col  items-center gap-8">
          <ProductDetailHero image={img} />

          {/* Product Overview */}
          <div className="flex flex-col items-center p-6 space-y-4 text-center ">
            <h1 className="font-['PoorRichard'] text-4xl text-primary">
              {name || "Product Name"}
            </h1>
            <p className="text-lg text-gray-700">
              {description || " description"}
            </p>
            <div className="flex items-center gap-2 mt-6">
              <p className="text-3xl font-bold text-primary">#</p>
              {Array.from({ length: 1 }).map((_, i) => (
                <Badge variant="outline" key={i} className="px-3 py-1">
                  {forTreatmentOf}
                </Badge>
              ))}
            </div>
          </div>

          {/* Scientific Paper Section */}
          <div className="flex gap-6 items-center p-6  bg-secondary/75 rounded-2xl shadow-lg">
            <Image
              src="/assets/products/Scientific_paperImg.png"
              alt="Scientific Paper"
              width={120}
              height={120}
              className="rounded-lg shadow-md"
            />
            <div>
              <h3 className="font-['PoorRichard'] text-xl text-primary">
                Scientific Paper
              </h3>
              <p className="text-sm text-gray-700">
                If you are inclined with deep science, you might find this paper
                interesting. It details molecular structures and their healing
                roles in the body.
              </p>
              <div className="flex gap-4 mt-2">
                <Button variant="link">Download (24MB)</Button>
                <Button variant="link">Read on Medium</Button>
              </div>
            </div>
          </div>

          <Divider />

          {/* Ingredients Section */}
          <SectionTitle>Some Notable Ingredients</SectionTitle>
          <div className="flex gap-4">
            {ingredient.map((a, i) => (
              <Badge variant="outline" key={i} className="px-3 py-1">
                {a}
              </Badge>
            ))}
          </div>
          {/* <Ingredient /> */}

          <Divider />

          {/* Indications Section */}
          {/* <SectionTitle>Indications</SectionTitle>
          <div className="flex flex-col items-center gap-6 p-6 w-[900px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex p-6 rounded-xl bg-background shadow-md gap-2"
              >
                <h4 className="text-[20px] font-['PoorRichard'] text-primary">
                  Avoid Alcohol while taking this medicine
                </h4>
                <div className="min-h-full bg-muted/50 p-0.5"></div>
                <p className="text-gray-700 text-lg">
                  This plant, originating from India, is known for its
                  anti-allergy effects. It contains locolintygermin, which binds
                  with colaminyn in the body to fight against rapid irritation.
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Reusable Components

const Divider = () => (
  <div
    className="w-full h-12 bg-repeat bg-secondary/50"
    style={{
      backgroundImage: "url('/assets/products/productDivider.svg')",
    }}
  />
);

const SectionTitle = ({ children }: { children: string }) => (
  <h3 className="font-['PoorRichard'] text-3xl text-primary mt-8">
    {children}
  </h3>
);

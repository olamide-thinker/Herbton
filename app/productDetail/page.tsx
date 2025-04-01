import React from "react";
import { ProductDetailHero } from "./comps/ProductDetailHero";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ingredient } from "./comps/Ingredient";

const indications = [
  "Avoid Alcohol while taking this medicine",
  "Helps with respiratory conditions",
  "Boosts immunity against infections",
  "Reduces inflammation naturally",
  "Supports digestive health",
];

const tags = [
  "Deep bone Pains",
  "Joint Support",
  "Immunity Boost",
  "Detox",
  "Anti-inflammatory",
];

const Product = () => {
  return (
    <div className="flex flex-col items-center w-screen gap-8 bg-blue">
      <ProductDetailHero image={""} />

      {/* Product Overview */}
      <div className="p-4 max-w-[500px] text-center flex flex-col space-y-4">
        <h1 className="font-['PoorRichard'] text-4xl">Product Name</h1>
        <p>
          Heal and empower individuals through the power of natural herbs while
          reducing reliance on chemical-based treatments. We are committed to
          providing scientifically backed herbal solutions.
        </p>
        <div className="flex items-center gap-1 mt-8">
          <p className="text-3xl font-bold">#</p>
          {tags.map((tag, i) => (
            <Badge variant="outline" key={i}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Scientific Paper Section */}
      {/* <ScientificPaper /> */}

      {/* Divider */}
      {/* <Divider /> */}

      {/* Ingredients Section */}
      <SectionTitle>Some Notable Ingredients</SectionTitle>
      <Ingredient />

      {/* Divider */}
      {/* <Divider /> */}

      {/* Indications Section */}
      <SectionTitle>Indications</SectionTitle>
      <IndicationsList indications={indications} />

      <div className="py-16"></div>
    </div>
  );
};

// ✅ Reusable Components

const ScientificPaper = () => (
  <div className="flex gap-2 items-center p-4 w-[600px]  mt-8">
    <Image
      src="https://drive.google.com/uc?export=view&id=1GZhRjSc17sxdsQRzmy7qeCKObLSFcUqm"
      alt="Scientific Paper"
      width={1000}
      height={1000}
      className="w-30 h-30 aspect-square"
    />
    <div>
      <h3 className="font-['PoorRichard'] text-xl">Scientific Paper</h3>
      <p className="text-xs">
        If you are inclined with deep science stuff, you might find this paper
        interesting. You will see how molecular structures indicate healing
        roles in the body.
      </p>
      <div>
        <Button variant="link">Download (24mb)</Button>
        <Button variant="link">Read on Medium</Button>
      </div>
    </div>
  </div>
);

const IndicationsList = ({ indications }: { indications: string[] }) => (
  <div className="flex flex-col items-center gap-4 p-4 w-[900px]">
    {indications.map((indication, i) => (
      <div key={i} className="flex p-4 rounded-lg ">
        <h4 className="text-[36px] w-3/2 font-['PoorRichard']">{indication}</h4>
        <p>
          This indication originates from India, known for its ability to combat
          allergy attacks. It contains locolintygermin, which binds with
          colaminyn in the body to fight rapidly spreading irritations.
        </p>
      </div>
    ))}
  </div>
);

const Divider = () => (
  <div
    className="w-full h-10 bg-repeat bg-secondary/50"
    style={{
      backgroundImage: "url('/assets/products/productDivider.svg')",
    }}
  />
);

const SectionTitle = ({ children }: { children: string }) => (
  <h3 className="font-['PoorRichard'] text-4xl mt-8 text-primary">
    {children}
  </h3>
);

export default Product;

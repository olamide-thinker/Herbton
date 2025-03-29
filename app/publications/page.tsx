import SecondHero from "@/components/sharedUi/SecondHero";
import React from "react";
import { RippleEffect } from "@/components/ui/RippleEffect";

const Publication = () => {
  return (
    <div className="w-screen bg-blue">
      <SecondHero title={"Press & Scientific Publications"} image={""} />

      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 5 }).map((a, i) => (
            <div key={i}>
              <RippleEffect className="rounded-4xl">
                <div className="flex flex-col gap-4 p-6 bg-muted/50 rounded-4xl hover:bg-secondary transition-all duration-300 ease-in-out">
                  <p className="text-sm text-[#034401]">27 February, 2025</p>
                  <h3 className="font-['PoorRichard'] text-xl sm:text-2xl md:text-3xl text-primary">
                    Latest Discovery
                  </h3>
                  <p className="text-base text-[#034401]">
                    Exploring the molecular mechanisms of traditional herbs
                    through advanced scientific methods.
                  </p>
                </div>
              </RippleEffect>
              {/* <ProductDetailModal /> */}
            </div>
          ))}
        </div>
        {/* filter ad control */}
        {/* <FilterBar /> */}
        {/* Product list */}
      </div>
    </div>
  );
};

export default Publication;

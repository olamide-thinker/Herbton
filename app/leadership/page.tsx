import React from "react";
// import { RippleEffect } from "@/components/ui/RippleEffect";
import { MissionVision } from "./comps/missionVision";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Leadership = () => {
  return (
    <div className="w-screen bg-blue">
      {/* <SecondHero title={"Press & Scientific Publications"} image={""} /> */}

      <h3 className="font-['PoorRichard'] text-4xl sm:text-5xl lg:text-6xl w-full text-center py-8 text-primary">
        Leadership
      </h3>

      <MissionVision />
      <Separator className="my-16" />
      <div className="flex justify-center p-1">
        <div className="flex flex-col sm:flex-row items-center gap-8 w-full p-2 bg-secondary lg:w-[65%] mx-auto">
          <Image
            src={"/assets/home/observing_plant.jpg"}
            alt={"Leadership Image"}
            height={1000}
            width={1000}
            className="w-full sm:w-auto sm:max-h-120 aspect-square object-cover rounded-lg"
          />
          <div className="space-y-4 max-w-[400px] text-center sm:text-left">
            <h3 className="text-4xl sm:text-5xl text-primary font-['PoorRichard']">
              Funmi Ogidan
            </h3>
            <p className="text-sm text-[#034401]">Founder/CEO</p>
            <p className="text-base font-[Poppins] text-[#034401]">
              Exploring the molecular mechanisms of traditional herbs through
              advanced scientific methods.
            </p>
          </div>
        </div>
      </div>
      <Separator className="my-16" />
      <div className="flex justify-center">
        <div className="gap-4 p-2 m-8 flex flex-col justify-center items-center w-full max-w-screen-lg">
          <h3 className="text-[42px] sm:text-5xl font-['PoorRichard'] text-left text-[#034401] mb-4">
            Our Board of Leadership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-4">
            {Array.from({ length: 5 }).map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                {/* <RippleEffect className=" rounded-4xl"> */}
                <div className="bg-white overflow-hidden border rounded-lg shadow-md hover:shadow-lg transition-all">
                  <Image
                    src={"/assets/home/observing_plant.jpg"}
                    alt={"Team Member Image"}
                    height={1000}
                    width={1000}
                    className="w-full h-80 object-cover"
                  />
                  <div className="px-4 py-4 bg-white">
                    <h3 className="text-2xl text-primary font-['PoorRichard']">
                      Funmi Ogidan
                    </h3>
                    <p className="text-sm">My role</p>
                  </div>
                </div>
                {/* </RippleEffect> */}
              </div>
            ))}
          </div>
          {/* filter ad control */}
          {/* <FilterBar /> */}
          {/* Product list */}
        </div>
      </div>
    </div>
  );
};

export default Leadership;

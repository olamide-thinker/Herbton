import React from "react";
// import { RippleEffect } from "@/components/ui/RippleEffect";
import { MissionVision } from "./comps/missionVision";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Leadership = () => {
  const content = [
    {
      img: "",
      name: "Name",
      role: "",
      detail: ""
        // "Dr. Ibrahim, a world-class, licensed oncology pharmacist based in the United Kingdom. He has a profound understanding of both pharmacological processes and the clinical standards that GNHNL will need to uphold. Dr. Alama is brilliant, with a calm and composed demeanor that truly sets him apart. Beyond his professional expertise, I deeply admire his approach to life as a father and husband— values that are essential in nurturing a truly healthy African society. One insightful idea Dr. Ibrahim proposed is emphasizing the concept of maintenance medicine as a pathway toward discoverable and eventual cures. He also highlighted the potential significance of focusing on diabetes and pancreatic cancer, two critical areas that could lead to groundbreaking advancements for medical community globally.",
    },
    {
      img: "",
      name: "Name",
      role: "",
      detail:""
        // "Dr. Temilade, whose intellect places her among the top 0.0005% of Nigerian minds globally. I have a very deep respect for this woman. She specializes in cancer research and currently works on behalf of Google’s founders, Sergey Brin and Larry Page. Her expertise in biochemistry and the scientific process is unparalleled, and she has already developed actionable ideas that could greatly benefit GNHNL. She is eager to meet you and share her insights. You can explore her profile on ResearchGate [https://www.researchgate.net/profile/Linda-Senbanjo. One of the ideas Dr. Temilade explored is the development of an African Herbal Atlas. This atlas would be integrated with GNHNL’s website, making it accessible to the global medical and scientific community.",
    },
    {
      img: "",
      name: "Name",
      role: "",
      detail: "",
    },
  ];

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
            src={"/assets/leadership/funmi_ogidan_founder_ceo.jpg"}
            alt={"Leadership Image"}
            height={1000}
            width={1000}
            className="w-full sm:w-auto sm:max-h-120 aspect-square object-cover rounded-lg object-top"
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
            {content.map((a, i) => (
              <div key={i} className="flex group flex-col items-center gap-4">
                {/* <RippleEffect className=" rounded-4xl"> */}
                <div className="bg-white w-full h-[full] overflow-hidden border rounded-lg shadow-md hover:shadow-lg transition-all ">
                  <div className="card-container">
                    <div className="card min-h-[300px] transform group-hover:rotate-y-180">
                      {/* card front */}
                      <div className="card-front">
                        <Image
                          src={
                            a.img || "/assets/leadership/placeholder_user.png"
                          }
                          alt={a.name}
                          height={1000}
                          width={1000}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      {/* card Back */}
                      <div className="card-back overflow-hidden overflow-y-scroll p-2">
                        {a.detail}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-4 mt-4 bg-white">
                    <h3 className="text-2xl text-primary font-['PoorRichard']">
                      {a.name}
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

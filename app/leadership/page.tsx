"use client"
import React, {useState} from "react";
// import { RippleEffect } from "@/components/ui/RippleEffect";
import { MissionVision } from "./comps/missionVision";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Leadership = () => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };
  const content = [
    {
      img: "/assets/leadership/ogunbunmi_lajide.jpg",
      name: "Ogunbunmi M. Olajide",
      role: "Board Member",
      detail:`As a dedicated Traditional Medicine Practitioner, I draw inspiration from my maternal grandfather's expertise in spiritual health. Building on this heritage, I've pursued certifications and training to enhance my skills. My expertise lies in infertility treatment and herbal remedies formulation and research 

Qualifications
- Graduate of Mass Communication, Olabisi Onabanjo University
- Certified Herbal Medicine Practitioner, Lagos State Traditional Medicine Board
- Diploma and Advanced Diploma, Faculty of Pharmacy, Department of Pharmacognosy, University of Lagos`,
    }, {
      img: "/assets/leadership/kayode_oseni.jpg",
      name: "Kayode Oseni",
      role: "Board Member",
      detail:`Kayode Oseni, born on November 17, 1966, is a highly experienced practitioner and scholar in Natural Medicine. Starting his education in Lagos, he initially studied Drug and Chemical Technology, and  was in the University of Lagos,College of Medicine studying Physiotherapy before discovering his passion for healing through Herbal Medicine, influenced by his grandfather. He trained under traditional herbalists and became a member of the Ogun State Traditional Healers Association. His pursuit of holistic healing led him to study Asian Medicine, Naturopathic Medicine, and Energy Medicine, earning advanced degrees and a professorship. 

Kayode has held prominent academic roles, including Head of Natural Medicine at African-American University, Deputy Provost at the National College of Natural Medicine, and Dean at Cyrillic College. He has also served as Ogun State Coordinator and Vice-President of the Nigerian Council of Physicians of Natural Medicine, contributing significantly to the promotion of alternative health in Nigeria.

Since 1993, he has been CEO and Chief Consultant of Alayo Health and Wellness Centre in Abeokuta, providing natural healing services. As an author, he has published two books: The Healer's Manual (2019) and The Spirituality of Healing (2025). Kayode Oseni continues to share his expertise through teaching, leadership, and research in Natural Medicine.`,
    },
    {
      img: "/assets/leadership/oluwafemi_adebayo.jpg",
      name: "Oluwafemi Adebayo",
      role: "Scientific Researcher",
      detail:`Born on 28/04/1999, is a dedicated and results-driven Scientific Research Assistant with a strong foundation in data-driven research and interdisciplinary collaboration. With an academic background rooted in Business Administration, Oluwafemi developed a deep interest in evidence-based inquiry and scientific investigation during undergraduate studies, which inspired a research career.

Trained in both quantitative and qualitative methodologies, Oluwafemi has developed expertise in experimental design, data collection, statistical analysis, and literature review. Proficient in tools such as SPSS, R, and Excel, he has contributed to research projects spanning public health, natural medicine, social sciences, and economic development. Known for being detail-oriented and reliable, Oluwafemi excels at managing research logistics and synthesizing findings into impactful reports and publications.

Oluwafemi has worked with organizations such as  Global New Herbal Life, academic institutions, colla`,
    },
    {
      img: "/assets/leadership/basheeru_kazeem.jpg",
      name: "Dr. Basheeru Kazeem Adebayo",
      role: "Board Member",
      detail: `Basheeru, Kazeem Adebayo (Ph.D.) is a dedicated chemist and research technologist with over two decades of experience in analytical chemistry, pharmaceutical quality control, and environmental science. He holds a Ph.D. in Chemistry from the University of Ilorin, along with an M.Sc. in Analytical Chemistry from the University of Lagos and a B.Sc. in Industrial Chemistry. His academic journey reflects a strong commitment to scientific excellence and applied research.

Currently serving at the DKO Central Research and Reference Laboratories, University of Lagos, Dr. Basheeru is actively involved in analytical method development, HPLC and GCMS analysis, and laboratory quality management. He contributes to the training of undergraduate and postgraduate students, supervises research projects, and plays a key role in the university's ISO 17025:2017 accreditation process. His previous industry roles include significant contributions to WHO-prequalified antimalarial formulations at Swiss Pharma Nigeria Ltd.

Dr. Basheeru’s research spans pharmaceutical analysis, environmental toxicology, medicinal plant studies, and nano-material development. He has published widely in reputable journals and presented at leading scientific conferences. A member of the Chemical Society of Nigeria (CSN) and the Institute of Chartered Chemists of Nigeria (MICCON), he continues to drive impactful research and uphold standards in scientific practice."`,
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
              Funmi Lawrence-Ogidan is a certified Alternative Medical Doctor and founder of Global New Herbal Life Concept Ltd, with over 20 years in herbal medicine. She blends African traditional healing with modern practices to promote holistic wellness. Her work champions accessible, organic health solutions and advances the professionalization of herbal medicine in Nigeria.
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
                    {/*<div className="card min-h-[300px] transform group-hover:rotate-y-180 group-active:rotate-y-180  duration-300 ease-in-out">*/}
                    <div
                        className={`card min-h-[300px] transform duration-300 ease-in-out ${
                            flipped ? 'rotate-y-180' : ''
                        }`}
                        onClick={toggleFlip}
                    >
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
                    <p className="text-sm">{a.role}</p>
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

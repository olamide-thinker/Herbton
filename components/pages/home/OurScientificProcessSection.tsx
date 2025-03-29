import React from "react";
import Image from "next/image";

export const OurScientificProcessSection = () => {
  const content = [
    {
      title: "Plant Extraction & Analysis",
      content:
        "At the core of our scientific process is the meticulous extraction and analysis of natural-based compounds. We employ advanced techniques to isolate bioactive substances from medicinal plants and other natural materials, ensuring the preservation of their therapeutic properties. Our comprehensive analysis, utilizing methods like chromatography and spectroscopy, allows us to identify and quantify these compounds accurately. This rigorous approach guarantees that our herbal products are both safe and effective, providing reliable natural healing solutions.",
      image: "/assets/home/Plant_Extraction_&_Analysis.jpg",
    },
    {
      title: `Herbal <br/> Formulation`,
      content:
        "This stage focuses on the careful crafting of herbal mixtures from expertly extracted and analyzed plant materials. Through precise formulation techniques, we blend these natural ingredients to create targeted solutions that promote optimal health. This process ensures that each herbal combination delivers its intended therapeutic effects, supporting both the prevention and treatment of various health conditions.",
      image: "/assets/home/herbal_formulation.jpg",
    },
    {
      title: "Biologically targeted Herbal mixtures",
      content:
        "Biologically targeted herbal mixtures are carefully formulated combinations of natural-based compounds designed to interact with specific biological pathways in ensuring preventive, curative, and maintenance of human health. By leveraging advanced research methods, such as network pharmacology, we identify and optimize these interactions to develop treatments that precisely address particular health concerns.",
      image: "/assets/home/Biologically_targeted_Herbal_mixtures.jpg",
    },
  ];

  return (
    <section className="w-full px-4 py-16 border-t bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-['PoorRichard'] text-3xl sm:text-4xl text-center text-[#034401] mb-12">
          Our Scientific Process
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.map((item, i) => {
            const { title, content, image } = item;
            return (
              <div
                key={i}
                className="relative flex flex-col items-start bg-white rounded-[20px] shadow-md overflow-hidden hover:bg-[#F3FFE5] transition-colors duration-300"
              >
                <Image
                  src={image}
                  alt={`Process Image ${i + 1}`}
                  height={500}
                  width={500}
                  className="w-full h-[265px] object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-[#F3FFE5] rounded-full shadow-xl">
                  <p className="text-2xl font-bold text-[#285E27]">{i + 1}</p>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-['PoorRichard'] text-[#034401] mb-4"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <p className="text-base font-[Poppins] text-black/75">
                    {content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

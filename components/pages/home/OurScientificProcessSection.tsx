import React from 'react'
import Image from 'next/image'

export const OurScientificProcessSection = () => {
  const content =[
    {
      title:"Plant Extraction & Analysis",
      content:"At the core of our scientific process is the meticulous extraction and analysis of natural-based compounds. We employ advanced techniques to isolate bioactive substances from medicinal plants and other natural materials, ensuring the preservation of their therapeutic properties. Our comprehensive analysis, utilizing methods like chromatography and spectroscopy, allows us to identify and quantify these compounds accurately. This rigorous approach guarantees that our herbal products are both safe and effective, providing reliable natural healing solutions. ",
      image:"/assets/home/Plant_Extraction_&_Analysis.jpg"
    },
    {
      title:`<span>Herbal <br/> Formulation</span>`,
      content:"This stage focuses on the careful crafting of herbal mixtures from expertly extracted and analyzed plant materials. Through precise formulation techniques, we blend these natural ingredients to create targeted solutions that promote optimal health. This process ensures that each herbal combination delivers its intended therapeutic effects, supporting both the prevention and treatment of various health conditions.",
      image:"/assets/home/herbal_formulation.jpg"
    },
    {
      title:"Biologically targeted Herbal mixtures",
      content:"Biologically targeted herbal mixtures are carefully formulated combinations of natural-based compounds designed to interact with specific biological pathways in ensuring preventive, curative and maintenance of human health. By leveraging advanced research methods, such as network pharmacology, we identify and optimize these interactions to develop treatments that precisely address particular health concerns.",
      image:"/assets/home/Biologically_targeted_Herbal_mixtures.jpg"
    },
    
  ]
  return (
    <section className='flex justify-center w-full h-full gap-4 p-4 py-16 border-t '>
      <div className='w-fit '>
        <div className='px-4 pb-4'>
      <h2 className='font-["PoorRichard"] text-2xl fit'>Our Scientific process</h2>
        </div>
      <div className='flex justify-center gap-4 w-fit'>
        {
          content.map((a,i)=>{

            const {title, content, image}=a

            return(

      <div key={i} className="relative flex flex-col items-start cursor-default rounded-[20px] hover:bg-[#F3FFE5] gap-4 p-4 w-[426px]  bg-white">

          <Image
            src={image}
            alt="Process Image"
            height={1000}
            width={1000}
            className="relative w-full h-[265.77px] rounded-lg shadow-[inset_0_0_0_1px_transparent]"
          />
          <div className=" flex flex-col top-8 left-8 justify-center items-center px-4 py-4 bg-[#F3FFE5] h-10 shadow-xl w-10 rounded-full absolute">
            <p className="text-3xl font-normal font-['PorterSansBlock'] text-[#285E27]">{1+i}</p>
          </div>
          <h3 className="text-4xl font-['PoorRichard'] text-[#034401]" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-base font-poppins text-black/75">
            {content}
          </p>
        </div>
            )
          })
      }
      </div>
      </div>
      
      </section>
  )
}

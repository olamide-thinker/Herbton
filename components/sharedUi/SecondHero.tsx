import Image from 'next/image'
import React from 'react'

interface prop{
  title:string;
  image:string;
}

const SecondHero = ({title,image}:prop) => {
  return (
    <section className='w-full border h-fit '>
        <Image
          src={image || "/assets/home/Biologically targeted Herbal mixtures.jpg" }
          alt="Placeholder"
          width={1000}
          height={1000}
          className="relative object-cover w-full h-90 "
        />
        
        <h1 className="m-0 p-0 text-[48px] font-['PoorRichard'] font-normal text-center text-[#034401]">
        {title || 'Title of page'}
                  </h1>
      
      </section>
  )
}

export default SecondHero
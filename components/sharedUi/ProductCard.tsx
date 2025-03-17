'use client'
import Image from 'next/image'
import React from 'react'
import { RippleEffect } from '../ui/RippleEffect'

export const ProductCard = () => {
  return (
    <RippleEffect className="">

   <div className="relative w-[350px] flex flex-col gap-4 p-2 bg-[#FAFAFA]  group  cursor-pointer h-fit hover:bg-[#F3FFE5] hover:shadow-sm pb-4">

  

  <Image
    src="/assets/home/Biologically targeted Herbal mixtures.jpg" 
    alt="Placeholder"
    width={1000}
    height={1000}
    className="relative object-cover h-90 "
  />
  <div className='flex flex-col gap-2 p-2'>

  <p className="text-2xl  text-[#034401] font-['PoorRichard']">Product Name</p>
  <p className="text-gray-700 font-poppins">Developing next-generation herbal medicines using cutting-edge technology.</p>

  </div>
  <div className="flex gap-2">
    { Array.from({length:3}).map((a,i)=>(
 <div key={i} className="flex items-center justify-center px-3 py-1 bg-white group-hover:bg-[#F3FFE5] rounded-full ring ring-[#F5F5F5]  group-hover:mix-blend-multiply group-hover:ring group-hover:ring-[#D2ECB4] ">
 <p className="text-sm text-gray-700 font-poppins">Diabetic</p>
</div>
    ))
   }
    
  </div>
  </div>

  

</RippleEffect>
  )
}

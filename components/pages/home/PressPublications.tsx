import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const PressPublications = () => {
  return (
    <section className='relative flex flex-col items-center w-full h-auto gap-10 p-10 px-4 overflow-visible bg-green-100 '>
    
      

  <p className="m-0 p-0 text-4xl font-['PoorRichard'] text-green-800 text-center">
    Press & Scientific Publications
  </p>

  <div className="relative flex flex-row gap-8 w-[85%]">
  

  <Image
    src="/assets/home/observing_plant.jpg" 
    width={1000}
    height={1000}
      alt="Publication Image"
      className="object-cover w-1/2 rounded-xl"
    />

    <div className="relative flex flex-col w-1/2 h-auto gap-2 p-2 overflow-hidden bg-white rounded-xl">
     {
      Array.from({length:4}).map((a,i)=>(
      <div key={i} className="relative flex flex-col gap-4 p-2 pb-4 border-b hover:bg-black/2 rounded-xl">
        <p className="text-2xl font-medium text-green-800 font-poppins">Funmi Lawrence-ogidan Unveils Health</p>
        <p className="text-base text-gray-700 font-poppins">Developing next-generation herbal medicines using cutting-edge technology. <a href="#" className="text-blue-500 hover:underline">Read Article <ExternalLinkIcon className='inline w-auto h-3 mb-1 '/></a></p>
</div>
      ))
    }
    </div>
  </div>


      </section>
  )
}

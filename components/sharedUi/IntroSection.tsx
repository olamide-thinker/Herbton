
import Image from 'next/image'
import React from 'react'

export const IntroSection = ({title,content}:{title:string, content:string}) => {
  return (
    <section className='h-[85vh] w-full items-center flex justify-center item-center'>


    <div className="flex flex-col items-center gap-9 w-full max-w-[65%] bg-transparent overflow-visible">
     <Image src={'/assets/borderLeaf.svg'} alt={'Herbton Logo'} height={1000} width={1000} className='w-auto h-[30px] '/>
     

      <p className="text-center text-xl text-[#285E27] ">
        <span className='font-bold'>
       {title || 'Our mission'}
        </span>{" "}
    
        <span className="text-normal" dangerouslySetInnerHTML={{ __html: content }} />

      </p>

      <Image src={'/assets/borderLeaf.svg'} alt={'Herbton Logo'} height={1000} width={1000} className='w-auto h-[30px] rotate-180'/>
     
    </div>

      </section>
  )
}

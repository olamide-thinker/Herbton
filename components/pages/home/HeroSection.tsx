import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-[95vh] w-full overflow-hidden'>
   
                
                <div className="absolute flex h-full flex-col justify-center items-start p-[26px_40px_13px_88px] w-[690px] bg-[rgba(16,16,16,0.01)] gap-[7px]  rounded-none transform rotate-0 opacity-100 mix-blend-pass-through backdrop-blur-[4px]">
                  <p className="m-0 p-0 text-[75px] font-['PoorRichard'] font-normal text-left textShadow-lg text-[rgba(243,255,229,1)]">
                    Reimagining<span className="text-[rgba(230,255,237,1)]"> </span><span className="text-[rgba(147,255,176,1)]">Herbal</span> Medicine<span className="text-[rgba(230,255,237,1)]">.</span>
                  </p>
                  <p className="m-0 p-0 text-[20px] font-[Poppins] font-normal text-left text-[rgba(243,255,229,1)]">
                    Through rigorous research and innovation, we&#39;re advancing natural healing solutions for a healthier world.
                  </p>
                </div>

                <Image
                  className="object-cover w-full h-full "
                  src="/assets/home/heroImage.png"
                  alt="Next.js logo"
                  width={3000}
                  height={3000}
                  priority
                />

        </section>
  )
}

export default HeroSection
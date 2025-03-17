import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="relative bg-black flex flex-col gap-[60px]  items-center justify-center h-fit overflow-hidden py-8">
  
      <div className="flex items-start justify-start p-0 bg-transparent border-0 gap-52 w-fit h-fit">
 
  <div className="flex flex-col gap-5">
    <h3 className="text-2xl font-medium text-white">Corporate</h3>
    <Link href={'#'}>
    <p  className="text-lg text-[#F3FFE5]">About Us</p>
    </Link>
    <p className="text-lg text-[#F3FFE5]">Leadership</p>
    <p className="text-lg text-[#F3FFE5]">Research & Development</p>
  </div>

 
  <div className="flex flex-col gap-5">
    <p className="text-2xl font-medium text-white">Resources</p>
    <p className="text-lg text-[#F3FFE5]">Investor Relations</p>
    <p className="text-lg text-[#F3FFE5]">Media Center</p>
    <p className="text-lg text-[#F3FFE5]">Careers</p>
  </div>

 <div className="flex flex-col gap-5">
    <p className="text-2xl font-medium text-white">Legal</p>
    <p className="text-lg text-[#F3FFE5]">Privacy Policy</p>
    <p className="text-lg text-[#F3FFE5]">Terms of Use</p>
    <p className="text-lg text-[#F3FFE5]">Accessibility</p>
  </div>

  <div className="flex flex-col gap-5">
    <p className="text-2xl font-medium text-white">Connect</p>
    <p className="text-lg text-[#F3FFE5]">Locations</p>
    <p className="text-lg text-[#F3FFE5]">Contact Us</p>
    <p className="text-lg text-[#F3FFE5]">Support</p>
  </div>



 
</div>

<div className='w-full p-4 border-t border-[#F3FFE5]/60'>
  <p className='text-[#F3FFE5]/40 text-xs'>©2025 Herbton Ltd. All rights reserved</p>
</div>
  <div className="absolute self-center w-full h-full top-16 opacity-70">
    <Image height={500} width={500} src="/footer image.svg" alt="placeholder" className="object-contain w-full -ml-[400px] h-full rounded-xl"/>
  </div>

      </footer>
  )
}

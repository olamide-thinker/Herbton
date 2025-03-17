'use client'
// import { Button } from '@heroui/react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  const menuItem = [
    {
      title: 'Our Story',
      url:'#'
    },
    {
      title: 'Products',
      url:'#'
    },
    {
      title: 'Services',
      url:'#'
    },
    {
      title: 'Distributors',
      url:'#'
    },
    {
      title: 'Leadership',
      url:'#'
    },
  ]
  return (
    <div className='border flex justify-between items-center p-4'>
       
    <Image src={'/assets/Herbton_logo.svg'} alt={'Herbton Logo'} height={1000} width={1000} className='w-[172px] h-[60px]'/>
  
  
  <div className="flex gap-2">
    {
    menuItem.map((item, i)=> <Link href={item.url} key={i}><Button className="text-xl" variant={'ghost'}>{item.title}</Button></Link> )
    }
  </div>


    </div>
  )
}

export default NavBar

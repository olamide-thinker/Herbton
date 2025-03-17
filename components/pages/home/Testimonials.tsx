import { TestimonialCard } from '@/components/sharedUi/TestimonialCard'
import React from 'react'

export const Testimonials = () => {
  return (
    <section className='w-full p-8 h-fit'>
      Our Scientific Process
       <div className='flex gap-4'>
              {Array.from({length:4}).map((_,i)=><TestimonialCard key={i}/>)}
            </div>
      </section>
  )
}

import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 mb-6 border-b border-neutral-800'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'>What People are saying</h2>
        <div className='flex flex-wrap justify-center mb-7'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-light'>
                        <p className='h-40'>{testimonial.text}</p>
                        <div className='flex mt-8 items-start gap-3'>
                            <img src={testimonial.image} className='w-12 h-12 rounded-full border border-neutral-600'/>
                            <div className='flex flex-col'>
                                <span className='text-neutral-500'>{testimonial.user}</span>
                                <span className='text-neutral-600 font-medium'>{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        
    </div>
  )
}

export default Testimonials
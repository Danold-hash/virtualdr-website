import React from 'react'
import { features } from '../constants'
import FeatureList from './FeatureList'

const Features = () => {
  return (
    <div className='relative mt-10 lg:mt-20 border-b border-neutral-800 min-h-[800px] '>
        <div className='text-center'>
            <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1'>FEATURE</span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-tighter'>Easily build <span className='gradient-text'> your code</span></h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-3 mt-10 lg:mt-20'>
            {features.map((feature, index) => (
                <FeatureList key={index} feature={feature}/>
            ))}
        </div>
    </div>
  )
}

export default Features
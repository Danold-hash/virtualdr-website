import React from 'react'

const FeatureList = ({feature}) => {
  return (
    <div className='flex '>
        <div className='flex mx-6 justify-end items-center text-orange-700 rounded-full bg-neutral-700 p-2 w-10 h-10'>
            {feature.icon}
        </div>
        <div>
            <h5 className='mt-1 mb-6 text-lg lg:text-xl'>{feature.text}</h5>
            <p className='text-md p-2 mb-10 lg:mb-20 text-neutral-400 my-5'>{feature.description}</p>
        </div>
    </div>
  )
}

export default FeatureList
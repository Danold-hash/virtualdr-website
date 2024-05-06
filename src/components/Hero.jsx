import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';


const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-tighter'>VirtualR buid tools <span className='gradient-bg-color text-transparent bg-clip-text'>{" "} for developers</span></h1>
        <p className='text-center text-xl mt-10 text-neutral-500 max-w-4xl'>
            Empower your creativity and brign your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality.
        </p>
        <div className='flex justify-center mt-10 lg:my-10'>
            <a href='#' className='gradient-bg-color py-3 px-4 mx-3 text-sm lg:text-xl rounded-md'>Start for free</a>
            <a href='#' className='py-3 px-4 mx-3 rounded-md border border-neutral-400'>Documentation</a>

        </div>
        <div className='flex max-sm:flex-wrap justify-center mt-10'>
            <video autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video1} type='video/mp4'/>
                Your browser does not support the video tag
            </video>
            <video autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video2} type='video/mp4'/>
                Your browser does not support the video tag
            </video>
        </div>
    </div>
  )
}

export default Hero
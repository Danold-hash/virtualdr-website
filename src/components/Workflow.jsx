import React from 'react'
import code from '../assets/code.jpg';
import { checklistItems} from '../constants';
import CheckListItem from './CheckListItem';

const Workflow = () => {
  return (
    <div className='relative mt-10 lg:mt-20 mb-10 border-b border-neutral-800'>
        <h3 className='text-3xl sm:text-5xl lg:text-6xl text-center'>Accelerate your <span className='gradient-text'>coding workflow</span></h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 p-3'>
            <div className='flex justify-between items-start'>
                <img className='w-80 h-auto lg:w-full' src={code}/>
            </div>
            <div className='w-full'>
                {checklistItems.map((checkListItem, index) => (
                    <CheckListItem key={index} checkListItem={checkListItem}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow
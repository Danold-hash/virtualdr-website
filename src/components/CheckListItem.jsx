import React from 'react'
import { CircleCheck } from 'lucide-react'

const CheckListItem = ({checkListItem}) => {
  return (
    <div className='flex mt-9'>
        <div className='flex justify-center mx-6 text-green-800'>
            <CircleCheck/>
        </div>
        <div className=''>
            <h5>{checkListItem.title}</h5>
            <p className='text-neutral-400'>{checkListItem.description}</p>
        </div>
    </div>
  )
}

export default CheckListItem
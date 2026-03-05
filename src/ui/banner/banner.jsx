import React from 'react'
import vector1 from '../../assets/vector1.png'
import vector2 from '../../assets/vector2.png'




export const Banner = ({count, resolvedCount}) => {
  return (
    <div className='flex gap-4 lg:gap-10 lg:my-40 my-20 lg:mx-30 mx-6'>
      <div className='relative'>
        <img className=' w-[700px] h-[300px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]' src={vector1} alt=""  />
      <span className='absolute inset-0 flex items-center justify-center font-semibold text-2xl'>In-Progress</span> <span className='absolute inset-0 flex items-center justify-center mt-10 font-semibold text-6xl'><br  />{count}</span>
      </div>
      <div className='relative'>
        <img  className='w-[700px] h-[300px] bg-gradient-to-r from-[#54CF68] to-[#00827A]' src= {vector2} alt=""  />
         <span className='absolute inset-0 flex items-center justify-center font-semibold text-2xl'>Resolved</span> <span className='absolute inset-0 flex items-center justify-center mt-10 font-semibold text-6xl'><br  />{resolvedCount}</span>
      </div>
    </div>
  )
}


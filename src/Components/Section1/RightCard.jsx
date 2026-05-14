import React from 'react'

const RightCard = ({img,tag,number}) => {
  return (
    <div className='h-full overflow-hidden shrink-0  relative w-80 rounded-4xl'>
        <img  className='h-full w-full object-cover' src={img} alt=""  />
        <div className='absolute top-0 left-0 h-full  p-8 justify-between flex flex-col'>
            <h1 className='bg-white font-mono font-semibold h-9 w-9 flex  justify-center items-center rounded-full '>{number}</h1>
            <div>
            <p className='text-xl text-white md-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, accusantium.</p>
               <div className='flex justify-between mt-4'> 
                <button className='bg-blue-500 text-white text-sm px-7 py-2 rounded-full' >{tag}</button>
                <button className='bg-blue-500 text-white text-sm px-7 py-2 rounded-full'> <i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
           </div>
  )
}

export default RightCard
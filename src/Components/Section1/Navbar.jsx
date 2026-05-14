import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-24 py-10  bg-gray-100'>
      
      <h2 className='bg-black text-white  flex-wrap uppercase rounded-full px-8 py-2 text-sm  '>
        Target Audience
      </h2>
      <button className='bg-black text-white  flex-wrap rounded-full  uppercase px-6 py-2 text-sm tracking-wider'>
        Digital Banking Platform
      </button>

    </div>
  )
}

export default Navbar
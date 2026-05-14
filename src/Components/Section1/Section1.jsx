import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'



const Section1 = (props) => {

  return (
    <div className='gap-10 flex py-10 px-15 h-[90vh] w-full bg-gray-100 text-black'>
    <LeftText/>
    <RightText users={props.users}/>
    </div>
  )
}

export default Section1
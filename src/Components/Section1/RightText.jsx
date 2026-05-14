import React from 'react'
import RightCard from './RightCard'


const RightText = (props) => {
 
  return (
    <div id='right' className='h-90/100 w-3/4 ml-auto flex flex-nowrap  overflow-x-auto  gap-5  p-6 rounded-2xl'>
       {props.users.map((item,index)=>{
        return ( <RightCard 
          key={item.id} 
          img={item.img} 
          tag={item.tag}
          number={index+1}
          /> ) 
       })}
    </div>
  )
    
}

export default RightText
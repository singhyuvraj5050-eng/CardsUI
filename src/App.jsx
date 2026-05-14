import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Navbar from './Components/Section1/Navbar'


const App = () => {
  const users = [
    {
    id:1,
    img:'https://images.unsplash.com/photo-1717347424091-08275b73c918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    intro:'', 
    tag:'Satisfied'
  },
    {
    id:2,
    img:'https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'', 
    tag:'UnderServed'
  },
    {
    id:3,
     img:'https://images.unsplash.com/photo-1693495430456-25c0a37ec5dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D',
    tag:'UnderBanked'
  },
   {
    id:4,
    img:'https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'', 
    tag:'UnderServed'
  }
  ]
  return (
    <div>
      <Navbar />
      <Section1 users={users} />
      <Section2 />
 
    </div>
  )
}

export default App
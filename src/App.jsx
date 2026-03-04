
import { Suspense } from 'react'
import './App.css'
import { Banner } from './ui/banner/banner'
import { Navbar } from './ui/navbar'
import { Tickets } from './ui/tickets/tickets'
// import { use } from 'react'



const fetchTickets = async () =>{
    const res = await fetch('/ticket.json')
    return res.json()
}

function App() {
  const playerPromise = fetchTickets()
  

  return (
   <>
   <Navbar></Navbar>

   <Banner></Banner>

   <Suspense fallback={<div className='flex justify-center items-center '><span class="loading loading-ring loading-xl"></span><span class="loading loading-ring loading-xl"></span><span class="loading loading-ring loading-xl"></span></div>}>
    <Tickets playerPromise={playerPromise}></Tickets>
   </Suspense>
   


   
   </>
    
  )
}

export default App

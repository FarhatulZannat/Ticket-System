
import { Suspense } from 'react'
import './App.css'
import { Banner } from './ui/banner/banner'
import { Navbar } from './ui/navbar'
import { Tickets } from './ui/tickets/tickets'
import { Footer } from './ui/footer'
import { useState } from 'react'
// import { use } from 'react'



const fetchTickets = async () =>{
    const res = await fetch('/ticket.json')
    return res.json()
}
const playerPromise = fetchTickets()

function App() {
  

  const [inTickets, setTickets] = useState([]); 
  const [inProgress, setInProgress] = useState([]) ;
  const [resolved, setResolved] = useState([]); 


  const handleInProgress = (ticket)=>{
    alert('Task Added')
    setInProgress([...inProgress,ticket ])
  }
  const handleComplete = (id)=>{
    alert('Task Completed')
    const updated = inProgress.filter(task => task.id !==id)
    setInProgress(updated)

    const resolveUpdate = inProgress.filter(task => task.id ==id)
    setResolved(r => [...r , ...resolveUpdate])

    const ticketsUpdate = inTickets.filter(task => task.id !==id)
    setTickets(ticketsUpdate)

  }



  

  return (
   <div className='bg-[#f3f6f8] min-h-screen'>
    
   <Navbar></Navbar>

   <Banner 
   count = {inProgress.length}
    resolvedCount = {resolved.length}>
   </Banner>

   <Suspense fallback={<div className='flex justify-center items-center '><span class="loading loading-ring loading-xl"></span><span class="loading loading-ring loading-xl"></span><span class="loading loading-ring loading-xl"></span></div>}>
    <Tickets 
    playerPromise={playerPromise}
    onAdd = {handleInProgress}
    inProgress={inProgress} 
    handleComplete={handleComplete}
    resolved={resolved}
    inTickets={inTickets}
    setTickets={setTickets}
    ></Tickets>
   </Suspense>

   <Footer></Footer>
   
   </div>
    
  )
}

export default App

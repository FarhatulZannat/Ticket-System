import React from 'react'
import { use } from 'react'
import {TicketCard} from '../tickets/ticketCard'
import { useEffect } from 'react'
import { useState } from 'react'


export const Tickets = ({playerPromise , onAdd , inProgress, onComplete,handleComplete,resolved , inTickets, setTickets}) => {
    const ticketsData = use(playerPromise)
    // console.log(ticketsData)
    useEffect(() => {
      setTickets(ticketsData)
    } , [ticketsData])


   

    const [selectedTicket, setSelectedTicket] = useState(null)

  return (
    <div className='lg:mx-30 mx-6 lg:flex justify-between '>
      <div>
        <h1 className='font-semibold text-2xl text-[#34485A] mb-10'>Customer Tickets</h1>
      <div className='lg:grid grid-cols-2  gap-x-8'>
          {
        inTickets.map(ticket => 
        <TicketCard 
          ticket={ticket}
          onAdd = {() => {
            onAdd(ticket)
            setSelectedTicket(ticket)
          }}
          key={ticket.id}
          
          >
          </TicketCard>)
      } 
      </div>
      </div>
      <div>
        <h1 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h1>
       
        {inProgress.length === 0 ? (
         <p className='text-[#627382]  text-xl'>Select a ticket to add to Task Status</p>
        
         ) : inProgress.map(ticket => (
          <div key={ticket.id} className='bg-white p-4 rounded-md mb-6 shadow-sm space-y-4 '><h1 className='text-black font-semibold text-xl'>
            {selectedTicket.title}</h1>
            
          <button onClick={()=>handleComplete(ticket.id)} className='bg-green-500 text-white px-3 py-1 rounded-md w-full'>Complete</button>
          </div>
        ))}

        <h1 className='font-semibold text-2xl text-[#34485A] mb-4 mt-8'>Resolved Task</h1>
        { resolved.length === 0 ? (
         <p className='text-[#627382]  text-xl'>No resolved tasks yet.</p>
        
         ) : resolved.map(ticket => (
          <div key={ticket.id} className='bg-[#E0E7FF] p-4 rounded-md mb-6 shadow-sm space-y-4 '><h1 className='text-black font-semibold text-xl'>{ticket.title}</h1>
          
          </div>
        ))}
      </div>
    </div>


  )
}


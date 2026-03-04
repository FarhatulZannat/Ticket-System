import React from 'react'
import { use } from 'react'
import {TicketCard} from '../tickets/ticketCard'


export const Tickets = ({playerPromise , onAdd , inProgress, onComplete,handleComplete }) => {
    const ticketsData = use(playerPromise)
    // console.log(ticketsData)

  return (
    <div className='mx-30 flex justify-between'>
      <div>
        <h1 className='font-semibold text-2xl text-[#34485A] mb-10'>Customer Tickets</h1>
      <div className='grid grid-cols-2  gap-x-8'>
          {
        ticketsData.map(ticket => <TicketCard 
          ticket={ticket}
          onAdd={onAdd}
          key={ticket.id}
          >
          </TicketCard>)
      } 
      </div>
      </div>
      <div>
        <h1 className='font-semibold text-2xl text-[#34485A] mb-10'>Task Status</h1>
        {inProgress.map(ticket => (
          <div key={ticket.id} className='bg-white p-4 rounded-md mb-6 shadow-sm space-y-4 '><h1 className='text-black font-semibold text-xl'>{ticket.title}</h1>
          <button onClick={()=>handleComplete(ticket.id)} className='bg-green-500 text-white px-3 py-1 rounded-md w-full'>Complete</button>
          </div>
        ))}
        <h1 className='font-semibold text-2xl text-[#34485A] mb-10'>Resolved Task</h1>
      </div>
    </div>


  )
}


import React from 'react'
import { use } from 'react'
import {TicketCard} from '../tickets/ticketCard'


export const Tickets = ({playerPromise}) => {
    const ticketsData = use(playerPromise)
    // console.log(ticketsData)

  return (
    <div className='mx-30 flex justify-between'>
      <div>
        <h1 className='font-semibold text-2xl text-[#34485A] mb-10'>Customer Tickets</h1>
      <div className='grid grid-cols-2  gap-x-8'>
          {
        ticketsData.map(ticket => <TicketCard ticket={ticket}></TicketCard>)
      } 
      </div>
      </div>
      <div>
        <h1 className='font-semibold text-2xl text-[#34485A] mb-10'>Task Status</h1>
        <h1 className='font-semibold text-2xl text-[#34485A] mb-10'>Resolved Task</h1>
      </div>
    </div>


  )
}


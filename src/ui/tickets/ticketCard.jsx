import React from 'react'
import dotImg from '../../assets/Ellipse 22.png'
import date from '../../assets/ri_calendar-line.png'


export const TicketCard = ({ticket , onAdd}) => {
  return (
      <div onClick={() =>onAdd(ticket)}>
      <div class="card bg-white   shadow-sm mb-8">

  <div class="card-body text-black space-y-4  ">
    <div className='flex justify-between '>
        <h2 class="card-title text-2xl ">
      {ticket.title}
    </h2>
    <div class="badge bg-[#70e985] border-none rounded-full px-5 py-5 text-xl font-bold text-center flex justify-center text-[#0c4716]"><img className='h-5' src={dotImg} alt="" />Open</div>
    </div>
    <p className='text-[#627382] text-xl'>{ticket.description}</p>
  <div className='flex justify-between'>
      <div class="flex gap-3 justify-start font-semibold text-[15px]">
      <h4 className="text-[#627382]">#{ticket.id}</h4>
      <div className="text-[#F83044]">{ticket.priority}</div>
    </div>
    <div class="flex gap-4 justify-end font-semibold text-[15px]">
      <h4 className="text-[#627382]">{ticket.customer}</h4>
      <div className="text-[#627382] flex gap-1"><img src={date} alt="" />{ticket.createdAt}</div>
    </div>
  </div>
  </div>
</div>
    </div>
  )
}



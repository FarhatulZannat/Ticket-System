import React from 'react'
import x from '../assets/x.png'
import Lin from '../assets/x.png'
import fb from '../assets/x.png'
import mail from '../assets/x.png'



export const Footer = () => {
  return (
    <div className='bg-black lg:p-30 p-6 '>
        <div className='lg:flex gap-50 border-b-2 border-gray-400 '> 
            <div className='lg:w-100 lg:text-left text-center mb-6 '>
                <h1 className='text-2xl font-bold text-white mb-6'>CS--Ticket System</h1>
                <p className='text-[#A1A1AA]'>Ticket System is designed to help manage and track customer support requests efficiently. It allows quick creation, updating, and resolution of tickets.
  Users can monitor progress and stay updated in real-time.The intuitive interface ensures a seamless experience for both support staff and customers.Built with modern web technologies, this system is responsive, fast, and reliable.</p>
            </div>
            <div className='lg:flex justify-between gap-15 space-y-10 lg:text-left text-center '>
                <div className='space-y-6 text-[#A1A1AA]'>
                    <h1 className='text-2xl font-bold text-white '>Company</h1>
                    <p>About us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                </div>
                <div  className='space-y-6 text-[#A1A1AA]'>
                    <h1 className='text-2xl font-bold text-white'>Services</h1>
                    <p>Product $ Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                </div>                
                <div  className='space-y-6 text-[#A1A1AA]'>
                    <h1 className='text-2xl font-bold text-white'>Information</h1>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                </div>                
                <div  className='space-y-6 text-[#A1A1AA] mb-6'>
                    <h1 className='text-2xl font-bold text-white'>Social Links</h1>
                    <span className='flex items-center gap-2 justify-center lg:justify-start'><img src={x} alt="" />@CS--Ticket System</span>
                    <span className='flex items-center gap-2 justify-center lg:justify-start'><img src={Lin} alt="" />@CS--Ticket System</span>
                    <span className='flex items-center gap-2 justify-center lg:justify-start'><img src={fb} alt="" />@CS--Ticket System</span>
                    <span className='flex items-center gap-2 justify-center lg:justify-start'><img src={mail} alt="" />@CS--Ticket System</span>
                </div>                

            </div>
        </div>
        <h1 className='text-center mt-6'>© 2025 CS — Ticket System. All rights reserved.</h1>
      
    </div>
  )
}


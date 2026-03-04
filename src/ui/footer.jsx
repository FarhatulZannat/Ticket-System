import React from 'react'
import x from '../assets/x.png'
import Lin from '../assets/x.png'
import fb from '../assets/x.png'
import mail from '../assets/x.png'



export const Footer = () => {
  return (
    <div className='bg-black p-30'>
        <div className='flex gap-50 '> 
            <div className='w-100'>
                <h1 className='text-3xl font-bold text-white mb-6'>CS--Ticket System</h1>
                <p className='text-[#A1A1AA]'>Ticket System is designed to help manage and track customer support requests efficiently. It allows quick creation, updating, and resolution of tickets.
  Users can monitor progress and stay updated in real-time.The intuitive interface ensures a seamless experience for both support staff and customers.Built with modern web technologies, this system is responsive, fast, and reliable.</p>
            </div>
            <div className='flex justify-between gap-15 '>
                <div className='space-y-6 text-[#A1A1AA]'>
                    <h1 className='text-3xl font-bold text-white '>Company</h1>
                    <p>About us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                </div>
                <div  className='space-y-6 text-[#A1A1AA]'>
                    <h1 className='text-3xl font-bold text-white'>Services</h1>
                    <p>Product $ Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                </div>                
                <div  className='space-y-6 text-[#A1A1AA]'>
                    <h1 className='text-3xl font-bold text-white'>Information</h1>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                </div>                
                <div  className='space-y-6 text-[#A1A1AA]'>
                    <h1 className='text-3xl font-bold text-white'>Social Links</h1>
                    <span className='flex items-center gap-2'><img src={x} alt="" />@CS--Ticket System</span>
                    <span className='flex items-center gap-2'><img src={Lin} alt="" />@CS--Ticket System</span>
                    <span className='flex items-center gap-2'><img src={fb} alt="" />@CS--Ticket System</span>
                    <span className='flex items-center gap-2'><img src={mail} alt="" />@CS--Ticket System</span>
                </div>                

            </div>
        </div>
      
    </div>
  )
}


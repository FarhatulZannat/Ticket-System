import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <div className='bg-white md:px-30 lg:px-30 px-6 shadow-sm'>
    <div class="navbar   ">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden bg-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="md:text-black font-bold menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                   <ul class="p-2">
             <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
      </ul>
    </div>
    <a class="btn btn-ghost text-2xl text-black font-bold">CS--Ticket System</a>
  </div>
  <div className='navbar-end flex lg:hidden' >
    <a className="btn  bg-gradient-to-r from-[#422AD5] to-[#705ee7] border-none">+ New Ticket</a>
  </div>
  <div class="navbar-end hidden lg:flex text-black ">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a>FAQ</a>
      </li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
    <div >
    <a className="btn  bg-gradient-to-r from-[#422AD5] to-[#705ee7] border-none">+ New Ticket</a>
  </div>
    
  </div>
</div>
   </div>
    </div>
  )
}


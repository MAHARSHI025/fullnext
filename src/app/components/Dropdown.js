"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';


function Dropdown() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const onlogout = async()=>{
    const response = await axios.get("/api/users/logout")
    console.log(response);
    console.log("hello");

  }

  return (
    <div>
      <div className=" flex items-center justify-center bg-gray-100">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center downer font-semibold text-xl   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            User
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="" role="none">
                <Link href="/" className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Profile</Link>
                <hr className=' w-full'/>
                <Link href="/signup" className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Signup</Link>
                <Link href="/login" className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Login</Link>
                <h1 onClick={onlogout} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">logout</h1>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Dropdown

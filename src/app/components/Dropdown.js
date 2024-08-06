"use client"
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';



function Dropdown() {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  const onlogout = async () => {
    const response = await axios.get("/api/users/logout")
    // console.log(response);
    if (response.data.message === "Logout successfully") {
      toast.success(response.data.message)
    } 
    else {
      toast(response.data.message)
      setTimeout(() => {
        router.push("/login")
      }, 2000);

    }
    setIsOpen(!isOpen);
  }

  return (
    <>

      <Toaster></Toaster>
      <div >
        <div className=" flex items-center justify-center bg-gray-100">
          <div className="relative flex ">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center downer font-semibold text-xl   focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >

              <span class="material-symbols-outlined">
                person
              </span>
            </button>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 blicker" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="closer" role="none">
                  <Link onClick={toggleDropdown} href="/profile" className=" flex items-center px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem"> <span class="mx-1 material-symbols-outlined">person</span>Profile</Link>
                  <hr className=' w-full' />
                  <Link onClick={toggleDropdown} href="/signup" className=" flex items-center px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem"><span class="mx-1 material-symbols-outlined">person_add</span>Signup</Link>
                  <Link onClick={toggleDropdown} href="/login" className=" flex items-center px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem"><span class="mx-1 material-symbols-outlined">login</span> Login</Link>
                  <Link onClick={onlogout} href="/" className=" flex items-center px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem"><span class="mx-1 material-symbols-outlined">logout</span>Logout</Link>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default Dropdown

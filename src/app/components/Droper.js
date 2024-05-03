"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';


function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setvalue] = useState("Think");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown1 = () => {
        setIsOpen(!isOpen);
        setvalue("Love")
    };
    const toggleDropdown2 = () => {
        setIsOpen(!isOpen);
        setvalue("Think")

    };
    const toggleDropdown3 = () => {
        setIsOpen(!isOpen);
        setvalue("Sad")

    };
    const toggleDropdown4 = () => {
        setIsOpen(!isOpen);
        setvalue("Angry")

    };
    const toggleDropdown5 = () => {
        setIsOpen(!isOpen);
        setvalue("Lonely")

    };
    const toggleDropdown6 = () => {
        setIsOpen(!isOpen);
        setvalue("Inspired")

    };
    const toggleDropdown7 = () => {
        setIsOpen(!isOpen);
        setvalue("Bored")

    };
    const toggleDropdown8 = () => {
        setIsOpen(!isOpen);
        setvalue("Relax")
    };


    return (
        <div>
            <div className=" flex items-center justify-center gap-4 ">
                
                <div className=' flex justify-center items-center'>
                    <h1 className=' font-bold text-lg'>Type - </h1>
                    <h1>{value}</h1>
                </div>
                <div className="relative ">
                    <h1
                        onClick={toggleDropdown}
                        className=" cursor-pointer inline justify-center downer2 font-medium text-sm  px-4 py-1   focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-100"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Select
                    </h1>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 mooder" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className="closer" role="none">
                                <h1 onClick={toggleDropdown1} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Love</h1>
                                <h1 onClick={toggleDropdown2} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Think</h1>
                                <h1 onClick={toggleDropdown3} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Sad</h1>
                                <h1 onClick={toggleDropdown4} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Angry</h1>
                                <h1 onClick={toggleDropdown5} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Lonely</h1>
                                <h1 onClick={toggleDropdown6} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Inspired</h1>
                                <h1 onClick={toggleDropdown7} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Bored</h1>
                                <h1 onClick={toggleDropdown8} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Relax</h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Dropdown

import React from 'react'
import Link from "next/link";

function Navbar() {



    return (
        <>
            <nav className=" flex justify-center gap-6 font-semibold text-xl py-1 navbar">
                <h1><Link href={"/"}>Home</Link></h1>
                <h1><Link href={"/thoughts"}>Thoughts</Link></h1>
                <h1><Link href={"/signup"}>Signup</Link></h1>
                <h1><Link href={"/login"}>Login</Link></h1>
            </nav>
            <div className="drop" id='drop'>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
            </div>
        </>
    )
}

export default Navbar

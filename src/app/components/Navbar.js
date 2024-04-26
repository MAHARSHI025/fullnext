import React from 'react'
import Link from "next/link";

function Navbar() {
    return (
        <>
            <nav className=" flex justify-center gap-6 font-semibold text-xl py-1">
                <h1><Link href={"/"}>Home</Link></h1>
                <h1><Link href={"/"}>Thoughts</Link></h1>
                <h1><Link href={"/signup"}>Signup</Link></h1>
                <h1><Link href={"/login"}>Login</Link></h1>
            </nav>
        </>
    )
}

export default Navbar

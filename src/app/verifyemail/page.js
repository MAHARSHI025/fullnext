"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Verifyemail() {

    const [token, settoken] = useState("")

    const verifyemail = async () => {
        
        const toastId = toast.loading('Loading...');
        try {
            const verify = await axios.post("/api/users/verifyemail", { token })
            toast.success("Verify successfully", { id: toastId })

        } catch (error) {
            console.log("error while verify email");
            toast.error(error.message)
        }
    }

    useEffect(() => {
        const urltoken = window.location.search.split("=")[1]
        settoken(urltoken || "")
    }, [])

    return (
        <div className=' flex justify-center items-center flex-col gap-2'>
            <Toaster/>
            <h1>Verify Email</h1>
            <button onClick={verifyemail} className=' border-2 border-gray-950 px-6 py-'>hello </button>
        </div>
    )
}

export default Verifyemail

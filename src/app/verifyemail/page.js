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
            toast.success("Your email is Verified", { id: toastId })


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
        <div className=' formal'>
            <Toaster/>
            <h1 className=' font-bold text-4xl my-4'>Press Button to verify email</h1>
            <button type="submit" onClick={verifyemail} id='signup' className=' my-2'>Verify email</button>
        </div>
    )
}

export default Verifyemail

"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function Verifyemail() {

    const [token, settoken] = useState("")
    const router = useRouter()



    const verifyemail = async () => {

        const toastId = toast.loading('Loading...');
        try {
            const verify = await axios.post("/api/users/verifyemail", { token })
            toast.success("Your email is Verified", { id: toastId })
            router.push("/login")
            
        } catch (error) {
            console.log("error while verify email");
            toast.remove(toastId)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        const urltoken = window.location.search.split("=")[1]
        settoken(urltoken || "")
    }, [])

    return (
        <div className=' formal flex-wrap'>
            <h1 className=' font-bold text-4xl my-4 text-center'>Press Button to verify email</h1>
            <button type="submit" onClick={verifyemail} id='signup' className=' my-2'>Verify email</button>
        </div>
    )
}

export default Verifyemail

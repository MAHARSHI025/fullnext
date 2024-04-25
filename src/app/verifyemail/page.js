"use client"
import React, { useState } from 'react'
import axios from 'axios'

function Verifyemail() {

    const [token, settoken] = useState("")
    const [verified, setverified] = useState(false)

    const verifyemail = async () => {

        try {
            const verify = await axios.post("/api/users/verifyemail", { token })
            setverified(true)
        } catch (error) {
            console.log("error while verify email");
        }
    }

    return (
        <div>
            <h1>Verify Email</h1>
        </div>
    )
}

export default Verifyemail

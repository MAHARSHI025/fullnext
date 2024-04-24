"use client"
import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function Signup() {

  const router = useRouter()

  const [user, setuser] = useState({
    email: "",
    username: "",
    password: ""
  })

  const onsignup = async () => {

    try {

      const toastId = toast.loading('Loading...');
      const response = await axios.post("/api/users/signup", user)
      
      if (response.data.error === undefined) {

        toast.success("Register successfully" ,{id:toastId})
        setTimeout(() => {
          router.push("/login")
        }, 2000);

      } else {
        console.log(response.data);
        toast(response.data.error, { duration: 2000, id:toastId })
      }

    } catch (error) {
      console.log("Signup failed");
      toast.error(error.message)
    }
  }


  return (
    <>
      <Toaster />
      <div>
        <div className="formal" >
          <form className="formal" >
            <h1>Signup</h1>
            <input type="text"
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
              placeholder='username'
              required
            />
            <input type="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
              placeholder='email'
              required
            />
            <input type="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              placeholder='password'
              required
            />
          </form>
          <button type="submit" onClick={onsignup} id='signup'>Signup</button>
        </div>
      </div>
    </>
  )
}

export default Signup

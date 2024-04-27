"use client"

import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function Login() {

  const router = useRouter()

  const [user, setuser] = useState({
    email: "",
    password: "",
  })

  const onlogin = async () => {

    try {
      const toastId = toast.loading('Loading...');
      const response = await axios.post("/api/users/login", user)

      if (response.data.error === undefined) {

        toast.success("login successfully", { id: toastId })
        setTimeout(() => {
          router.push("/thoughts")
        }, 2000);

      } else {
        console.log(response.data);
        toast.error(response.data.error, { duration: 3000, id: toastId })
      }

    } catch (error) {
      console.log("Signup failed");
      toast.error(error.message)
    }
  }

  const onlogout = async()=>{
    const response = await axios.get("/api/users/logout")
    console.log(response);

  }
 

  return (
    <>
      <Toaster />
      <div className="formal" >
        <form className=" flex justify-center items-center flex-col gap-2" >
          <h1 className=' font-bold text-4xl my-4'>Login</h1>
          <input type="email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
            placeholder='Email'
            required
          />
          <input type="password"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            placeholder='Password'
            required
          />
        </form>
        <button type="submit" onClick={onlogin} id='signup' className=' my-2'>Login</button>
        <h1>or</h1>
        <button type="submit" onClick={onlogout}  className=' logoutbtn'>Logout</button>
      </div>
    </>
  )
}

export default Login

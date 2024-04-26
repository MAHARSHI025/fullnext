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
      } else {
        console.log(response.data);
        toast(response.data.error, { duration: 3000, id: toastId })
      }

    } catch (error) {
      console.log("Signup failed");
      toast.error(error.message)
    }
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
        <button type="submit" onClick={onlogin} id='signup' className=' my-2'>login</button>
      </div>
    </>
  )
}

export default Login

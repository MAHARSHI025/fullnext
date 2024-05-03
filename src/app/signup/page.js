"use client"
import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Droper from '../components/Droper';

function Signup() {

  const router = useRouter()

  const [user, setuser] = useState({
    email: "",
    username: "",
    password: "",
    thought: "",
    typer: "transparent"
  })

  const onsignup = async () => {

    try {

      const toastId = toast.loading('Loading...');
      const response = await axios.post("/api/users/signup", user)

      if (response.data.error === undefined) {

        toast.success("Register successfully", { id: toastId })
        setTimeout(() => {
          router.push("/login")
        }, 2000);

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
      <div>
        <div className="formal" >
          <form className=" flex justify-center items-center flex-col gap-2" >
            <h1 className=' font-bold text-4xl my-4'>Signup</h1>
            <input type="text"
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
              placeholder='Username'
              required
            />
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
            <textarea
              rows="5"
              value={user.thought}
              onChange={(e) => setuser({ ...user, thought: e.target.value })}
              placeholder='Enter your thought'
            ></textarea>
            <div>
            <Droper></Droper>

            </div>

            <div className=' flex flex-row justify-center items-center gap-2 flex-wrap'>
              <h1>Get color as your mood</h1>
              <input
                type="color"
                name=""
                id="typer"
                value={"#99876e"}
                onChange={(e) => {
                  setuser({ ...user, typer: e.target.value });
                  document.getElementById('typer').value = e.target.value;
                }} className=' small'
              />
            </div>

          </form>
          <button type="submit" onClick={onsignup} id='signup' className=' my-2 from-neutral-50'>Signup</button>
          <h1>or</h1>
          <button type="submit" className=' logoutbtn'><Link href={"/login"}>login</Link></button>
        </div>
      </div>
    </>
  )
}

export default Signup

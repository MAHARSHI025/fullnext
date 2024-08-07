"use client"

import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Login() {

  const router = useRouter()

  const [icon, seticon] = useState(false);
  const [password, setpassword] = useState(false);
  const [user, setuser] = useState({
    email: "",
    password: "",
  })

  const onlogin = async () => {

    try {
      const toastId = toast.loading('Loading...');
      const response = await axios.post("/api/users/login", user)

      if (response.data.error === undefined) {

        toast.success("login successfully", { id: toastId }, {
          style: {
            fontSize: "1rem",
            fontWeight: "800",
            border: '2px solid green',
          }
        },)
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

  let visible = () => {
    seticon(!icon)
    setpassword(!password)
  }



  return (
    <>
      {/* <Toaster /> */}
      <div className="formal flex-col" >
        <form className=" flex justify-center items-center flex-col gap-2" >
          <div className='iconimage'>  
          <img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" alt="" />
          <h1 className=' font-bold text-4xl my-4 space'>Login</h1>
          </div>
          <div className=' flex justify-center items-center gap-1'>
            <span class="material-symbols-outlined m-0">
              mail
            </span>
            <input type="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
              placeholder='Email'
              required
            />
          </div>

          <div className=' flex justify-center items-center gap-1 ml-7'>
            <span class="material-symbols-outlined m-0">
              key
            </span>
            <input type={password ? "text" : "password"}
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              placeholder='Password'
              required
            />
            <div className=' absolute align cursor-pointer flex items-center'>
              <span class="material-symbols-outlined m-0 select-none" onClick={visible}>
                {icon ? "visibility" : "visibility_off"}
              </span>
            </div>
          </div>
        </form>
          <button type="submit" onClick={onlogin} id='signup' className=' text-xl my-2'>Login</button>
          <h1>or</h1>
          <button type="submit" className=' logoutbtn'><Link href={"/signup"}>Signup</Link></button>
      </div>
    </>
  )
}

export default Login

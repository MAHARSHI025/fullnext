"use client"
import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Signup() {

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [value, setvalue] = useState("Think");
  const [icon, seticon] = useState(false);
  const [password, setpassword] = useState(false);

  const [user, setuser] = useState({
    email: "",
    username: "",
    password: "",
    thought: [],
    color: "transparent",
    typer: "think",
  })


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpen(!isOpen);
    setvalue("Love")
    setuser({ ...user, typer: "Love" });
  };

  const toggleDropdown2 = () => {
    setIsOpen(!isOpen);
    setvalue("Think")
    setuser({ ...user, typer: "Think" });
  };
  const toggleDropdown3 = () => {
    setIsOpen(!isOpen);
    setvalue("Sad")
    setuser({ ...user, typer: "Sad" });

  };
  const toggleDropdown4 = () => {
    setIsOpen(!isOpen);
    setvalue("Angry")
    setuser({ ...user, typer: "Angry" });

  };
  const toggleDropdown5 = () => {
    setIsOpen(!isOpen);
    setvalue("Lonely")
    setuser({ ...user, typer: "Lonely" });

  };
  const toggleDropdown6 = () => {
    setIsOpen(!isOpen);
    setvalue("Inspired")
    setuser({ ...user, typer: "Inspired" });

  };
  const toggleDropdown7 = () => {
    setIsOpen(!isOpen);
    setvalue("Bored")
    setuser({ ...user, typer: "Bored" });

  };
  const toggleDropdown8 = () => {
    setIsOpen(!isOpen);
    setvalue("Relax")
    setuser({ ...user, typer: "Relax" });

  };

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

  let visible = () => {
    seticon(!icon)
    setpassword(!password)
  }





  return (
    <>
      {/* <Toaster /> */}
      <div className=' mb-6'>
        <div className="formal flex-col" >
          <form className=" flex justify-center items-center flex-col gap-2" >
            <span className="material-symbols-outlined topicon">
              person_add
            </span>
            <h1 className=' font-bold text-4xl my-4 space'>Signup</h1>
            <div className=' flex justify-center items-center gap-1'>
              <span className="material-symbols-outlined m-0">
                person
              </span>
              <input type="text"
                value={user.username}
                onChange={(e) => setuser({ ...user, username: e.target.value })}
                placeholder='Username'
                required
              />
            </div>

            <div className=' flex justify-center items-center gap-1'>
              <span className="material-symbols-outlined m-0">
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
              <span className="material-symbols-outlined m-0">
                key
              </span>
              <input type={password ? "text" : "password"}
                value={user.password}
                onChange={(e) => setuser({ ...user, password: e.target.value })}
                placeholder='Password'
                required
              />
              <div className=' absolute align cursor-pointer eye-icon  flex items-center'>
                <span className="material-symbols-outlined m-0 select-none" onClick={visible}>
                  {icon ? "visibility" : "visibility_off"}
                </span>
              </div>
            </div>

            <div className=' flex justify-center items-start  gap-1'>
              <span className="material-symbols-outlined m-0 mt-1">
                psychology
              </span>
              <textarea
                rows="5"
                value={user.thought}
                onChange={(e) => setuser({ ...user, thought: e.target.value })}
                placeholder='Enter your thought'
              ></textarea>
            </div>

            <div className=" flex items-center justify-center  ">
              <h1 className=' font-bold text-lg'>Type-</h1>
              <div className="relative ">
                <h1
                  className=" cursor-pointer flex items-center justify-center downer2 font-medium text-sm  px-3 py-1   focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={toggleDropdown}
                >
                  {value}
                  <span className="material-symbols-outlined m-0">
                    expand_more
                  </span>
                </h1>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 mooder" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="closer" role="none">
                      <h1 onClick={toggleDropdown1} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Love</h1>
                      <h1 onClick={toggleDropdown2} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Think</h1>
                      <h1 onClick={toggleDropdown3} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Sad</h1>
                      <h1 onClick={toggleDropdown4} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Angry</h1>
                      <h1 onClick={toggleDropdown5} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Lonely</h1>
                      <h1 onClick={toggleDropdown6} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Inspired</h1>
                      <h1 onClick={toggleDropdown7} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Bored</h1>
                      <h1 onClick={toggleDropdown8} className="block px-4 py-2 text-sm  hover:bg-neutral-300 " role="menuitem">Relax</h1>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className=' flex flex-row justify-center items-center gap-2 flex-wrap'>
              <h1>Get color as your mood</h1>
              <input
                type="color"
                name=""
                id="typer"
                className=' small'
                value={user.color}
                onChange={(e) => {
                  setuser({ ...user, color: e.target.value });
                }}
              />
            </div>

          </form>
          <button type="submit" onClick={onsignup} id='signup' className=' my-2 from-neutral-50 text-xl'>Signup</button>
          <h1>or</h1>
          <button type="submit" className=' logoutbtn'><Link href={"/login"}>login</Link></button>
        </div >
      </div >
    </>
  )
}

export default Signup

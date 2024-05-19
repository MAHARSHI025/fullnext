import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Update() {

  const [user, setuser] = useState({
    thought: "",
    color: "transparent",
    typer: "think",
  })
  const [isOpen, setIsOpen] = useState(false);
  const [value, setvalue] = useState("Think");

  const updater = async () => {

    try {
      const toastId = toast.loading('Please wait..');
      const response = await axios.post("/api/users/updateuser", user)
      console.log(response);

      if (response.data.Status === 200) {
        toast.dismiss(toastId);
        toast.success("Your thought is updated")
      }
      if (response.data.Status === 400) {
        toast.dismiss(toastId);
        toast.error(response.data.error)
      }

    } catch (error) {
      console.log(error);
    }
  }


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

  return (
    <>
      {/* <Toaster></Toaster> */}
      <div className="formal flex justify-center items-center flex-col" >
        <form className=" flex justify-center items-center flex-col gap-2" >
          <h1 className='space font-bold text-4xl my-4'>Want to update?</h1>
          <div className=' flex gap-2'>
            <span className="material-symbols-outlined m-0 mt-1">
              psychology
            </span>
            <textarea type="text"
              value={user.password}
              onChange={(e) => setuser({ ...user, thought: e.target.value })}
              placeholder='Enter your thought'
              required
            />
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

          <button type="submit" onClick={updater} id='signup' className=' my-2'>Update thought</button>
        </form>
      </div>




    </>
  )
}

export default Update

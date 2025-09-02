
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


function Search() {

    const [user, setuser] = useState({
        username: "",
    })
    const [userdata, setuserdata] = useState({
        username: "Username",
        email: "User_email@gmail.com",
        thought: "User thought that they upload",
        color: "white"
    })

    const searcher = async () => {

        let responce = await axios.post("/api/users/profile", user)
        let main = responce.data.user
        console.log(responce);

        if (responce.data.error === "user not found") {
            toast.error("User not found.",
            )

        }
        else {
            toast.success("User found successfully")
            setuserdata(main)
        }
    }


    return (
        <>
            {/* <Toaster></Toaster> */}
            <div className=' flex flex-col justify-center items-center '>
                <h1 className=' font-bold text-4xl my-4 space'>Search User</h1>
                <div className=' formal flex-row flex extro'>
                    <input type="text"
                        className=' bg-transparent text-white'
                        value={user.username}
                        onChange={(e) => setuser({ ...user, username: e.target.value })}
                        placeholder='Username'
                        required
                    />
                    <button onClick={searcher} className=' flex justify-center items-center'> <span className="material-symbols-outlined">search</span></button>
                </div>

                <div className=" flex gap-4 justify-center items-center p-4 flex-wrap max-w-80">
                    <div className="temp flex flex-col p-4 rounded-lg gap-4" style={{ border: `2px solid ${userdata?.color}` }} id='carder' >
                        <h1 className='texter2 top-2 text-right text-orange-700'>{userdata?.typer}</h1>

                        <div className='upper'>
                            <h1>{userdata?.username}</h1>
                            <h2>{userdata?.email}</h2>
                        </div>
                        <div>
                            <h2>Thought</h2>
                            <h1 className='texter space'>{userdata?.thought}</h1>
                        </div>
                    </div>
                </div>
            </div>

   


        </>
    )
}

export default Search

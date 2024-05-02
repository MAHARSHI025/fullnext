
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
    })

    const searcher = async () => {

        let responce = await axios.post("/api/users/profile", user)
        let main = responce.data.user
        // console.log(responce);
        setuserdata(main)

        if (responce.data.error === "user not found") {
            toast.error("User not found.\n\nPlease enter a valid username.",
            )
            setuserdata({
                username: "Username",
                email: "User_email@gmail.com",
                thought: "User thought that they upload",
            })
        }
        else {
            toast.success("User found successfully")
        }
    }


    return (
        <>
            <Toaster></Toaster>
            <div className=' flex flex-col justify-center items-center '>
                <div className=' formal flex-row'>
                    <h1 className=' font-bold text-4xl my-4'>Search User</h1>
                    <input type="text"
                        value={user.username}
                        onChange={(e) => setuser({ ...user, username: e.target.value })}
                        placeholder='Username'
                        required
                    />
                    <button onClick={searcher}>search</button>
                </div>

                <div className="card flex gap-4 justify-center p-4 flex-wrap max-w-80">
                    <div className="temp flex flex-col p-4 rounded-lg gap-4" id='carder' >
                        <div className='upper'>
                            <h1>{userdata?.username}</h1>
                            <h2>{userdata?.email}</h2>
                        </div>
                        <div>
                            <h2>Thought</h2>
                            <h1 className='texter'>{userdata?.thought}</h1>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Search

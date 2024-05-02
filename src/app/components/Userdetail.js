import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userdetail() {


    const [userdata, setuserdata] = useState({
        username: "Username",
        email: "User_email@gmail.com",
        thought: "User thought that they upload",
    })

    useEffect(() => {

        let detailer = async () => {
            try {
                let detail = await axios.post("/api/users/user",)
                let main = detail.data.user
                // console.log(detail);

                setuserdata({
                    username: main.username,
                    email: main.email,
                    thought: main.thought,
                })

            } catch (error) {
                console.log(error);
            }

        }
        detailer()

    }, [])


    return (
        <>

            <div className=' flex flex-col justify-center items-center '>
                <div className=' formal flex-row'>
                    <h1 className=' font-bold text-4xl my-4'>My profile</h1>
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

export default Userdetail

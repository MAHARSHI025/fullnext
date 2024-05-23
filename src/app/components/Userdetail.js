import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

function Userdetail() {

    let router = useRouter()

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
                console.log(detail);

                if (detail.data.error === "user not found" || detail.data.error === "cookie not found") {
                    toast.error("Please login first")

                    setTimeout(() => {
                        router.push("/login")
                    }, 4000);
                }
                setuserdata({
                    username: main.username,
                    email: main.email,
                    thought: main.thought,
                    color: main.color,
                    typer: main.typer,
                    likecount: main.likecount
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
                    <h1 className=' font-bold text-4xl my-4 space  text-nowrap'>My profile</h1>
                </div>

                <div className=" flex gap-4 justify-center items-center p-4 flex-wrap max-w-80">
                    <div className="temp flex flex-col p-4 rounded-lg gap-4" style={{ backgroundImage: `linear-gradient(10deg, ${userdata?.color} , #e4daaf, #e4daaf, black)` }} id='carder' >
                        <h1 className='texter1 top-2 text-right text-orange-700'>{userdata?.typer}</h1>
                        <h1 className='texter3 top- text-right text-orange-700'>{userdata?.likecount} likes</h1>

                        <div className='upper'>
                            <h1 className=' flex items-center m-0'>
                                <span class="material-symbols-outlined m-0">
                                    person
                                </span>
                                {userdata?.username}
                            </h1>
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

export default Userdetail

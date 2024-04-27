"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


function Thoughts() {

  const router = useRouter()

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getall = async () => {
      const thoughts = await axios.post("/api/users/thoughts")
      setApiData(thoughts.data.user)
      if (thoughts.data.error === "Unauthorize user") {
        toast("Please Login First")
        setTimeout(() => {
          router.push("/login")
        }, 4000);
      }
    }
    getall()
  }, [])




  return (
    <div>
      <Toaster />
      <div className="options flex justify-end items-center gap-2 mx-4">
        <input type="text" className='searcher' placeholder='Search user'/>
        <button>=</button>
      </div>
      <div className="card flex gap-4 justify-center p-4 flex-wrap">
        {apiData?.map(item => (
          <div className="temp flex flex-col p-4 rounded-lg gap-4" id='carder' key={item._id}>
            <div className='upper'>
              <h1>{item.username}</h1>
              <h2>{item.email}</h2>
            </div>
            <div>
              <h2>Thought</h2>
              <h1 className='texter'>{item.thought}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Thoughts

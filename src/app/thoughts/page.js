"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Search from '../components/Search';


function Thoughts() {

  const router = useRouter()

  const [apiData, setApiData] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const getall = async () => {

      const thoughts = await axios.post("/api/users/thoughts")

      setApiData(thoughts.data.shuffledArray)
      if (thoughts.data.error === "Unauthorize user") {
        toast("Please Login First", {
          style: {
            fontSize: "1rem",
            fontWeight: "800",
            border: '2px solid #713200',
            color: '#713200',
          }
        },)
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
      <div className="btnclass flex justify-center" >
        <button className=' linebtn'  onClick={() => setShowDiv(!showDiv)}>Search user</button>
      </div>

      {showDiv && (
        <div className="midderplus" id="midderplus">
          <div className="midder">
            <Search></Search>
          </div>
        </div>
      )}
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

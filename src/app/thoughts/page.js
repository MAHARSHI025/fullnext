"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Search from '../components/Search';
import Link from 'next/link';


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
      <div className="btnclass flex justify-center gap-4" >
        <button className=' linebtn'  onClick={() => setShowDiv(!showDiv)}>Search user</button>
        <Link href={"/profile"}><button className=' linebtn'>Profile</button></Link>
        <Link href={"/profile"}><button className=' linebtn'>Update</button></Link>
        
      </div>

      {showDiv && (
        <div className="midderplus" id="midderplus">
          <div className="midder flex flex-col items-end p-2 border-2 border-black rounded-lg">
            <button onClick={() => setShowDiv(!showDiv)}>#</button>
            <Search ></Search>
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

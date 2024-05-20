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
  const [user, setuser] = useState({ userName: "" })
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const getall = async () => {

      const thoughts = await axios.post("/api/users/thoughts")
      console.log(thoughts);
      setApiData(thoughts.data.user)

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
        }, 1500);
      }
    }
    getall()
  }, [])

  let setter = (username) => {
    setuser({ userName: username });
    toast("Like", { duration: 600, icon:"❤️" })
  };

  useEffect(() => {

    let conter = async () => {

      // console.log(user);
      const response = await axios.post("/api/users/addlike", user)
      // console.log(response);

    }
    conter()
  }, [user]);



  return (
    <div>


      <div className="btnclass flex justify-center gap-4" >
        <button className=' linebtn' onClick={() => setShowDiv(!showDiv)}>Search user</button>
        <Link href={"/profile"}><button className=' linebtn'>Profile</button></Link>
        <Link href={"/profile"}><button className=' linebtn'>Update</button></Link>
      </div>

      {showDiv && (
        <div className="midderplus" id="midderplus">
          <div className="midder flex flex-col items-end p-2 border-2 border-black rounded-lg">
            <button onClick={() => setShowDiv(!showDiv)}>
              <span class="material-symbols-outlined">
                close
              </span>
            </button>
            <Search ></Search>
          </div>
        </div>
      )}

      <div className="card flex gap-4 justify-center p-4 flex-wrap">
        {apiData?.map(item => (
          <div data-aos="fade-up" data-aos-once="true" className="temp flex flex-col p-4 rounded-lg gap-4" style={{ backgroundImage: `linear-gradient(10deg, ${item?.color} , #e4daaf, #e4daaf, transparent)` }} id='carder' key={item._id}>

            <div className='upper '>
              <h1 className='texter2 top-2 text-right '>{item?.typer}</h1>

              <h1 className='texter2 top-2 text-right mt-2 cursor-pointer ' onClick={() => setter(item.username)}>
                <span class="material-symbols-outlined likebtn" style={{ color: "#bbb38f" }}>
                  favorite
                </span>
                <h1 className=' mini -mt-1 mr-0.5'>like</h1>
              </h1>

              <h1 className=' flex items-center '> <span className=" material-symbols-outlined m-0">person</span> {item?.username}</h1>
              <h2>{item?.email}</h2>
            </div>
            <div>
              <h2>Thought</h2>
              <h1 className='texter space'>{item?.thought}</h1>
            </div>
          </div>

        ))}
      </div>

    </div>
  )
}

export default Thoughts

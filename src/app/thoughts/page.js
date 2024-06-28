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
  const [taker, settaker] = useState("")
  const [showDiv, setShowDiv] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const [comment, setcomment] = useState({
    userName: "",
    comment: ""
  })

  useEffect(() => {
    const getall = async () => {

      const thoughts = await axios.post("/api/users/thoughts")
      console.log(thoughts);
      setApiData(thoughts.data.user)
      settaker(thoughts.data.taker)

      if (thoughts.data.error === "Unauthorize user") {
        toast("Please Login First", {
          style: {
            fontSize: "1rem",
            fontWeight: "800",
          }
        },)
        setTimeout(() => {
          router.push("/login")
        }, 800);
      }
    }
    getall()
  }, [])

  let setter = (username) => {
    setuser({ userName: username });
    toast("Like", { duration: 600, icon: "❤️" })
  };

  useEffect(() => {
    let conter = async () => {
      // console.log(user);
      const response = await axios.post("/api/users/addlike", user)
      console.log(response);


    }
    conter()
  }, [user]);

  let setter2 = async (username) => {
    // console.log(username);
    setcomment({ ...comment, userName: username })
    // console.log(comment);

  }
  let addcom = async (username) => {
    // console.log(username);
    setcomment({ ...comment, userName: username })

    const response = await axios.post("/api/users/addcomment", comment)
    console.log(response);

    toast("Comment added")
  }



  const toggleComments = (postId) => {
    setActivePost(activePost === postId ? null : postId);
  };



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
              <span className="material-symbols-outlined">
                close
              </span>
            </button>
            <Search ></Search>
          </div>
        </div>
      )}

      <div className="card flex gap-4 justify-center p-4 flex-wrap ">
        {apiData?.map(item => (
          <div data-aos="fade-up" data-aos-once="true" className="temp flex flex-col p-4 rounded-lg gap-4" style={{ backgroundImage: `linear-gradient(10deg, ${item?.color} , #e4daaf, #e4daaf, #929292)` }} id='carder' key={item._id}>

            <div className='upper '>
              <h1 className=' flex items-center '> <span className=" material-symbols-outlined m-0">person</span> {item?.username}</h1>
              <h2>{item?.email}</h2>
            </div>
            <div>
              <h1 className='texter2 '>{item?.typer}</h1>
              <h1 className='texter space'>{item?.thought}</h1>
            </div>

            <div className=' flex items-end border-b-2 border-black mini justify-between cursor-pointer ' onClick={() => setter2(item?.username)} >
              <h1 className='texter2 top-2 text-right mt-2 cursor-pointer flex items-end' onClick={() => setter(item.username)}>

                <div>
                  {item.likes?.userliked.indexOf(taker) === -1 ? (
                    // not liked
                    <span className=" material-symbols-outlined likebtn2" >
                      favorite
                    </span>
                  ) : (
                    // liked
                    <span className=" material-symbols-outlined likebtn">
                      favorite
                    </span>
                  )}
                </div>
                <h1 className=' mini -mt-1 mr-0.5'>{item?.likecount} likes</h1>
              </h1>

              <div className=' flex items-center gap-1' onClick={() => toggleComments(item?._id)}>
                <span className="material-symbols-outlined text-xs cursor-pointer miniplus" >
                  comment
                </span>
                <div>

                <h1 className='miniplus'> {item?.comments.length} Comments</h1>
                <h1 className='miniplus'></h1>
                </div>
              </div>
            </div>


            {activePost === item._id && (
              <div className='commenter text-black' >

                <div className='editor select-none flex flex-wrap'>
                  <input onChange={(e) => setcomment({ ...comment, comment: e.target.value })}
                    type="text" placeholder='Enter comment' className=' bg-transparent placeholder:text-black border border-black rounded-full  px-2' />
                  <button className=' bg-black text-white px-4 rounded-lg' onClick={() => addcom(item?.username)}>Submit</button>
                </div>

                {item.comments.map(com => (
                  <div className='editor text-wrap' key={com?._id}>
                    <h1 className='fle items-center '>
                      <span className="material-symbols-outlined miniplus">
                        person
                      </span>
                      {com?.usercomment}
                    </h1>
                    <h2>{com?.comment}</h2>
                  </div>
                ))}

              </div>
            )}
          </div>

        ))}
      </div>

    </div>
  )
}

export default Thoughts

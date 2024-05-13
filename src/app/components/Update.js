import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Update() {

  const [user, setuser] = useState({
    upthought: "",
  })

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

  return (
    <>
      <Toaster></Toaster>
      <div className="formal flex justify-center items-center flex-col" >
        <form className=" flex justify-center items-center flex-col gap-2" >
          <h1 className=' font-bold text-4xl my-4'>Want to update?</h1>
          <textarea type="text"
            value={user.password}
            onChange={(e) => setuser({ ...user, upthought: e.target.value })}
            placeholder='Enter your thought'
            required
          />
        </form>
        <button type="submit" onClick={updater} id='signup' className=' my-2'>Update thought</button>
      </div>

    </>
  )
}

export default Update

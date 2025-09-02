"use client"
import React from 'react'
import Userdetail from '../components/Userdetail'
import Update from '../components/Update'
import { useRouter } from 'next/navigation'

function Page() {

  const router = useRouter()

  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className=' border'>

        <Userdetail></Userdetail>
      </div>
        <button className='  bg-white border-b-2 p-2' onClick={()=>router.push('addthought')}>Add thought</button>
        {/* <Update></Update> */}
    </div>
  )
}

export default Page

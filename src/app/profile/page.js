"use client"
import React from 'react'
import Userdetail from '../components/Userdetail'
import Update from '../components/Update'

function Page() {
  return (
    <div className=' flex flex-col justify-center'>
        <Userdetail></Userdetail>
        <Update></Update>
    </div>
  )
}

export default Page

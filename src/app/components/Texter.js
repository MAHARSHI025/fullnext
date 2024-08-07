import React, { useEffect } from 'react';
import Link from 'next/link';


function Texter() {
   

    return (
        <div >
            <div  className=' mouse flex justify-evenly '> 
                <div>
                    <div className="main flex justify-center gap-6 flex-wrap p-8">
                        <img src="/images/43e1404b-291a-4058-998e-d747ee2ad340.jpeg" alt="" className=" h-40 rounded-full logo" />
                        <div className=" flex  flex-col justify-center gap-4">
                            <h1 className=" text-center text-5xl  space font-black">Thought is Forever</h1>
                            <div className="btn">
                                <Link href={"/thoughts"}><button type="submit" className=' my-2 border-2 px-4 py-1 rounded-lg mainbtn'>Explore</button></Link>
                                <Link href={"#about"}><button type="submit" className=' my-2 border-2 px-4 py-1 rounded-lg subbtn'>Read about</button></Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Texter;

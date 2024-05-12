"use client"
import Link from "next/link";
export default function Home() {


  return (
    <>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module" async></script>


      <div className="main flex justify-center gap-6 flex-wrap">
        <img src="/images/483013_5394652_949707_image-removebg-preview.png" alt="" className=" h-60" />
        <div className=" flex  flex-col justify-center gap-4">
          <h1 className=" text-center text-5xl font-bold">Thought is Forever</h1>
          <div className="btn">
            <Link href={"/thoughts"}><button type="submit" className=' my-2 border-2 px-4 py-1 rounded-lg mainbtn'>Explore</button></Link>
            <Link href={"#about"}><button type="submit" className=' my-2 border-2 px-4 py-1 rounded-lg subbtn'>Read about</button></Link>
          </div>
        </div>
      </div>
      
      <div>
        <div className="info bgier flex flex-wrap-reverse justify-center items-center mx-4">
          <div className="area flex flex-col justify-center gap-4">
            <h1 className=" text-3xl font-bold">Explore Worlds mind</h1>
            <h1 className=" font-extralight text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, magnam. sapiente accusamus. Exercitationem, maiores. Laborum, explicabo nam? Labore ipsum inventore laborum!</h1>
          </div>
          <div className="lootie ">
            <dotlottie-player src="https://lottie.host/8c0d9651-94d8-46ad-9f3e-d06ef100a470/ClMzMGK47k.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          </div>
        </div>
        <div className="info info2 flex  justify-center items-center mx-4">
          <div className="lootie lootie2">
            <dotlottie-player src="https://lottie.host/e7c954e1-040b-43a0-9616-bf80c6f56dfb/xh0yxjcu9o.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          </div>
          <div className="area flex  flex-col justify-center gap-4">
            <h1 className=" text-3xl font-bold">Explore Worlds mind</h1>
            <h1 className=" font-extralight text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, magnam. sapiente accusamus. Exercitationem, maiores. Laborum, explicabo nam? Labore ipsum inventore laborum!</h1>
          </div>
        </div>
      </div>

      <div className="about text-center" id="about">
        <h1 className=" text-center text-5xl font-bold">How It Works</h1>
        <div className="section flex gap-2 justify-center flex-col">
          <div className="column">
            <div data-aos="fade-in"   className=" flex flex-row justify-center items-center">
              <div className="first w-48 flex justify-end items-center"><h1 className='number text-center flex justify-center items-center '>1</h1></div>
              <hr />
              <div className="line"></div>
              <hr />
              <div className="text w-48 flex  flex-col justify-center items-center gap-2">
                <h1 className=" text-xl font-bold">Signup or login</h1>
                <h1 className=' text-center font-medium text-xs'>Create an account or login. to get start your thought journey</h1>
              </div>
            </div>
          </div>
          <div data-aos="fade-in"   className=" flex flex-row justify-center items-center">
            <div className="text w-48 flex  flex-col justify-center items-center gap-2">
              <h1 className=" text-xl font-bold">Put your Thought</h1>
              <h1 className=' text-center font-medium text-xs'>Add your thought around the world and put your mood color</h1>
            </div>
            <hr />
            <div className="line"></div>
            <hr />
            <div className="first w-48 flex justify-start items-center"><h1 className='number text-center flex justify-center items-center'>2</h1></div>
          </div>
          <div data-aos="fade-in"   className=" flex flex-row justify-center items-center">
            <div className="first w-48 flex justify-end items-center"><h1 className='number text-center flex justify-center items-center'>3</h1></div>
            <hr />
            <div className="line"></div>
            <hr />
            <div className="text w-48 flex  flex-col justify-center items-center gap-2">
              <h1 className=" text-xl font-bold">See World thinking</h1>
              <h1 className=' text-center font-medium text-xs'>Explore how world thinking and get updated with time</h1>
            </div>
          </div>
          <div data-aos="fade-in"   className=" flex flex-row justify-center items-center">
            <div className="text w-48 flex  flex-col justify-center items-center gap-2">
              <h1 className=" text-xl font-bold">Update thought</h1>
              <h1 className=' text-center font-medium text-xs'>You can update your thought anytime you want.</h1>
            </div>
            <hr />
            <div className="line"></div>
            <hr />
            <div className="first w-48 flex justify-start items-center"><h1 className='number text-center flex justify-center items-center'>4</h1></div>
          </div>
          <div data-aos="fade-in"   className=" flex flex-row justify-center items-center">
            <div className="first w-48 flex justify-end items-center"><h1 className='number text-center flex justify-center items-center'>5</h1></div>
            <hr />
            <div className="line"></div>
            <hr />
            <div className="text w-48 flex  flex-col justify-center items-center gap-2">
              <h1 className=" text-xl font-bold">Be exploring</h1>
              <h1 className=' text-center font-medium text-xs'>Visit the site and get new thought all the day.</h1>
            </div>
          </div>

        </div>
      </div>




    </>
  );
}

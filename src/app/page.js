import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="main flex justify-center gap-6 flex-wrap">
        <img src="/images/483013_5394652_949707_image.png" alt="" className=" h-60" />
        <div className=" flex  flex-col justify-center gap-4">
          <h1 className=" text-center text-5xl font-bold">Thought is Forever</h1>
          <div className="btn">
            <Link href={"/thoughts"}><button type="submit" className=' my-2 border-2 px-4 py-1 rounded-lg mainbtn'>Explore</button></Link>
            <Link href={"/"}><button type="submit" className=' my-2 border-2 px-4 py-1 rounded-lg subbtn'>Read about</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

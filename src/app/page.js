import Link from "next/link";
export default function Home() {
  return (
    <>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

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

      <div className="info flex flex-wrap-reverse items-center mx-4">
        <div className="area flex flex-col justify-center ">
          <h1 className=" text-3xl font-bold">Explore World's mind</h1>
          <h1 className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sapiente accusamus. Exercitationem, maiores. Laborum, explicabo nam? Labore ipsum inventore laborum!</h1>
        </div>
        <div className="lootie">
          <dotlottie-player src="https://lottie.host/d3624a05-f580-4d44-bbe1-962960ed32c1/qRUzYbADPN.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
        </div>
      </div>
      <div className="info info2 flex  items-center mx-4">
        <div className="lootie">
          <dotlottie-player src="https://lottie.host/8c3dc4fb-72f2-4252-90c0-bed6fc99b450/DNUtt9Xel9.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
        </div>
        <div className="area flex  flex-col justify-center">
          <h1 className=" text-3xl font-bold">Explore World's mind</h1>
          <h1 className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sapiente accusamus. Exercitationem, maiores. Laborum, explicabo nam? Labore ipsum inventore laborum!</h1>
        </div>
      </div>
    </>
  );
}

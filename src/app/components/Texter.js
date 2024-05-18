import React, { useEffect } from 'react';
import { useTrail, a } from '@react-spring/web';
import Link from 'next/link';

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 20, tension: 3000, friction: 800 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 50 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });


    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className="trailsText" style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    );
};

function Texter() {
    const [open, setOpen] = React.useState(true); // Example state to control the animation
    useEffect(() => {
        setOpen(50)
    }, [])

    return (
        <div >
            <div onMouseEnter={() => setOpen(50)} className=' mouse flex justify-evenly '> {/* Toggle open state on click */}
                <Trail open={open}>
                    <div >
                        <h1 className=" text-6xl font-bold space m-4 max-w-96">All</h1>
                    </div>
                    <div>
                        <h1 className=" text-6xl font-bold space m-4 max-w-96">About</h1>
                    </div>
                    <div >
                        <h1 className=" text-6xl font-bold space m-4 max-w-96">Mind set</h1>
                    </div>
                </Trail>



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

import React from 'react'
import heroImage from './assets/hero.jpg'
import { TbArrowRightBar } from 'react-icons/tb'
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from 'react-simple-typewriter';



const Home = () => {


    const [text] = useTypewriter({
        words: [
            "Hi, I am Rehan a Software Engineer",
        ],
        loop: false,
        delaySpeed: 2000,
    });

    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-slate-200 via-gray-200 to-zinc-100  text-stone-900' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row '>
                <div className="flex flex-col justify-center h-screen w-3/4 lg:w-1/2 mx-auto">
                    <h2 className='text-2xl font-semibold leading-6 pt-12 pb-11 text-violet-900'>{text}<Cursor cursorColor="black" /></h2>
                    <div className='static'>
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className=" absolute group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-green-600 cursor-pointer"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <TbArrowRightBar size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='h-3/4 ml-2 justify-center'>
                    <img
                        src={heroImage}
                        alt="my profile"
                        className="mx-auto w-2/3 md:w-full pt-[110px] lg:pt-0"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

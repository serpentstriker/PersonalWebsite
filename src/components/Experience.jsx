import React from 'react'
import work1 from './assets/Michelin_Corporate_Logo___on_blue.jpg'
import work2 from './assets/Agropur_V_RGB.png'
import work3 from './assets/DAL_LogoVert_RGB_Gold_Wingtip.png'
import { GiDuration } from "react-icons/gi";

const Experience = () => {
    return (
        <div name="work experience" className='w-full py-[10rem] px-4 bg-gradient-to-b from-stone-100 via-slate-200 to-zinc-300 text-stone-900'>
            <div>
                <p className="text-4xl font-bold text-center mt-12 mb-2 pb-10">Work experience</p>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-[100px] mx-auto mt-[-3rem] pb-4' src={work1} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Automation Engineer</h2>
                    <span><GiDuration size = {30} className='mx-auto mb-5' /> </span>
                    <p className='text-center text-1xl font-bold'>
                    September-December 2022
                    </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Automation Engineering</p>
                        <p className='py-2 border-b mx-8'>Project Management</p>
                        <p className='py-2 border-b mx-8'>Electrical Design</p>
                    </div>
                    <div className='flex justify-center'>
                    <a href="https://careers.michelin.ca/en/node/4736"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button></a>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-[100px] mx-auto mt-[-3rem] pb-1' src={work2} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Maintenance Engineer</h2>
                    <span><GiDuration size = {30} className='mx-auto mb-5' /> </span>
                    <p className='text-center text-1xl font-bold'>January - April 2022</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Software Development</p>
                        <p className='py-2 border-b mx-8'>Project Installation</p>
                        <p className='py-2 border-b mx-8'>Electrical Troubleshooting</p>
                    </div>
                    <div className='flex justify-center'>
                    <a href="https://www.agropur.com/en/careers/internships"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button></a>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img className='w-[100px] mx-auto mt-[-3rem]' src={work3} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Student Mentor</h2>
                    <span><GiDuration size = {30} className='mx-auto mb-5' /> </span>
                    <p className='text-center text-1xl font-bold'>September - Present 2022 </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Tutoring</p>
                        <p className='py-2 border-b mx-8'>Event Management</p>
                        <p className='py-2 border-b mx-8'>Acedemic Counseling</p>
                    </div>
                    <div className='flex justify-center'>
                    <a href="https://www.dal.ca/campus_life/get-involved/together-at-Dal/together-dal-mentors.html"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button></a>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Experience
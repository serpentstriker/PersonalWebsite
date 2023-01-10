import React from 'react';
import projectimage1 from './assets/graduate.ico'
import projectimage2 from './assets/medal.ico'
import projectimage3 from './assets/trophy.ico'
import projectimage4 from './assets/judo.ico'

const About = () => {
    return (
        <div name = "about" className='h-auto w-full bg-green-600 text-stone-900 p-10 sm:w-full'>
            <div>
                <p className="text-4xl font-bold text-center mt-12 mb-4 pb-20">My Achievements</p>
            </div>
            <div className="flex flex-wrap ">
                {/* Project 1 */}
                <div className="w-full md:w-1/4 sm:w-1/2 p-3">
                    <img src={projectimage1} alt="" className="w-32 h-32 object-cover animate-pulse duration-2s ease-in-out mx-auto" />
                    <h3 className="text-lg font-bold text-center mt-4">Sexton Scholar 2022</h3>
                </div> 

                {/* Project 2 */}
                <div className="w-full md:w-1/4 sm:w-1/2 p-3">
                    <img src={projectimage2} alt="" className="w-32 h-32 object-cover  animate-pulse duration-2s ease-in-out mx-auto" />
                    <h3 className="text-lg font-bold text-center mt-4">Dean's List 2020 | 2021 | 2022</h3>
                </div>

                {/* Project 3 */}
                <div className="w-full md:w-1/4 sm:w-1/2 p-3">
                    <img src={projectimage3} alt="" className="w-32 h-32 object-cover animate-pulse duration-2s ease-in-out mx-auto" />
                    <h3 className="text-lg font-bold text-center mt-4">Winner: Gregson Design Challenge 2022</h3>
                </div>
                {/* Project 4 */}
                <div className="w-full md:w-1/4 sm:w-1/2 p-3">
                    <img src={projectimage4} alt="" className="w-32 h-32 object-cover  animate-pulse duration-2s ease-in-out mx-auto" />
                    <h3 className="text-lg font-bold text-center mt-4">Brazilian Jiu-Jitsu: 1st Degree Blue Belt</h3>
                </div>
            </div>

        </div>

    )
}
export default About

import React from 'react';
import projectimage1 from './assets/carbon.png'
import projectimage2 from './assets/gpu-mining.png'
import projectimage3 from './assets/robot.jpg'
import projectimage4 from './assets/data.png'
import projectimage5 from './assets/machine-learning.png'
import projectimage6 from './assets/solar.png'


const Projects = () => {

    return (

        <div name="projects" className='bg-gradient-to-b from-zinc-100 via-neutral-100 to-stone-100  text-stone-900 p-10'>
            <div>
                <p className="text-4xl font-bold text-center mt-12 mb-2 pb-5">My Projects</p>
            </div>
            <div className="flex flex-wrap h-auto w-full ">
                {/* Project 1 */}
                <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/3 p-3 pb-11">
                    <img src={projectimage1} alt="Project 1 " className="p-1 bg-white w-[320px] lg:h-[305px] lg:w-[400px] lg:max-w-sm mx-auto " />
                    <h3 className="text-2xl font-bold text-center mt-4">XMX - EMULATOR <kbd className="kbd bg-red-500 text-lg">C</kbd> <kbd className="kbd bg-red-500 text-lg">AS</kbd> </h3>
                    <p className="text-center mt-2">16-bit Instruction Set Architecture (ISA) written entirely in C!  </p> <br />
                    <div className="flex justify-center mt-4">
                        <a href="https://github.com/serpentstriker/X-Makina-16bit-ISA-Emulator"><button className="mr-1 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-400">  View Code

                        </button></a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/3 p-3 pb-11">
                    <img src={projectimage2} alt="Project 2" className="p-1 bg-white  lg:max-w-sm mx-auto  lg:h-[305px]" />
                    <h3 className="text-2xl font-bold text-center mt-4">Bitcoin Mining - Simulation <kbd className="kbd bg-red-500 text-lg">C</kbd></h3>
                    <p className="text-center mt-2">Bitcoin Mining process written entirely in C! </p> <br />
                    <div className="flex justify-center mt-4">
                        <a href="https://github.com/serpentstriker/Bitcoin-Miner-Simulator"><button className="mr-1 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-400">View Code
                        </button></a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/3 p-3 pb-11">
                    <img src={projectimage3} alt="Project 3" className="p-1 bg-white w-[320px] lg:h-[305px] lg:w-[400px] lg:max-w-sm mx-auto " />
                    <h3 className="text-2xl font-bold text-center mt-4">Mine Sweeper Robot <kbd className="kbd bg-red-500 text-lg">C++</kbd> <kbd className="kbd bg-red-500 text-lg">Python</kbd> </h3>
                    <p className="text-center mt-2">Autonomous Mine sweeping robot. Winner of Gregson Design Challenge 2022 Dalhousie Univeristy. Navigation software written in C++ and Python</p>
                    <div className="flex justify-center mt-4">
                        <a href="https://github.com/serpentstriker/Autonomous-Robot-Nvigation-Software"><button className="mr-1 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-400">View Code
                        </button></a>

                        <a href="https://www.linkedin.com/posts/rehan--khalid_robotics-electricalengineering-autonomousvehicles-activity-6957154250208485376-pug-?utm_source=share&utm_medium=member_desktop"><button className="mr-1 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-400">Learn More!
                        </button></a>
                    </div>
                </div>
                {/* Project 4 */}
                <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/3 p-3 pb-11 ">
                    <img src={projectimage4} alt="Project 3" className="p-1 bg-white  lg:max-w-sm mx-auto lg:h-[300px]" />
                    <h3 className="text-2xl font-bold text-center mt-4">Personal Website <kbd className="kbd bg-red-500 text-lg">React</kbd> <kbd className="kbd bg-red-500 text-lg">tailwind</kbd></h3>
                    <p className="text-center mt-2">Personal Portfolio Website developed using React and Tailwind </p> <br />
                    <div className="flex justify-center mt-4">
                        <button className="mr-1 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-400">View Code</button>
                    </div>
                </div>
                {/* Project 5 */}
                <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/3 p-3 pb-11 ">
                    <img src={projectimage5} alt="Project 5" className="p-1 bg-white  lg:max-w-sm mx-auto lg:h-[302px]" />
                    <h3 className="text-2xl font-bold text-center mt-4">Machine Learning Models <kbd className="kbd bg-red-500 text-lg">Python</kbd></h3>
                    <p className="text-center mt-2">Multiple machine learning models developed and trained using Python </p><br />
                    <div className="flex justify-center mt-4">
                        <a href="https://drive.google.com/drive/folders/1s9IzRXo_a4JvoyV4UIPkgaR-fRvc7iDm"><button className="mr-1 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-400">View Code</button></a>
                    </div>
                </div>
                {/* Project 6 */}
                <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/3  p-3 pb-11 ">
                    <img src={projectimage6} alt="Project 3" className="p-1 bg-white w-[320px] lg:h-[303px] lg:w-[400px] lg:max-w-sm mx-auto " />
                    <h3 className="text-2xl font-bold text-center mt-4">A Digital Directory <kbd className="kbd bg-red-500 text-lg">C</kbd></h3>
                    <p className="text-center mt-2">A digital directory which stores all relevant product, customer, sales and supplier information for a Solar company in binary files.</p>
                    <div className="flex justify-center mt-4">
                       <a href="https://github.com/serpentstriker/Stellarton-Solar-System"><button className="mr-1 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-400">View Project</button></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects

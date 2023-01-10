import React from 'react'



const Skills = () => {

    
    return (
        <div name="skills" className='h-screen w-full bg-gradient-to-b from-zinc-100 via-neutral-100 to-stone-100  text-stone-900 p-10'>
            <div >
                <div>
                    <p className="text-4xl font-bold text-center mt-10 lg:mt-[200px] mb-2 pb-20 pr-5">My Skills</p>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row mx-0 ">


                    <div className="grid flex-grow h-40 card rounded-box place-items-center mx-auto">
                        <div><p className="text-2xl lg:text-3xl font-bold text-center sm:mx-auto mt-10 mb-2 pb-20 lg:pr-0">Frontend Development</p></div>
                        <div className="mockup-code text-sm bg-primary text-primary-content lg:text-lg justify-center">
                            <pre data-prefix=" </>"><code> JavaScript    <progress className="progress progress-success w-20 lg:w-56" value="40" max="100"></progress></code></pre>
                            <pre data-prefix=" </>"><code> React         <progress className="progress progress-success w-20 lg:w-56" value="30" max="100"></progress></code></pre>
                            <pre data-prefix=" </>"><code> Tailwind      <progress className="progress progress-success w-20 lg:w-56" value="50" max="100"></progress></code></pre>
                        </div>
                    </div>

                    <div className="divider divider-vertical lg:divider-horizontal opacity-0"></div>

                    <div className="grid flex-grow h-40 card rounded-box place-items-center pt-[200px] mx-auto lg:pr-0 lg:pt-10 md:pt-[200px]">
                        <div><p className="text-2xl lg:text-3xl font-bold text-center  sm:mx-auto mb-2 pb-20 justify-center">Backend Development</p></div>
                        <div className="mockup-code text-sm bg-secondary text-primary-content lg:text-lg">
                            <pre data-prefix=" </>"><code> Python      <progress className="progress progress-success w-20 lg:w-56" value="60" max="100"></progress></code></pre>
                            <pre data-prefix=" </>"><code> C/C++       <progress className="progress progress-success w-20 lg:w-56" value="70" max="100"></progress></code></pre>
                            <pre data-prefix=" </>"><code> Assembley   <progress className="progress progress-success w-20 lg:w-56" value="70" max="100"></progress></code></pre>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skills
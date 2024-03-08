import React from 'react'

function ProjectCard() {
    return (
        <>
            {/* Project card */}
            <div className="bg-gradient-to-b flex flex-col justify-between from-blue-100 to-red-100 h-full  lg:w-1/4">
                {/* Image container */}
                <div className='h-96 bg-white m-2'></div>
                {/* Text container */}
                <div className='flex flex-col items-center mx-1 justify-between h-1/4'>
                    {/* Title  */}
                    <h1 className='text-xl font-bold'>Dummy Project</h1>
                    {/* Desc  */}
                    <p className='text-lg text-center italic'>Welcome to this project. This is built with nextjs and tailwindcss. This is built with nextjs and tailwindcss. This is built with nextjs and tailwindcss. This is built with nextjs and tailwindcss. This is built with nextjs and tailwindcss</p>
                </div>
                {/* Button container */}
                <div className="h-1/4 w-full flex justify-center gap-4 p-2">
                    <button className="p-1 rounded ring-1 ring-black bg-black text-white ">Code</button>
                    <button className="p-1 rounded ring-1 ring-black ">Live</button>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
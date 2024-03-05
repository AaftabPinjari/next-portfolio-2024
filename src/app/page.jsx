"use client"
import { motion } from "framer-motion"
import Image from "next/image";


const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ x: "-200vw" }} animate={{ x: "0vw" }} transition={{ duration: 2 }}>
      <div className="h-full p-4 xl:pb-16 lg:flex-row  gap-4  flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/**Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/3 relative self-center lg:self-start">
          <Image src="/animeme.png" alt="" width={300} height={300} className="object-contain" />
        </div>
        {/**Text Container */}
        <div className="h-1/2 lg:h-full lg:w-2/3 flex flex-col text-center lg:text-start gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Frontend Developer: Aaftab Pinjari
          </h1>
          <p className="md:text-lg">Welcome to Aaftabs portfolio, where frontend development meets innovation. With expertise in HTML, CSS, and JavaScript, Aaftab Pinjari crafts seamless user experiences that captivate audiences. Explore Aaftabs projects and witness the fusion of creativity and technology in action.</p>
          <div className="w-full flex items-center justify-center lg:justify-start gap-4">
            <button className="p-3 rounded ring-1 ring-black bg-black text-white ">View my work</button>
            <button className="p-3 rounded ring-1 ring-black ">Contact</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

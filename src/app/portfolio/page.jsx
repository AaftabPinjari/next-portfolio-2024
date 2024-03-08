"use client"
import ProjectCard from "@/components/projectCard"
import { motion } from "framer-motion"
import React from 'react'

const PortfolioPage = () => {
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
            <div className="h-full flex flex-col justify-between  ">
                <h1 className="text-center font-bold text-2xl">My Works</h1>
                {/*Projects */}
                <div className="p-2 m-4 rounded-lg bg-white flex flex-wrap gap-4 justify-around">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>


            </div>
        </motion.div>
    )
}

export default PortfolioPage
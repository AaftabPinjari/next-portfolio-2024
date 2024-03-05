"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'

function TransitionProvider({ children }) {

    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-full h-full  bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                    className='fixed text-white h-fit w-fit text-8xl bottom-0 right-0 m-auto top-0 left-0  z-50'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {pathName.substring(1)}
                </motion.div>
                <motion.div
                    className='h-screen w-screen fixed bg-black bottom-0 rounded-t-[100px] z-40'
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                {/*to make th total height 100vh*/}
                <div className="h-[calculate(100vh-6rem)] lg:py-10  ">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider
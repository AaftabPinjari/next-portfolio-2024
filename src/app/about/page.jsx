"use client"
import { motion } from "framer-motion"
import React from 'react'

const AboutPage = () => {
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
            <div>AboutPage</div>
        </motion.div>
    )
}

export default AboutPage
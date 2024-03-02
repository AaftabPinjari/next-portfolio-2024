"use client"
import { motion } from "framer-motion"
import React from 'react'

const PortfolioPage = () => {
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
            <div>PortfolioPage</div>
        </motion.div>
    )
}

export default PortfolioPage
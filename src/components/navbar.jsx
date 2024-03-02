"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from 'framer-motion'

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }
]

const Navbar = () => {

    const [open, setOpen] = useState(false)
    //to animate the hamburger menu gave variants for the 3 divs for framer motion
    const topBarVariants = {
        closed: {
            rotate: 0,

        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        }
    }
    const centerBarVariants = {
        closed: {
            opacity: 1,

        },
        opened: {
            opacity: 0
        }
    }
    const bottomBarVariants = {
        closed: {
            rotate: 0,

        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    //menu list variants for framer motion
    const menuListVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: "0",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }

    }

    //list item variants for anoimation
    const listItemVariants = {
        closed: {
            x: "-10",
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
            {/*Links */}
            <div className="hidden md:flex justify-start gap-4 w-1/3">
                {links.map(link => (
                    <NavLink key={link.title} link={link} />
                ))}
            </div>
            {/*Logo */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black font-semibold flex items-center rounded-md p-1">
                    <span className="text-white mr-1">Aaftab</span>
                    <span className="text-black bg-white rounded px-1 ">Pinjari</span>
                </Link>
            </div>
            {/*Social links*/}
            <div className="hidden md:flex justify-end gap-8 w-1/3">
                <Link href="/">
                    <Image src="/github.png" alt="github" height={24} width={24} />
                </Link>
                <Link href="/">
                    <Image src="/linkedin.png" alt="github" height={24} width={24} />
                </Link>
                <Link href="/">
                    <Image src="/instagram.png" alt="github" height={24} width={24} />
                </Link>
            </div>
            {/*Responsive menu */}
            <div className="md:hidden">
                {/*Burger Button */}
                <button className="h-8 w-10 flex flex-col justify-between z-40 relative"
                    onClick={() => setOpen(!open)}
                >
                    <motion.div animate={open ? "opened" : "closed"} variants={topBarVariants} className="w-10 h-1 rounded bg-black origin-left"></motion.div>
                    <motion.div animate={open ? "opened" : "closed"} variants={centerBarVariants} className="w-10 h-1 rounded bg-black"></motion.div>
                    <motion.div animate={open ? "opened" : "closed"} variants={bottomBarVariants} className="w-10 h-1 rounded bg-black origin-left"></motion.div>
                </button>
                {/*Menu list*/}
                {open &&
                    <motion.div variants={menuListVariants} initial="closed" animate="opened" className="absolute top-0 left-0 bg-black h-screen w-screen text-xl text-white flex flex-col items-center justify-center gap-8 z-30">
                        {links.map(link => (
                            <motion.div variants={listItemVariants} key={link.title} >
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default Navbar
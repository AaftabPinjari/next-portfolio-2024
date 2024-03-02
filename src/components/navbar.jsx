"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }
]

const Navbar = () => {

    const [open, setOpen] = useState(false)
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
                <button className="h-8 w-10 flex flex-col justify-between z-30 relative"
                    onClick={() => setOpen(!open)}
                >
                    <div className="w-10 h-1 rounded bg-black"></div>
                    <div className="w-10 h-1 rounded bg-black"></div>
                    <div className="w-10 h-1 rounded bg-black"></div>
                </button>
                {/*Menu list*/}
                {open &&
                    <div className="absolute top-0 left-0 bg-black h-screen w-screen text-xl text-white flex flex-col items-center justify-center gap-8">
                        {links.map(link => (
                            <Link key={link.title} href={link.url}>{link.title}</Link>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
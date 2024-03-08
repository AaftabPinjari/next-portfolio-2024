"use client"
import 'dotenv/config'
import { motion } from "framer-motion"
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { NEXT_PUBLIC_PUBLIC_API_KEY, NEXT_PUBLIC_USER_ID, NEXT_PUBLIC_TEMPLATE_ID } from './variable';

const ContactPage = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    //emailjs template
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false)
        setSuccess(false)

        emailjs
            .sendForm(NEXT_PUBLIC_USER_ID, NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: NEXT_PUBLIC_PUBLIC_API_KEY,
            })
            .then(
                () => {
                    setSuccess(true)
                    form.current.reset()
                },
                (error) => {
                    setError(true)
                    console.log('FAILED...', error.text);
                },
            );
    };


    const text = "Contact!"

    return (
        <motion.div className="h-full w-screen" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
            {/*container */}
            <div className="h-full flex items-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
                {/*text container */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    {/*animated text */}
                    <div className="flex">
                        {text.split("").map((letter, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.1 }}>
                                {letter}
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/*form container */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="h-1/2 rounded-xl m-3 lg:h-full lg:w-1/2 bg-red-50 flex flex-col justify-center gap-8 p-24 text-xl">
                    <span>Dear Aaftab Pinjari,</span>
                    <textarea name="user_message" rows={6} className=" border-b-2 bg-transparent resize-none outline-none border-b-black " />
                    <span>My Email Address is:</span>
                    <input name="user_email" className=" border-b-2 bg-transparent outline-none border-b-black " />
                    <span>Regards</span>
                    <button className="bg-purple-200 text-gray-600 rounded font-semibold">Send</button>
                    {success && <span className="text-green-600 font-semibold">Your message is sent Successfully!</span>}
                    {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}

                </form>

            </div>
        </motion.div>
    )
}

export default ContactPage
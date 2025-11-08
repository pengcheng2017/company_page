"use client"

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackToTop() {

    const [show, setShow] = useState(false);

    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
    }, [])


    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onClick={handleToTop} className={`${show ? "fixed z-50" : "hidden"} right-4 bottom-4`}>
                <div className="rounded-full w-12 h-12 select-none flex flex-col cursor-pointer hover:opacity-80 items-center drop-shadow justify-center bg-primary-100 border border-white opacity-50 text-white">
                    <Image className="w-8 h-8" alt="backToTop" src={require("@/assets/icon/arrow-top.svg")} />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
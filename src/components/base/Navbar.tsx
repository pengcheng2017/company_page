"use client"

import Image from "next/image";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";
import { ChevronDown } from "lucide-react";

export default function BaseNavbar({ authenticated }: { authenticated: any }) {

    const [sidebar, setSidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openLocale, setOpenLocale] = useState(false);
    const path = usePathname();
    const dispatch = useAppDispatch()
    const pathname = usePathname()
    const user = useAppSelector(state => state.user)
    const locale = useParams().locale

    useEffect(() => {
        setIsOpen(false)
        setOpenLocale(false)
    }, [path])

    useEffect(() => {
        if (isOpen || sidebar) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen, sidebar])

    useEffect(() => {
        if (authenticated?.access_token) {
            // dispatch(getUser())
        }
    }, [authenticated])

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleLocaleNavigation = (newLocale: string) => {
        let link = pathname;
        
        if (pathname.startsWith("/id/") || pathname.startsWith("/id")) {
            link = pathname.slice(3);
        } else if (pathname.startsWith("/cn/") || pathname.startsWith("/cn")) {
            link = pathname.slice(3);
        }
        
        if (newLocale === "en") {
            window.location.href = "/en/" + link;
        } else {
            window.location.href = "/" + newLocale + link;
        }
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#1d0f33]/95 backdrop-blur-sm">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center flex-1 overflow-hidden">
                        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="mr-6 flex-shrink-0">
                            <img
                                src="https://ext.same-assets.com/130432291/1178005615.svg"
                                alt="JUZI.BOT"
                                className="h-12"
                            />
                        </a>
                        <nav className="hidden font-plus-jakarta-sans-semi-bold px-4 lg:flex items-center gap-6 text-sm text-white">
                            <a onClick={(e) => handleScroll(e, 'home')} className="text-greyscale-400 hover:text-[#DA37E8] cursor-pointer" href="#home">
                                {Language(dictionary.home_text_header_menu)}
                            </a>
                            <a onClick={(e) => handleScroll(e, 'features')} className="text-greyscale-400 hover:text-[#DA37E8] cursor-pointer" href="#features">
                                {Language(dictionary.features_text_header_menu)}
                            </a>
                            <a onClick={(e) => handleScroll(e, 'prices')} className="text-greyscale-400 hover:text-[#DA37E8] cursor-pointer" href="#prices">
                                {Language(dictionary.prices_text_header_menu)}
                            </a>
                            <a onClick={(e) => handleScroll(e, 'about-us')} className="text-greyscale-400 hover:text-primary-700 cursor-pointer" href="#about-us">
                                {Language(dictionary.about_us_text_header_menu)}
                            </a>
                            <a onClick={(e) => handleScroll(e, 'contacts')} className="text-greyscale-400 hover:text-[#DA37E8] cursor-pointer" href="#contacts">
                                {Language(dictionary.contacts_text_header_menu)}
                            </a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4 text-sm flex-shrink-0">
                        <div onClick={() => setOpenLocale(!openLocale)} className="flex items-center gap-1 text-white cursor-pointer hover:text-[#EF3BFB] transition-colors">
                            <span>
                                {Language(dictionary.button_change_language_section)}
                            </span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {
                    openLocale && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.3 }}
                            className="fixed hidden z-30 px-10 py-4 top-20 right-20 shadow-md bg-white/70 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-xl lg:flex items-center justify-center">
                            <div className="flex flex-col space-y-2">
                                <div onClick={() => handleLocaleNavigation("en")} className={`${locale == "en" ? "text-[#DA37E8]" : "text-greyscale-700"} flex items-center font-plus-jakarta-sans-bold cursor-pointer`}>
                                    ENGLISH
                                </div>
                                <div onClick={() => handleLocaleNavigation("id")} className={`${locale == "id" ? "text-[#DA37E8]" : "text-greyscale-700"} flex items-center font-plus-jakarta-sans-bold cursor-pointer`}>
                                    BAHASA
                                </div>
                                <div onClick={() => handleLocaleNavigation("cn")} className={`${locale == "cn" ? "text-[#DA37E8]" : "text-greyscale-700"} flex items-center font-plus-jakarta-sans-bold cursor-pointer`}>
                                    CHINA
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.3 }}
                            className="fixed z-30 w-full h-full">
                            <div className="space-y-4 pb-4 relative bg-white rounded-b-[2rem] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 w-full overflow-y-auto scrollbar-none">
                                <div className="w-full relative pt-4 px-6 flex justify-end">
                                    <div onClick={() => setIsOpen(false)} className="lg:hidden flex items-center cursor-pointer hover:opacity-70">
                                        <Cross1Icon className="w-6 h-6 text-greyscale-700" />
                                    </div>
                                </div>
                                <div className="px-6 relative space-y-4 flex flex-col font-plus-jakarta-sans-bold text-xl w-full">
                                    <a onClick={(e) => handleScroll(e, 'home')} className="text-greyscale-400 hover:text-primary-700 cursor-pointer" href="#home">
                                        {Language(dictionary.home_text_header_menu)}
                                    </a>
                                    <a onClick={(e) => handleScroll(e, 'features')} className="text-greyscale-400 hover:text-primary-700 cursor-pointer" href="#features">
                                        {Language(dictionary.features_text_header_menu)}
                                    </a>
                                    <a onClick={(e) => handleScroll(e, 'prices')} className="text-greyscale-400 hover:text-primary-700 cursor-pointer" href="#prices">
                                        {Language(dictionary.prices_text_header_menu)}
                                    </a>
                                    <a onClick={(e) => handleScroll(e, 'about-us')} className="text-greyscale-400 hover:text-primary-700 cursor-pointer" href="#about-us">
                                        {Language(dictionary.about_us_text_header_menu)}
                                    </a>
                                </div>
                            </div>
                            {
                                openLocale && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -100 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute z-50 w-40 h-20 right-4 -mt-6 shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 flex items-center justify-center">
                                        <div className="flex flex-col space-y-2">
                                            <div onClick={() => handleLocaleNavigation("en")} className={`${locale == "en" ? "text-[#DA37E8]" : "text-greyscale-600"} flex items-center font-plus-jakarta-sans-bold cursor-pointer`}>
                                                ENGLISH
                                            </div>
                                            <div onClick={() => handleLocaleNavigation("id")} className={`${locale == "id" ? "text-[#DA37E8]" : "text-greyscale-600"} flex items-center font-plus-jakarta-sans-bold cursor-pointer`}>
                                                BAHASA
                                            </div>
                                            <div onClick={() => handleLocaleNavigation("cn")} className={`${locale == "cn" ? "text-[#DA37E8]" : "text-greyscale-600"} flex items-center font-plus-jakarta-sans-bold cursor-pointer`}>
                                                CHINA
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

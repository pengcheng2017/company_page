"use client"

import Image from "next/image";
import Link from "next/link";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function BaseFooter() {

    return (
        <footer className="bg-gray-900 text-white py-16" id="contact">
            <div className="w-full max-w-7xl mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
                    {/* Footer Contact */}
                    <div className="flex-1">
                        <div className="text-2xl font-bold mb-5">
                            <Image src={require("@/assets/icon/logo.png")} alt="salesup.ai" className="w-14 h-14 rounded-lg" />
                        </div>
                        <div className="text-sm space-y-2">
                            <p>{Language(dictionary.footer_contact_whatsapp_section)}</p>
                            <p>{Language(dictionary.footer_contact_email_section)}</p>
                            <p>{Language(dictionary.footer_contact_address_section)}</p>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="flex-1 flex justify-end hidden md:block">
                        <ul className="list-none space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    {Language(dictionary.footer_privacy_policy_section)}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    {Language(dictionary.footer_terms_of_use_section)}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    {Language(dictionary.footer_about_us_section)}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    {Language(dictionary.footer_contact_section)}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center pt-8 border-t border-gray-700 text-gray-400 text-sm">
                    <p>{Language(dictionary.footer_copyright_section)}</p>
                </div>
            </div>
        </footer>
    )
}
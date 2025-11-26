"use client";

import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function FeatureJumbotronSection() {

    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = Language(dictionary.subtitle_section)

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setText('');
                setCurrentIndex(0);
            }, 2000);
            return () => clearTimeout(resetTimeout);
        }
    }, [currentIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(https://ext.same-assets.com/130432291/769134430.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1d0f33] via-[#2d1f43] to-[#1d0f33] opacity-90" />

            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-purple-600/30 rounded-3xl blur-xl animate-pulse" />
            <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-2xl blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-40 right-96 w-12 h-12 bg-pink-500/30 rounded-xl blur-md animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-indigo-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 mt-20">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-[55px] font-semibold text-white mb-4 leading-tight" style={{ fontFamily: '"Gill Sans", sans-serif' }}>
                        {Language(dictionary.main_title_section)}
                    </h1>

                    <div className="lg:text-[50px] mb-6">
                        <span className="text-white whitespace-nowrap">
                            {Language(dictionary.main_pre_subtitle_section)}
                        </span>
                        <span className="text-[#DA37E8] min-w-[200px] md:min-w-[600px] text-left">
                            {text}
                        </span>
                    </div>

                    <div className="flex justify-center my-12">
                        <a
                            href="/register"
                            className="px-10 py-4 font-semibold text-lg text-white rounded-full transition-transform hover:scale-105"
                            style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
                        >
                            {Language(dictionary.try_now_section)}
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
                        <div className="w-full md:w-[400px] py-6 bg-black rounded-xl p-5 flex flex-col hover:shadow-xl hover:shadow-purple-500/20 transition-all">
                            <h3 className="text-[21px] font-mediumt text-left text-white mb-2">
                                {Language(dictionary.try_for_free_title_section)}
                            </h3>
                            <p className="text-sm text-left text-white flex-1">
                                {Language(dictionary.try_for_free_subtitle_section)}
                            </p>
                            <a href="#" className="text-[#EF3BFB] font-plus-jakarta-sans-medium hover:underline flex items-center gap-2 mt-2">
                                {Language(dictionary.try_for_free_button_section)}
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto my-60 px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                        <div className="flex-1 text-white">
                            <h2 className="text-3xl font-semibold mb-1">
                                {Language(dictionary.key_features_title_section)}
                            </h2>
                            <p className="text-xl text-white/80 mb-8">
                                {Language(dictionary.key_features_subtitle_section)}
                            </p>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex flex-col items-start gap-1">
                                    <span className="text-[#EF3BFB] text-xl font-semibold">
                                        {Language(dictionary.key_feature_item_1_title_section)}
                                    </span>
                                    <span className="text-white/80">
                                        {Language(dictionary.key_feature_item_1_subtitle_section)}
                                    </span>
                                </li>
                                <li className="flex flex-col items-start gap-1">
                                    <span className="text-[#EF3BFB] text-xl font-semibold">
                                        {Language(dictionary.key_feature_item_2_title_section)}
                                    </span>
                                    <span className="text-white/80">
                                        {Language(dictionary.key_feature_item_2_subtitle_section)}
                                    </span>
                                </li>
                                <li className="flex flex-col items-start gap-1">
                                    <span className="text-[#EF3BFB] text-xl font-semibold">
                                        {Language(dictionary.key_feature_item_3_title_section)}
                                    </span>
                                    <span className="text-white/80">
                                        {Language(dictionary.key_feature_item_3_subtitle_section)}
                                    </span>
                                </li>
                                <li className="flex flex-col items-start gap-1">
                                    <span className="text-[#EF3BFB] text-xl font-semibold">
                                        {Language(dictionary.key_feature_item_4_title_section)}
                                    </span>
                                    <span className="text-white/80">
                                        {Language(dictionary.key_feature_item_4_subtitle_section)}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <Image
                                src={require('@/assets/image/our-product.png')}
                                alt="AI Process Engine"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
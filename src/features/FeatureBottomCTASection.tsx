"use client";

import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function FeatureBottomCTASection() {

    return (
        <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white text-center">
            <div className="w-full max-w-7xl mx-auto px-5">
                <h2 className="text-4xl font-semibold font-poppins mb-5">
                    {Language(dictionary.final_cta_title_section)}
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                    {Language(dictionary.final_cta_subtitle_section)}
                </p>
                <a 
                    href="/register" 
                    className="inline-block bg-white text-purple-600 py-3 px-8 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                    {Language(dictionary.final_cta_button_section)}
                </a>
            </div>
        </section>
    )
}
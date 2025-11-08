"use client";

import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function FeatureHowItWorksSection() {

    return (
        <section className="py-24 bg-gray-50" id="how-it-works">
            <div className="w-full max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold font-poppins mb-4">
                        {Language(dictionary.how_it_works_title_section)}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {Language(dictionary.how_it_works_subtitle_section)}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto gap-10 md:gap-0">
                    <div className="text-center flex-1 px-5 relative">
                        <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5">
                            1
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            {Language(dictionary.how_it_works_step_1_title_section)}
                        </h3>
                        <p className="text-gray-600">
                            {Language(dictionary.how_it_works_step_1_desc_section)}
                        </p>
                        <div className="hidden md:block absolute top-10 -right-12 w-24 h-0.5 bg-gray-300"></div>
                    </div>
                    <div className="text-center flex-1 px-5 relative">
                        <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5">
                            2
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            {Language(dictionary.how_it_works_step_2_title_section)}
                        </h3>
                        <p className="text-gray-600">
                            {Language(dictionary.how_it_works_step_2_desc_section)}
                        </p>
                        <div className="hidden md:block absolute top-10 -right-12 w-24 h-0.5 bg-gray-300"></div>
                    </div>
                    <div className="text-center flex-1 px-5 relative">
                        <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5">
                            3
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            {Language(dictionary.how_it_works_step_3_title_section)}
                        </h3>
                        <p className="text-gray-600">
                            {Language(dictionary.how_it_works_step_3_desc_section)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
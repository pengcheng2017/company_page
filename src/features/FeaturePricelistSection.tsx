"use client";

import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function FeaturePricelistSection() {
    
    return (
        <section className="py-24 bg-gray-50" id="pricing">
            <div className="w-full max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold font-poppins mb-4">
                        {Language(dictionary.pricing_title_section)}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {Language(dictionary.pricing_subtitle_section)}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
                    {/* Plan 1 - Starter */}
                    <div className="bg-white rounded-xl p-10 shadow-md flex-1 text-center hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-2xl font-semibold mb-2">
                            {Language(dictionary.pricing_plan_1_name_section)}
                        </h3>
                        <div className="text-5xl font-bold mb-5 text-purple-600">
                            {Language(dictionary.pricing_plan_1_price_section)}
                        </div>
                        <ul className="list-none mb-8">
                            <li className="py-2 border-b border-gray-200">
                                {Language(dictionary.pricing_plan_1_feature_1_section)}
                            </li>
                            <li className="py-2 border-b border-gray-200">
                                {Language(dictionary.pricing_plan_1_feature_2_section)}
                            </li>
                            <li className="py-2">
                                {Language(dictionary.pricing_plan_1_feature_3_section)}
                            </li>
                        </ul>
                        <a 
                            href="#" 
                            className="inline-block bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                        >
                            {Language(dictionary.pricing_plan_1_cta_section)}
                        </a>
                    </div>

                    {/* Plan 2 - Pro (Featured) */}
                    <div className="bg-white rounded-xl p-10 shadow-md flex-1 text-center hover:-translate-y-1 transition-transform duration-300 border-2 border-purple-600 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white py-1 px-4 rounded-full text-sm font-semibold">
                            {Language(dictionary.pricing_plan_2_badge_section)}
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">
                            {Language(dictionary.pricing_plan_2_name_section)}
                        </h3>
                        <div className="text-5xl font-bold mb-5 text-purple-600">
                            {Language(dictionary.pricing_plan_2_price_section)}
                            <span className="text-base">
                                {Language(dictionary.pricing_plan_2_price_period_section)}
                            </span>
                        </div>
                        <ul className="list-none mb-8">
                            <li className="py-2 border-b border-gray-200">
                                {Language(dictionary.pricing_plan_2_feature_1_section)}
                            </li>
                            <li className="py-2 border-b border-gray-200">
                                {Language(dictionary.pricing_plan_2_feature_2_section)}
                            </li>
                            <li className="py-2 border-b border-gray-200">
                                {Language(dictionary.pricing_plan_2_feature_3_section)}
                            </li>
                            <li className="py-2">
                                {Language(dictionary.pricing_plan_2_feature_4_section)}
                            </li>
                        </ul>
                        <a 
                            href="#" 
                            className="inline-block bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                        >
                            {Language(dictionary.pricing_plan_2_cta_section)}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
"use client";

import Language from "@/lib/language";
import Image from "next/image";
import dictionary from "@/assets/locale/dictionary.json";


export default function FeatureKeyFeaturesSection() {

    return (
        <section className="py-24 bg-white" id="features">
            <div className="w-full max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold font-poppins mb-4">
                        {Language(dictionary.key_features_title_section)}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {Language(dictionary.key_features_subtitle_section)}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-5xl mb-5">🤝</div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {Language(dictionary.key_feature_item_1_title_section)}
                        </h3>
                        <p className="text-gray-600">
                            {Language(dictionary.key_feature_item_1_subtitle_section)}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-5xl mb-5">📅</div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {Language(dictionary.key_feature_item_2_title_section)}
                        </h3>
                        <p className="text-gray-600">
                            {Language(dictionary.key_feature_item_2_subtitle_section)}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-5xl mb-5">💬</div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {Language(dictionary.key_feature_item_3_title_section)}
                        </h3>
                        <p className="text-gray-600">
                            {Language(dictionary.key_feature_item_3_subtitle_section)}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-5xl mb-5">💰</div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {Language(dictionary.key_feature_item_4_title_section)}
                        </h3>
                        <p className="text-gray-600">
                            {Language(dictionary.key_feature_item_4_subtitle_section)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
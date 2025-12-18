"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function FeaturePricelistSection() {
  const starterDescription = Language(
    dictionary.pricing_plan_1_feature_1_section
  );
  const starterFeatures = [
    Language(dictionary.pricing_plan_1_feature_2_section),
    Language(dictionary.pricing_plan_1_feature_3_section),
  ];
  const proDescription = Language(dictionary.pricing_plan_2_feature_1_section);
  const proFeatures = [
    Language(dictionary.pricing_plan_2_feature_2_section),
    Language(dictionary.pricing_plan_2_feature_3_section),
    Language(dictionary.pricing_plan_2_feature_4_section),
  ];

  return (
    <section id="pricing" className="py-24 px-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-ink mb-4 text-balance">
            {Language(dictionary.pricing_title_section)}
          </h2>
          <p className="text-lg text-ink-muted">
            {Language(dictionary.pricing_subtitle_section)}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-surface-strong rounded-3xl p-8 border-2 border-ink/10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-ink mb-2">
                {Language(dictionary.pricing_plan_1_name_section)}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-ink">
                  {Language(dictionary.pricing_plan_1_price_section)}
                </span>
              </div>
              <p className="text-ink-muted text-sm">{starterDescription}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {starterFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full border-ink/20 text-ink hover:bg-primary hover:text-primary-foreground bg-transparent"
              variant="outline"
            >
              {Language(dictionary.pricing_plan_1_cta_section)}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-surface-strong rounded-3xl p-8 border-2 border-primary shadow-2xl hover:shadow-3xl transition-all duration-300 relative lg:scale-105"
          >
            <motion.div
              animate={{
                background: [
                  "linear-gradient(90deg, #EF3BFB 0%, #FFB703 100%)",
                  "linear-gradient(90deg, #FFB703 0%, #EF3BFB 100%)",
                  "linear-gradient(90deg, #EF3BFB 0%, #FFB703 100%)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full"
            >
              <span className="text-sm font-bold text-primary-foreground">
                {Language(dictionary.pricing_plan_2_badge_section)}
              </span>
            </motion.div>

            <div className="mb-6 mt-4">
              <h3 className="text-2xl font-bold text-ink mb-2">
                {Language(dictionary.pricing_plan_2_name_section)}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-primary">
                  {Language(dictionary.pricing_plan_2_price_section)}
                </span>
                <span className="text-ink-muted">
                  {Language(dictionary.pricing_plan_2_price_period_section)}
                </span>
              </div>
              <p className="text-ink-muted text-sm">{proDescription}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {Language(dictionary.pricing_plan_2_cta_section)}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

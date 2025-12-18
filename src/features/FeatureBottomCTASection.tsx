"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function FeatureBottomCTASection() {
  return (
    <section className="py-24 lg:py-32 px-20 relative overflow-hidden bg-background">
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background"
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-heading mb-6 text-balance"
          >
            {Language(dictionary.final_cta_title_section)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-body mb-10 max-w-2xl mx-auto"
          >
            {Language(dictionary.final_cta_subtitle_section)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
            >
              {Language(dictionary.final_cta_button_section)}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

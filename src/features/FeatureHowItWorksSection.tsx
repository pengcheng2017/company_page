"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Brain, Rocket, ChevronDown } from "lucide-react";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function FeatureHowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      number: 1,
      icon: Smartphone,
      title: Language(dictionary.how_it_works_step_1_title_section),
      description: Language(dictionary.how_it_works_step_1_desc_section),
      mockupContent: "connect",
    },
    {
      number: 2,
      icon: Brain,
      title: Language(dictionary.how_it_works_step_2_title_section),
      description: Language(dictionary.how_it_works_step_2_desc_section),
      mockupContent: "learn",
    },
    {
      number: 3,
      icon: Rocket,
      title: Language(dictionary.how_it_works_step_3_title_section),
      description: Language(dictionary.how_it_works_step_3_desc_section),
      mockupContent: "automate",
    },
  ];
  const learnMetrics = [
    {
      label: Language(dictionary.how_it_works_learn_metric_1_label),
      progress: 95,
    },
    {
      label: Language(dictionary.how_it_works_learn_metric_2_label),
      progress: 87,
    },
    {
      label: Language(dictionary.how_it_works_learn_metric_3_label),
      progress: 92,
    },
    {
      label: Language(dictionary.how_it_works_learn_metric_4_label),
      progress: 89,
    },
  ];
  const automateStats = [
    {
      label: Language(dictionary.how_it_works_automate_stat_1_label),
      value: "1,247",
      color: "bg-heading/60",
    },
    {
      label: Language(dictionary.how_it_works_automate_stat_2_label),
      value: "342",
      color: "bg-heading/80",
    },
    {
      label: Language(dictionary.how_it_works_automate_stat_3_label),
      value: "$18.5K",
      color: "bg-highlight",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4 text-balance">
            {Language(dictionary.how_it_works_title_section)}
          </h2>
          <p className="text-lg text-body">
            {Language(dictionary.how_it_works_subtitle_section)}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-accent border-heading shadow-lg"
                        : "bg-accent/70 border-border hover:border-heading/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-heading/15 text-heading"
                            : "bg-accent/80 text-body"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-sm font-semibold ${
                              isActive ? "text-primary" : "text-body"
                            }`}
                          >
                            {Language(dictionary.how_it_works_step_label)}{" "}
                            {step.number}
                          </span>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-body" />
                          </motion.div>
                        </div>

                        <h3 className="text-xl font-bold text-heading mb-2">
                          {step.title}
                        </h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-body leading-relaxed overflow-hidden"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Dynamic Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-accent rounded-3xl shadow-2xl p-8 border border-border"
              >
                {steps[activeStep].mockupContent === "connect" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-heading/15 rounded-3xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-12 h-12 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="inline-block px-6 py-3 bg-heading/10 rounded-full mb-4">
                        <p className="text-sm font-semibold text-heading">
                          {Language(
                            dictionary.how_it_works_connect_success_label
                          )}
                        </p>
                      </div>
                      <p className="text-body">
                        {Language(dictionary.how_it_works_connect_success_desc)}
                      </p>
                    </div>
                  </div>
                )}

                {steps[activeStep].mockupContent === "learn" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-heading/10 rounded-full flex items-center justify-center">
                          <Brain className="w-12 h-12 text-[#F4A261]" />
                        </div>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="absolute inset-0 bg-heading/20 rounded-full"
                        />
                      </div>
                    </div>
                    {learnMetrics.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-heading">
                            {item.label}
                          </span>
                          <span className="text-primary font-semibold">
                            {item.progress}%
                          </span>
                        </div>
                        <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {steps[activeStep].mockupContent === "automate" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {automateStats.map((stat, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-accent rounded-xl"
                        >
                          <div
                            className={`w-3 h-3 ${stat.color} rounded-full mx-auto mb-2`}
                          />
                          <p className="text-2xl font-bold text-heading mb-1">
                            {stat.value}
                          </p>
                          <p className="text-xs text-body">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-accent border-2 border-border rounded-xl flex items-center gap-3">
                      <div className="w-10 h-10 bg-heading/15 rounded-full flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-heading" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-heading">
                          {Language(
                            dictionary.how_it_works_automate_active_label
                          )}
                        </p>
                        <p className="text-xs text-body">
                          {Language(
                            dictionary.how_it_works_automate_active_desc
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-body">
                          {Language(
                            dictionary.how_it_works_automate_performance_label
                          )}
                        </span>
                        <span className="text-primary font-semibold">
                          {Language(
                            dictionary.how_it_works_automate_performance_delta
                          )}
                        </span>
                      </div>
                      <div className="flex items-end gap-1 h-20">
                        {[60, 75, 65, 85, 70, 90, 80, 95, 85, 100].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-primary/40 rounded-t"
                              style={{ height: `${height}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

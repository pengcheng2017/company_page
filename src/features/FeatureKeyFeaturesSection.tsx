"use client";
import {
  Users,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";
export function FeatureKeyFeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: Language(dictionary.key_feature_item_1_title_section),
      description: Language(dictionary.key_feature_item_1_subtitle_section),
      mockupType: "trust",
    },
    {
      icon: Sparkles,
      title: Language(dictionary.key_feature_item_2_title_section),
      description: Language(dictionary.key_feature_item_2_subtitle_section),
      mockupType: "promo",
    },
    {
      icon: Heart,
      title: Language(dictionary.key_feature_item_3_title_section),
      description: Language(dictionary.key_feature_item_3_subtitle_section),
      mockupType: "relationship",
    },
    {
      icon: Zap,
      title: Language(dictionary.key_feature_item_4_title_section),
      description: Language(dictionary.key_feature_item_4_subtitle_section),
      mockupType: "sales",
    },
  ];

  return (
    <section id="features" className="py-24 px-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-ink mb-4 text-balance">
            {Language(dictionary.key_features_title_section)}
          </h2>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto">
            {Language(dictionary.key_features_subtitle_section)}
          </p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-ink mb-4 text-balance">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-ink-muted leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <Button
                    variant="link"
                    className="text-primary px-0 hover:text-highlight hover:gap-3 gap-2 transition-all duration-300"
                  >
                    {Language(dictionary.learn_more_section)}
                    <span>-&gt;</span>
                  </Button>
                </div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative ${
                    isEven ? "" : "lg:col-start-1 lg:row-start-1"
                  }`}
                >
                  <div className="bg-surface-strong rounded-3xl shadow-2xl p-8 border border-ink/10 hover:shadow-3xl transition-shadow duration-500">
                    {feature.mockupType === "trust" && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-surface rounded-xl">
                          <div className="w-10 h-10 bg-primary/20 rounded-full" />
                          <div className="flex-1">
                            <div className="h-3 bg-ink/10 rounded w-32 mb-2" />
                            <div className="h-2 bg-ink/10 rounded w-24" />
                          </div>
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-start gap-3 p-4">
                            <div className="w-8 h-8 bg-surface rounded-full flex-shrink-0" />
                            <div className="flex-1 space-y-2">
                              <div className="h-2 bg-ink/10 rounded w-full" />
                              <div className="h-2 bg-ink/10 rounded w-3/4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.mockupType === "promo" && (
                      <div className="space-y-4">
                        {["Summer Sale", "Flash Deal", "VIP Offer"].map(
                          (promo, i) => (
                            <div key={i} className="p-4 bg-surface rounded-xl">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-ink">
                                  {promo}
                                </span>
                                <span className="text-xs text-highlight font-medium">
                                  Active
                                </span>
                              </div>
                              <div className="h-2 bg-ink/10 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${70 - i * 15}%` }}
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {feature.mockupType === "relationship" && (
                      <div className="space-y-4">
                        {[
                          {
                            name: "Sarah Johnson",
                            status: "Active",
                            score: 95,
                          },
                          { name: "Mike Chen", status: "Engaged", score: 87 },
                          { name: "Emma Wilson", status: "Active", score: 92 },
                        ].map((customer, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 p-4 bg-surface rounded-xl"
                          >
                            <div className="w-12 h-12 bg-primary/10 rounded-full" />
                            <div className="flex-1">
                              <p className="font-semibold text-ink text-sm">
                                {customer.name}
                              </p>
                              <p className="text-xs text-ink-muted">
                                {customer.status}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold text-primary">
                                {customer.score}%
                              </p>
                              <Heart className="w-4 h-4 text-primary mx-auto" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.mockupType === "sales" && (
                      <div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {[
                            { label: "Leads", value: "1.2K" },
                            { label: "Converted", value: "847" },
                            { label: "Revenue", value: "$52K" },
                            { label: "Growth", value: "+148%" },
                          ].map((stat) => (
                            <div
                              key={stat.label}
                              className="p-4 bg-surface rounded-xl"
                            >
                              <p className="text-xs text-ink-muted mb-1">
                                {stat.label}
                              </p>
                              <p className="text-xl font-bold text-ink">
                                {stat.value}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 bg-primary/10 rounded-xl flex items-center justify-between">
                          <span className="text-sm font-semibold text-ink">
                            Auto-pilot Active
                          </span>
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

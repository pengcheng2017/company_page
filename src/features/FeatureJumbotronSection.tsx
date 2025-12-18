"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Users } from "lucide-react";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";

export default function FeatureJumbotronSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background px-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-heading leading-tight text-balance"
            >
              {Language(dictionary.main_title_section)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-body leading-relaxed"
            >
              {Language(dictionary.subtitle_section)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {Language(dictionary.try_now_section)}
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-transparent"
              >
                {Language(dictionary.learn_more_section)}
              </Button> */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="bg-accent rounded-3xl shadow-2xl p-8 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-heading/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-heading" />
                    </div>
                    <div>
                      <p className="text-sm text-body">
                        {Language(dictionary.jumbotron_sales_performance_label)}
                      </p>
                      <p className="text-2xl font-bold text-primary">+148%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-body">
                      {Language(dictionary.jumbotron_this_month_label)}
                    </p>
                    <p className="text-2xl font-bold text-heading">$52.4K</p>
                  </div>
                </div>

                <div className="flex items-end gap-2 h-32 mb-6">
                  {[40, 65, 45, 80, 60, 90, 75, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className="flex-1 bg-primary/20 rounded-t-lg relative"
                    >
                      <div
                        className="absolute bottom-0 w-full bg-primary rounded-t-lg"
                        style={{ height: "60%" }}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-accent rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <span className="text-sm font-semibold text-heading">
                    75%
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-8 -left-8 bg-accent rounded-2xl shadow-xl p-4 border border-border w-64"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-heading/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-heading" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-primary mb-1">
                      {Language(dictionary.jumbotron_ai_assistant_label)}
                    </p>
                    <p className="text-xs text-body">
                      {Language(dictionary.jumbotron_ai_lead_message)}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -right-8 bg-accent rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-heading/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-heading" />
                  </div>
                  <div>
                    <p className="text-xs text-body">
                      {Language(dictionary.jumbotron_active_users_label)}
                    </p>
                    <p className="text-lg font-bold text-heading">2,847</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

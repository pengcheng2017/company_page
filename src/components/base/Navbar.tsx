"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { scrollY } = useScroll();
  const navTextClass = scrolled ? "text-ink" : "text-heading";
  const languageRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale =
    typeof params?.locale === "string" ? params.locale : "en";
  const languages = [
    { code: "id", label: "Indonesia" },
    { code: "en", label: "English" },
    { code: "cn", label: "Chinese" },
  ];

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    if (!languageOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageOpen]);

  const buildLocalePath = (locale: string) => {
    if (!pathname) {
      return `/${locale}`;
    }

    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = locale;
      return segments.join("/") || `/${locale}`;
    }

    return `/${locale}`;
  };

  const handleLocaleChange = (locale: string) => {
    if (locale === currentLocale) {
      setLanguageOpen(false);
      return;
    }

    router.push(buildLocalePath(locale));
    setLanguageOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md  shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex space-x-3 items-center">
            <Image
              src={require("@/assets/icon/logo.png")}
              alt="SalesUP.AI"
              width={48}
              height={48}
              className="h-10 w-10 rounded-xl ring-1 ring-white/10"
            />
            <span className="text-2xl font-bold text-primary font-display">
              SalesUp
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="#home"
              className={`text-sm font-medium ${navTextClass} hover:text-primary transition-colors duration-300 relative group`}
            >
              {Language(dictionary.home_text_header_menu)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#features"
              className={`text-sm font-medium ${navTextClass} hover:text-primary transition-colors duration-300 relative group`}
            >
              {Language(dictionary.features_text_header_menu)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#how-it-works"
              className={`text-sm font-medium ${navTextClass} hover:text-primary transition-colors duration-300 relative group`}
            >
              {Language(dictionary.how_it_works_text_header_menu)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#pricing"
              className={`text-sm font-medium ${navTextClass} hover:text-primary transition-colors duration-300 relative group`}
            >
              {Language(dictionary.prices_text_header_menu)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" ref={languageRef}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={languageOpen}
                onClick={() => setLanguageOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-sm font-medium ${navTextClass} hover:text-primary transition-colors duration-300`}
              >
                {Language(dictionary.button_change_language_section)}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {languageOpen && (
                <div
                  role="menu"
                  className={`absolute right-0 mt-3 w-40 rounded-xl border p-2 shadow-xl ${
                    scrolled
                      ? "bg-white border-ink/10 text-ink"
                      : "bg-accent/95 border-border/60 text-heading"
                  }`}
                >
                  {languages.map((language) => {
                    const isActive = language.code === currentLocale;
                    return (
                      <button
                        key={language.code}
                        role="menuitem"
                        type="button"
                        onClick={() => handleLocaleChange(language.code)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-primary/15 text-primary"
                            : scrolled
                            ? "hover:bg-ink/5 hover:text-ink"
                            : "hover:bg-white/5 hover:text-primary"
                        }`}
                      >
                        <span>{language.label}</span>
                        <span className="text-xs uppercase">
                          {language.code}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              onClick={() => {
                window.location.href =
                  "https://system.salesupaisass.com/register";
              }}
              className={`text-sm font-medium ${navTextClass} hover:text-primary`}
            >
              {Language(dictionary.register_button_section)}
            </Button>
          </div>

          <button className="lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

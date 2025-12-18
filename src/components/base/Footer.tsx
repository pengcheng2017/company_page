"use client";

import Image from "next/image";
import Link from "next/link";
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";
import { Sparkles } from "lucide-react";

export default function BaseFooter() {
  return (
    <footer className="bg-[#0a0a1f] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Sparkles className="w-5 h-5 text-white" />
              </div> */}
              <Image
                src={require("@/assets/icon/logo.png")}
                alt="SalesUP.AI"
                width={48}
                height={48}
                className="h-10 w-10 rounded-xl ring-1 ring-white/10"
              />
              <span className="text-xl font-bold text-white">SalesUp</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              WhatsApp: +62 1581 7525
              <br />
              Address: Jakarta, Indonesia
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © 2025 salesUP.AI. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client"

import { useParams } from "next/navigation"

export default function Language(dictionary?: { eng: string, id: string, cn: string } | { eng: string[], id: string[], cn: string[] }) {
    const param = useParams()
    const locale = param.locale || "en"
    
    // Handle undefined dictionary
    if (!dictionary) {
        return ""
    }
    
    const localeKey = locale === "en" ? "eng" : locale === "cn" ? "cn" : "id"
    return dictionary[localeKey] || ""
}
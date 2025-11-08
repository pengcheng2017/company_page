"use client"

import Image from "next/image"

export default function LoadingSpinner({
    className,
}: {
    className?: string
}) {

    return (
        <Image className={`animate-spin duration-500 ${className}`} alt='loading' src={require("@/assets/icon/loading-white.svg")} />
    )
}
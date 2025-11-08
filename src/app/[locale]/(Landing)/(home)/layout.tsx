import Image from "next/image";

export default function HomeLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="min-h-screen flex flex-col relative">
            <div className="relative w-full">
                {children}
            </div>
        </div>
    )
}
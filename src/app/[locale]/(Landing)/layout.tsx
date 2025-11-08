import BaseFooter from "@/components/base/Footer";
import BaseNavbar from "@/components/base/Navbar";
import BackToTop from "@/components/ui/backToTop";
import useSession from "@/lib/session";
import { Providers } from "@/store/provider";

interface Params {
    params: {
        locale: string,

    }
}

export default async function LandingLayout({ children, params: { locale } }: Readonly<{ children: React.ReactNode; }> & Params) {
    const session = await useSession("base");
    return (
        <Providers params={{ locale: locale }}>
            <BaseNavbar authenticated={session?.user} />
            <main className="min-h-screen">
                {children}
            </main>
            <BackToTop />
            <BaseFooter />
        </Providers>
    )
}
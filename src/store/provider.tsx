"use client";

import useInterceptorsLocale from "@/lib/interceptorsLocale";
import { Toaster } from "@/components/ui/toaster";
import { store } from "./store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

interface Params {
    params: {
        locale: string
    }
}

export function Providers({ children, params: { locale } }: { children: React.ReactNode } & Params) {
    useInterceptorsLocale(locale);

    return (
        <Provider store={store}>
            <SessionProvider>
                {children}
            </SessionProvider>
            <Toaster />
        </Provider>
    );
}
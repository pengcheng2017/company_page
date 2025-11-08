import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "./lib/locale";
import { NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
    // Store current request url in a custom header, which you can read later
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.nextUrl.pathname);


    return i18nRouter(new NextRequest(request.url, {
        headers: requestHeaders,
    }), i18nConfig);
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
}
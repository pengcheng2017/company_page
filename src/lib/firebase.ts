"use client"

import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, logEvent as lE, initializeAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
}

let analytics: Analytics | null = null;

const initializeFirebase = async () => {
    const app = initializeApp(firebaseConfig, "salesup-ai-landing");
    initializeAnalytics(app)
    analytics = getAnalytics(app);
    lE(analytics, "app_opened", {
        app_name: analytics.app.name,
    })
}

const logEvent = (eventName: string, eventParams?: Record<string, any>) => {
    analytics && lE(analytics, eventName, {
        ...eventParams,
        app_name: analytics.app.name,
    });
}

export { analytics, logEvent, initializeFirebase };
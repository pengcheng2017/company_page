"use client"

import { useEffect } from "react"
import { analytics, logEvent } from "../../lib/firebase"

const LogAnalytics = ({ eventName, eventParams }: { eventName: string, eventParams: any }) => {
    useEffect(() => {
        if (analytics) {
            logEvent(eventName, eventParams)
        }
    }, [eventName, eventParams])

    return null
}

export default LogAnalytics
"use client";

import { useEffect } from "react";

export function useAnalytics(eventName: string, data?: Record<string, any>) {
  useEffect(() => {
    console.log("Analytics Event:", eventName, data || {});
  }, [eventName, data]);
}

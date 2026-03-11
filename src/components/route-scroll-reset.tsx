"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previousValue = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousValue;
    };
  }, []);

  useLayoutEffect(() => {
    if (window.location.hash) {
      return;
    }

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousBehavior;
    });
  }, [pathname]);

  return null;
}

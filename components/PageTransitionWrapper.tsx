"use client";
import { type ReactNode } from "react";

export default function PageTransitionWrapper({ children }: { children: ReactNode }) {
  // Bypassed WebGL shader transitions to prevent blank rendering/hydration issues on mobile browsers
  return <>{children}</>;
}

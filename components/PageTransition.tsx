"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // When pathname changes, fade out, swap content, fade in
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      // Scroll to top instantly before showing new page
      window.scrollTo(0, 0);
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 150); // Short fade-out duration

    return () => clearTimeout(timeout);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Update children if they change without a route change (e.g. state updates)
  useEffect(() => {
    if (!isTransitioning) {
      setDisplayChildren(children);
    }
  }, [children, isTransitioning]);

  return (
    <div
      style={{
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 150ms ease-in-out",
      }}
    >
      {displayChildren}
    </div>
  );
}

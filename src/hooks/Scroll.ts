"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";

export const useScroll = (threshold = 10) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const handleScroll = (e: MouseEvent) => {
    e.preventDefault();
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return {
    scrolled,
    scrollRef,
    handleScroll,
  };
};

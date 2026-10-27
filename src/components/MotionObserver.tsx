"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    const selector = ".reveal, .reveal-header, .cascade-group, .curtain-deck";

    // Auto-assign --cascade-idx to .cascade-item elements inside their parent group
    document.querySelectorAll(".reveal, .cascade-group").forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>(".cascade-item");
      items.forEach((item, idx) => {
        if (!item.style.getPropertyValue("--cascade-idx")) {
          item.style.setProperty("--cascade-idx", String(idx));
        }
      });
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("is-visible", "is-settled");
      });
      return;
    }

    const settleTimers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            observer.unobserve(target);

            // Clear stagger transition-delay after entrance completes so hover is instant
            const timer = setTimeout(() => {
              target.classList.add("is-settled");
              if (target.style.transitionDelay) {
                target.style.transitionDelay = "";
              }
            }, 900);
            settleTimers.push(timer);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    // Parallax shapes & Scroll-Velocity Kinetic Ticker
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const tickerEls = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-ticker")
    );

    let lastScrollY = window.scrollY;
    let ticking = false;
    let decayTimer: ReturnType<typeof setTimeout> | null = null;

    const setTickerRate = (rate: number) => {
      tickerEls.forEach((el) => {
        const anims = el.getAnimations?.();
        if (anims && anims.length > 0) {
          anims.forEach((anim) => {
            anim.playbackRate = rate;
          });
        }
      });
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = Math.abs(currentY - lastScrollY);
        lastScrollY = currentY;

        // 1. Subtle micro-parallax for floating Neubrutalist corner blocks
        const viewportH = window.innerHeight;
        parallaxEls.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom >= -120 && rect.top <= viewportH + 120) {
            const speed = parseFloat(el.dataset.parallax || "0.12");
            const centerOffset = rect.top - viewportH * 0.5;
            const shiftY = Math.max(Math.min(centerOffset * speed, 28), -28);
            el.style.translate = `0px ${shiftY.toFixed(1)}px`;
          }
        });

        // 2. Kinetic marquee speed boost based on scroll velocity
        if (delta > 2 && tickerEls.length > 0) {
          const boost = Math.min(1 + delta * 0.045, 2.5);
          setTickerRate(boost);
          if (decayTimer) clearTimeout(decayTimer);
          decayTimer = setTimeout(() => {
            setTickerRate(1);
          }, 180);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (decayTimer) clearTimeout(decayTimer);
      settleTimers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return null;
}

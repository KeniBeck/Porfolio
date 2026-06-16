import { useEffect, useRef, type RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
}

export function useScrollAnimation(
  sectionRef: RefObject<HTMLElement | null>,
  runAnimation: (section: HTMLElement) => void,
  setupInitialStyles?: (section: HTMLElement) => void,
  options: ScrollAnimationOptions = {},
) {
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    setupInitialStyles?.(section);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            runAnimation(section);
          }
        });
      },
      { threshold: options.threshold ?? 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef, runAnimation, setupInitialStyles, options.threshold]);
}

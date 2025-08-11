'use client'

import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterProps {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
}

export function useAnimatedCounter({ 
  end, 
  duration = 2000, 
  start = 0, 
  delay = 0 
}: UseAnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;
      const totalDuration = duration;

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(startValue + (endValue - startValue) * easeOutCubic);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, end, start, duration, delay]);

  return { count, ref };
}

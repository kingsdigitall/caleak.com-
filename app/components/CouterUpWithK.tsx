'use client'
import React, { useEffect, useRef, useState, useCallback } from "react";

interface CountUpProps {
  start?: number;
  end: number;
}

const CouterUpWithK: React.FC<CountUpProps> = ({ start = 0, end }) => {
  const [value, setValue] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const counter = (end - start) / 200;
  
  const startRef = useRef(start);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isCompleteRef = useRef(false);

  const Count = useCallback(() => {
    // Stop if already complete
    if (isCompleteRef.current) return;
    
    let currentStart = startRef.current;
    if (ref.current && ref.current.getBoundingClientRect().top < window.innerHeight) {
      const result: number = Math.ceil(currentStart + counter);
      if (result >= end) {
        setValue(end);
        isCompleteRef.current = true;
        return; // Stop the loop when complete
      }
      setValue(result);
      startRef.current = result;
    }
    // Only schedule next tick if not complete
    if (!isCompleteRef.current) {
      timeoutRef.current = setTimeout(Count, 70);
    }
  }, [counter, end]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isCompleteRef.current) {
        Count();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Clean up timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      observer.disconnect();
    };
  }, [Count]);

  return (
    <div className="" ref={ref}>
      <p className="text-4xl ">{value}K+</p>
    </div>
  );
};

export default CouterUpWithK;

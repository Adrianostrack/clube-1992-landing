"use client";

import { useState, useEffect, useRef } from "react";

type CounterProps = {
  text: string;
  countN: number;
  duration?: number;
  divStyle?: string;
  textStyle1?: string;
  textStyle2?: string;
};

const Counter: React.FC<CounterProps> = ({
  text,
  countN,
  duration = 2,
  divStyle,
  textStyle1,
  textStyle2,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (counterRef.current) {
        const top = counterRef.current.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight && top > 0 && !started) {
          setStarted(true);
        }

        if (top > screenHeight || top < 0) {
          setStarted(false);
          setCount(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [started]);

  useEffect(() => {
    if (started && count < countN) {
      const totalTime = duration * 1000;
      const incrementTime = totalTime / countN;
      const timer = setTimeout(() => {
        setCount((prevCount) => Math.min(prevCount + 1, countN));
      }, incrementTime);
      return () => clearTimeout(timer);
    }
  }, [count, started, duration, countN]);

  return (
    <div ref={counterRef} className={`text-center ${divStyle}`}>
      <p className={`font-bold ${textStyle1}`}>+{count}</p>
      <p className={`text-xl ${textStyle2}`}>{text}</p>
    </div>
  );
};

export default Counter;

"use client"
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const words = [
  "Hello",       // English
  "नमस्ते",     // Hindi
  "नमस्कार",     // Marathi
  "নমস্কার",   // Kannada
  "Hola",        // Spanish
  "Привет",      // Russian
  "Bonjour",     // French
  "Hallo",       // German
];

const Hello = ({ onFinish }: { onFinish: () => void }) => {
  const [index, setIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const snapRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Intro
    tl.call(() => setIndex(0))
    .fromTo(
      snapRef.current,
      { scale: 1 },
      { scale: 1, duration: 0.6 }
    ).fromTo(
      helloRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 },
      "<"
    );

    // Cycle languages
    words.slice(1).forEach((word, i) => {
      tl.to(helloRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.2,
        ease: "power1.in"
      })
      .call(() => setIndex(i + 1)) // ✅ fixed index
      .to(helloRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.15,
        ease: "power1.out"
      });
    });

    // Slide up overlay
    tl.to({}, { duration: 0.3 })
      .to(wrapRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => onFinish?.(),
      });

    return () => tl.kill();
  }, [onFinish]);

  return (
    <main
      ref={wrapRef}
      className="welcome-screen flex items-center justify-center min-h-screen bg-black absolute inset-0 z-50"
    >
      {/* Snap background */}
      <div
        ref={snapRef}
        className="sedgwick lg:text-[510px] text-[220px] leading-none text-[#2c2c2c]"
      >
        Snap
      </div>

      {/* Hello centered */}
      <div
        ref={helloRef}
        className="absolute fredoka  text-[120px]  leading-none text-white"
      >
        {index >= 0 ? words[index] : ""}
      </div>
    </main>
  );
};

export default Hello;

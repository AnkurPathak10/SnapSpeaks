"use client"
import React, { useEffect, useRef, useState } from "react";
import bulletedList from "../static/bulletedList.png";
import dateTo from "../static/dateTo.png";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import { HERO_SERVICES } from "../constants";
import { NavbarMenu } from "./NavbarMenu";
import ScheduleCallModal from "./ScheduleCallModal";

export const Hero = () => {

  const wordRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!wordRef.current) return;
    if (!containerRef.current) return;

    const words = [ "Profits", "Reality", "Success"]; // cycle words
    let currentWordIndex = 0;

    // Split the first word
    let split = new SplitType(wordRef.current, { types: "chars" });

    const animateWord = () => {
      if (!split.chars) return;
      // Animate out (letters disappearing from END to START)
      gsap.to([...split.chars!].reverse(), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.4,
        onComplete: () => {
          split.revert(); // cleanup split BEFORE changing word
          // Update word
          currentWordIndex = (currentWordIndex + 1) % words.length;
          wordRef.current!.textContent = words[currentWordIndex];

          // Re-split new word
          split = new SplitType(wordRef.current!, { types: "chars" });
          if (!split.chars) return;
          
          // Animate in (letters appearing START to END)
          gsap.fromTo(
            split.chars,
            { opacity: 0, y: -30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              duration: 0.4,
              onComplete: () => {
                // Wait a bit then start again
                setTimeout(animateWord, 1000);
              },
            }
          );
        },
      });
    };

    // Start loop
    setTimeout(animateWord, 1500);

    const items = containerRef.current.querySelectorAll("p");
    if (items.length === 0) return;

    const heading = items[0]; // yellow main heading
    const services = Array.from(items).slice(1); // the rest

    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

    // Animate heading: from above with fade-in
    tl.from(heading, {
      y: -50,
      opacity: 0,
      delay: 4.25,
    });

    // Animate services: from below, staggered
    tl.from(
      services,
      {
        x: 40,
        opacity: 0,
        stagger: 0.4,
        delay:0.5,
      },
      "-=0.3" // overlap a bit with heading for smoothness
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="hero">
      <div className="overlap-group-wrapper">
        <div className="overlap-group -translate-y-12">
          {/* SNAP watermark in the back */}
          <div className="text-wrapper-2 z-0">Snap</div>
          <div className="flex flex-col -top-1/8 justify-center items-center relative z-10 pt-8 -translate-y-10">
            <Image src="/logo.png" alt="logo" className="w-[650px] translate-y-25 lg:translate-y-5" height={750} width={750}/>
            <h1 className="text-5xl lg:text-8xl  pt-4 font-semibold text-center -translate-y-13 lg:-translate-y-50 font-ibm !relative !m-0  leading-tight">
               Turning Vision into {" "}
               <span ref={wordRef} className="text-yellow-400">
                Reality
               </span>
            </h1>
            <div ref={containerRef} className="text-center z-10 pt-8">
              {HERO_SERVICES.map((service, index) => (
                <p
                  key={index}
                  className={`${
                    index === 0 
                      ? "text-yellow-400 font-bold font-ibm p-6 text-2xl lg:text-5xl md:text-4xl"
                      : "text-white flex justify-start pl-4 md:pl-10 lg:pl-20 pb-2 text-left font-ibm font-semibold text-xl lg:text-2xl"
                  }`}
                >
                  {index !== 0 && "🌟"}{service}
                </p>
              ))}
            </div>
          </div>

          
          

          {/* Buttons */}
          <div
            className="call-button cursor-pointer translate-y-12"
            onClick={() => {
              console.log("Button clicked!");
              setIsModalOpen(true);
            }}
          >

              <div className="text-wrapper cursor-pointer">Schedule a call</div>
              <Image className="date-to" alt="Date to" src={dateTo} />
          </div>

          {/* Modal */}
          <ScheduleCallModal
            isOpen={isModalOpen}
             onClose={() => setIsModalOpen(false)}
           />

          {/* Navigation Menu */}
          <div className="absolute z-50 -translate-y-266 hidden lg:block translate-x-145">
            <NavbarMenu/>
          </div>
          

          <div className="menu-button cursor-pointer translate-y-12">
            <Image className="bulleted-list" alt="Bulleted list" src={bulletedList} />
            <div className="div cursor-pointer">Go to menu</div>
          </div>

        </div>
      </div>
    </div>
  );
};

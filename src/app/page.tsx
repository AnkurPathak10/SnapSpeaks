"use client"
import React, { useState, useEffect } from "react";
import Hello from "./components/Hello";
import { Hero } from "./components/Hero";
import Works from "./components/Works";
import "./globals.css";

const Home = () => {
  const [showHello, setShowHello] = useState(true);

  // ✅ Lock scroll only while Hello is shown
  useEffect(() => {
    if (showHello) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [showHello]);

  const handleFinish = () => {
    setShowHello(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero is always present */}
      <Hero/>

      <section id="works" className="relative z-10 bg-grey-900">
        <Works />
      </section>

      {showHello && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <Hello onFinish={handleFinish} />
        </div>
      )}
    </div>
  );
};

export default Home;

"use client";

import { useState, useEffect } from "react";
import { Apple, PlayCircle } from "lucide-react";

const slides = [
  { image: "/onboarding.jpg", label: "Quick Onboarding" },
  { image: "/jobs.jpg", label: "Browse Local Shifts" },
  { image: "/jobdetail.jpg", label: "Apply in Seconds" },
  { image: "/chat.jpg", label: "Chat with Employers" },
  { image: "/applied.jpg", label: "Track Applications" },
  { image: "/notifications.jpg", label: "Stay Notified" },
  { image: "/profile.jpg", label: "Manage Your Profile" },
];

export const AppBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 border border-blue-400/30 rounded-full px-4 py-1 mb-6">
            GET THE APP
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Your next shift is a{" "}
            <span className="text-blue-400">tap away</span>
          </h2>

          <p className="text-slate-300 text-lg mb-8 max-w-md">
            Browse local shifts, apply in seconds, and get paid fast — all from
            the Gig Force app. Set your availability, track every application,
            and manage your profile on the go.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-3 border border-slate-600 rounded-xl px-5 py-3 hover:border-blue-400 transition-colors"
            >
              <Apple className="text-white" size={28} />
              <div>
                <div className="text-[10px] text-slate-400">
                  Download on the
                </div>
                <div className="text-white font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 border border-slate-600 rounded-xl px-5 py-3 hover:border-blue-400 transition-colors"
            >
              <PlayCircle className="text-blue-400" size={28} />
              <div>
                <div className="text-[10px] text-slate-400">Get it on</div>
                <div className="text-white font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
            <div className="border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">2,000+</div>
              <div className="text-xs text-slate-400 mt-1">Contractors</div>
            </div>

            <div className="border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-xs text-slate-400 mt-1">Jobs Posted</div>
            </div>

            <div className="border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">4.8★</div>
              <div className="text-xs text-slate-400 mt-1">
                Average Rating
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[580px] rounded-[2.5rem] border-8 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />

            {/* Screenshots */}
            <div className="relative w-full h-full">
              {slides.map((slide, i) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? "w-6 h-2 bg-blue-500"
                      : "w-2 h-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* Current Label */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full z-20">
              {slides[index].label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
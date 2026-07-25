"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  UserPlus,
  Search,
  Send,
  Wallet,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Content + design tokens                                            */
/* ------------------------------------------------------------------ */

const STEP_DURATION = 3200; // ms an auto-playing step stays active

const steps = [
  {
    key: "onboarding",
    icon: UserPlus,
    label: "Get Started",
    eyebrow: "STEP 01",
    title: "Create Your Profile",
    description:
      "Sign up in minutes, verify your details, and build a profile that shows employers what you bring to the job.",
    chips: ["2-minute setup", "ID verification", "Always free"],
    accent: "#5b9dff",
    accentSoft: "rgba(91,157,255,0.14)",
    image: "/onboarding.jpg",
  },
  {
    key: "browse",
    icon: Search,
    label: "Discover",
    eyebrow: "STEP 02",
    title: "Browse Local Shifts",
    description:
      "Explore open shifts near you, filter by pay, schedule, and location, and find the ones that fit your life.",
    chips: ["Real-time listings", "Pay & distance filters"],
    accent: "#22d3ee",
    accentSoft: "rgba(34,211,238,0.14)",
    image: "/jobs.jpg",
  },
  {
    key: "apply",
    icon: Send,
    label: "Apply",
    eyebrow: "STEP 03",
    title: "Easy Apply",
    description:
      "Review the details and submit your application straight from the app.",
    chips: ["No paperwork", "Instant submit"],
    accent: "#a78bfa",
    accentSoft: "rgba(167,139,250,0.14)",
    image: "/jobdetail.jpg",
  },
  {
    key: "track",
    icon: Wallet,
    label: "Track",
    eyebrow: "STEP 04",
    title: "Track Applied Jobs",
    description:
      "Keep an eye on every job you've applied to, check your application status, and stay on top of what's next — all in one place.",
    chips: ["Live status updates", "One-tap history"],
    accent: "#34d399",
    accentSoft: "rgba(52,211,153,0.14)",
    image: "/applied.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const goTo = useCallback((i) => {
    setActive(i);
    setProgress(0);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (paused) return;
    const tickMs = 30;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (tickMs / STEP_DURATION) * 100;
        if (next >= 100) {
          setActive((a) => (a + 1) % steps.length);
          return 0;
        }
        return next;
      });
    }, tickMs);
    return () => clearInterval(id);
  }, [paused]);

  // Scroll-triggered entrance
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const current = steps[active];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{ position: "relative", overflow: "hidden", background: "#060b16", padding: "56px 0" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseGlow { 0%,100% { opacity: 0.18; } 50% { opacity: 0.32; } }
        @media (prefers-reduced-motion: reduce) {
          .hiw-root * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="hiw-root">
        {/* Ambient glow, tinted per active step */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-10%",
            left: "-8%",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: current.accent,
            filter: "blur(100px)",
            opacity: 0.18,
            transition: "background 700ms ease",
            animation: "pulseGlow 6s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Grid backdrop */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "0 24px", fontFamily: "'Inter', sans-serif" }}>
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              maxWidth: 560,
              margin: "0 auto 36px",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeInUp 600ms cubic-bezier(0.2,0.8,0.2,1) both" : "none",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#93c5fd",
                border: "1px solid rgba(147,197,253,0.3)",
                borderRadius: 999,
                padding: "5px 12px",
                marginBottom: 14,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#34d399", animation: "pulseGlow 1.8s ease-in-out infinite" }} />
              THE JOURNEY, LIVE
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.15,
                margin: "0 0 10px",
              }}
            >
              From sign-up to{" "}
              <span style={{ color: current.accent, transition: "color 500ms ease" }}>your first shift</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.5, margin: 0 }}>
              Getting started with GigForce takes minutes — here's how it works.
            </p>
          </div>

          {/* Journey rail */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
              gap: 8,
              marginBottom: 28,
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeInUp 600ms cubic-bezier(0.2,0.8,0.2,1) 100ms both" : "none",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {steps.map((s, i) => {
              const Icon = s.icon;
              const done = i < active;
              const isActive = i === active;
              const fill = done ? 100 : isActive ? progress : 0;
              return (
                <button
                  key={s.key}
                  onClick={() => goTo(i)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 7,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: isActive ? s.accent : done ? s.accentSoft : "rgba(255,255,255,0.06)",
                        color: isActive ? "#0a1628" : done ? s.accent : "#64748b",
                        transform: isActive ? "scale(1.06)" : "scale(1)",
                        boxShadow: isActive ? `0 0 0 4px ${s.accentSoft}` : "none",
                        transition: "all 400ms cubic-bezier(0.2,0.8,0.2,1)",
                      }}
                    >
                      <Icon size={12} />
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: isActive ? "#fff" : "#64748b",
                        transition: "color 400ms ease",
                      }}
                    >
                      {s.label.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ width: "100%", height: 2, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${fill}%`,
                        background: s.accent,
                        borderRadius: 999,
                        transition: isActive ? "none" : "width 400ms ease",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage: phone + content */}
          <div
            className="grid md:grid-cols-2"
            style={{ display: "grid", gap: 40, alignItems: "center" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Phone mockup with real screenshots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                order: 2,
                opacity: visible ? 1 : 0,
                animation: visible ? "fadeInUp 600ms cubic-bezier(0.2,0.8,0.2,1) 150ms both" : "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 200,
                  height: 412,
                  borderRadius: "1.8rem",
                  border: "6px solid #17233a",
                  background: "#0d1524",
                  boxShadow: `0 20px 40px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 50px -12px ${current.accent}55`,
                  overflow: "hidden",
                  transition: "box-shadow 700ms ease",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 88,
                    height: 16,
                    background: "#17233a",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    zIndex: 10,
                  }}
                />
                <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
                  <div
                    style={{
                      display: "flex",
                      width: `${steps.length * 100}%`,
                      height: "100%",
                      transform: `translateX(-${active * (100 / steps.length)}%)`,
                      transition: "transform 350ms cubic-bezier(0.65,0,0.35,1)",
                    }}
                  >
                    {steps.map((s, i) => (
                      <div key={s.key} style={{ width: `${100 / steps.length}%`, height: "100%", flexShrink: 0 }}>
                        <img
                          src={s.image}
                          alt={s.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step detail panel */}
            <div style={{ order: 1 }}>
              <div key={active} style={{ animation: "fadeInUp 420ms cubic-bezier(0.2,0.8,0.2,1) both" }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: current.accent,
                    marginBottom: 8,
                    transition: "color 400ms ease",
                  }}
                >
                  {current.eyebrow}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  {current.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, margin: "0 0 16px" }}>
                  {current.description}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                  {current.chips.map((c) => (
                    <span
                      key={c}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#e2e8f0",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 999,
                        padding: "5px 10px",
                      }}
                    >
                      <Check size={11} color={current.accent} /> {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  onClick={() => goTo((active - 1 + steps.length) % steps.length)}
                  aria-label="Previous step"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={() => goTo((active + 1) % steps.length)}
                  aria-label="Next step"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronRight size={15} />
                </button>
                <span
                  style={{
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: 11,
                    color: "#475569",
                    marginLeft: 2,
                  }}
                >
                  0{active + 1} / 0{steps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
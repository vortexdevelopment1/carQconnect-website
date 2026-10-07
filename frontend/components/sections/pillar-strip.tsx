"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  QrCode,
  Satellite,
  Route,
  Sparkles,
  Wrench,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Maximize2,
  Zap,
  Lock,
  Cpu,
  Activity,
  ChevronRight,
  Info,
} from "lucide-react";

interface TelemetryMetric {
  label: string;
  value: string;
  sub: string;
}

interface TechSpec {
  label: string;
  value: string;
}

interface PillarItem {
  id: string;
  index: string;
  icon: any;
  category: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  href: string;
  accentColor: string;
  glowColor: string;
  metrics: TelemetryMetric[];
  features: string[];
  techSpecs: TechSpec[];
}

const pillars: PillarItem[] = [
  {
    id: "qr-safety",
    index: "01",
    icon: QrCode,
    category: "DIGITAL IDENTITY",
    badge: "100% Number Masked",
    title: "QR Safety & Emergency Tag",
    tagline: "Your vehicle gets an instant digital safety identity.",
    description:
      "Instant emergency alerts, parking issue notifications, and secure owner contact without revealing your personal phone number.",
    fullDescription:
      "carQconnect QR Safety equips your vehicle with a weatherproof, UV-resistant smart QR tag. Anyone scanning your tag can instantly notify you regarding parking conflicts, emergency medical response, or vehicle towing without ever seeing your private phone number. Integrated with automatic escalation tree to reach family or emergency services if you do not respond.",
    image: "/images/qr_safety.jpg",
    href: "/qr-safety",
    accentColor: "from-orange-500 to-amber-500",
    glowColor: "rgba(255, 77, 0, 0.25)",
    metrics: [
      { label: "Scan Response", value: "< 0.2s", sub: "Ultra-fast Web Relay" },
      { label: "Phone Privacy", value: "100%", sub: "Zero Number Exposure" },
      { label: "Emergency Alert", value: "24/7", sub: "Multi-Contact Tree" },
    ],
    features: [
      "Privacy-protected QR code tag for windshield & bumper",
      "1-tap parking notification & emergency owner calls",
      "Cloud-encrypted medical & emergency profile access",
      "Automated SMS & IVR voice call alert system",
    ],
    techSpecs: [
      { label: "Security Protocol", value: "256-Bit Encrypted Relay" },
      { label: "Tag Durability", value: "IP68 UV-Resistant Acrylic" },
      { label: "Response Time", value: "Real-time WebSocket Push" },
    ],
  },
  {
    id: "gps-tracking",
    index: "02",
    icon: Satellite,
    category: "LIVE TELEMETRY",
    badge: "Satellite Connected",
    title: "GPS Tracking & Anti-Theft Guard",
    tagline: "Continuous real-time satellite tracking and vehicle telemetry.",
    description:
      "Real-time satellite tracking, live speed telemetry, automated geofence alerts, and anti-theft monitoring available 24/7.",
    fullDescription:
      "Stay connected to your vehicle from anywhere in the world. carQconnect GPS provides pinpoint 24/7 location precision, live speed diagnostics, automated geofencing boundaries, and theft prevention alerts directly to your smartphone. Review historic trip playback with full velocity logs and engine state telemetry.",
    image: "/images/gps_tracking.jpg",
    href: "/gps",
    accentColor: "from-blue-500 to-cyan-500",
    glowColor: "rgba(23, 137, 255, 0.25)",
    metrics: [
      { label: "Location Accuracy", value: "99.9%", sub: "Multi-GNSS Precision" },
      { label: "Refresh Rate", value: "5 sec", sub: "Live Telemetry Feed" },
      { label: "Geofence Guard", value: "Instant", sub: "Mobile Push & Alert" },
    ],
    features: [
      "Real-time 24/7 satellite vehicle location tracking",
      "Customizable circular & polygonal geofence alerts",
      "High-speed, harsh braking & towing detection",
      "Full historical trip playback & distance analytics",
    ],
    techSpecs: [
      { label: "GPS Module", value: "High Sensitivity Multi-GNSS" },
      { label: "Data Backup", value: "Internal Storage for Offline Logs" },
      { label: "Alert Latency", value: "< 1.5 Seconds" },
    ],
  },
  {
    id: "smart-trips",
    index: "03",
    icon: Route,
    category: "ROUTE INTELLIGENCE",
    badge: "AI Fuel & Toll Engine",
    title: "Smart Trips & Toll Intelligence",
    tagline: "Predictive routing, toll estimation, and trip analytics.",
    description:
      "Calculate exact trip costs including tolls and fuel, optimize routes automatically, and track driving efficiency analytics.",
    fullDescription:
      "Plan smarter highway and city journeys with carQconnect Smart Trips. Automatically calculate exact national toll booth costs, predict fuel consumption based on your vehicle's specs, and receive optimal routes tailored to avoid congestion and heavy toll charges. Track trip costs line-by-line and share reports easily.",
    image: "/images/smart_trips.jpg",
    href: "/trip-intelligence",
    accentColor: "from-emerald-500 to-teal-500",
    glowColor: "rgba(18, 183, 106, 0.25)",
    metrics: [
      { label: "Toll Estimation", value: "100%", sub: "Live Toll Database" },
      { label: "Fuel Saved", value: "~15%", sub: "Eco Route Optimizer" },
      { label: "Trip Reports", value: "Automated", sub: "Export PDF / CSV" },
    ],
    features: [
      "Live toll booth cost calculation across all highways",
      "Real-time fuel expenditure prediction & tracking",
      "Eco-route engine for optimal speed & mileage efficiency",
      "Group trip cost splitter and driver log generator",
    ],
    techSpecs: [
      { label: "Toll Engine", value: "NHAI / FASTag API Integration" },
      { label: "Route Optimizer", value: "Real-time Traffic AI" },
      { label: "Cost Calculation", value: "Dynamic Vehicle Spec Matrix" },
    ],
  },
  {
    id: "ai-assistant",
    index: "04",
    icon: Sparkles,
    category: "NATURAL AI COPILOT",
    badge: "Voice & Chat AI",
    title: "Conversational AI Assistant",
    tagline: "Natural voice & text copilot for vehicle management.",
    description:
      "Conversational voice and text assistant that understands natural questions about your car, trip budgets, and vehicle support.",
    fullDescription:
      "Ask carQconnect anything about your vehicle in plain English or Hindi. Whether you want to check when your insurance expires, analyze your monthly fuel bill, ask for nearest service garages, or troubleshoot dash warning lights, carQconnect's AI copilot provides instant, accurate answers 24/7.",
    image: "/images/ai_assistant.jpg",
    href: "/features",
    accentColor: "from-purple-500 to-indigo-500",
    glowColor: "rgba(168, 85, 247, 0.25)",
    metrics: [
      { label: "Voice Latency", value: "< 0.8s", sub: "Natural Speech Engine" },
      { label: "Language Support", value: "Bilingual", sub: "English & Hindi AI" },
      { label: "Diagnostics", value: "Instant", sub: "Warning Light Resolver" },
    ],
    features: [
      "Natural language voice & chat queries for all car functions",
      "Instant trip budget & FASTag balance inquiries",
      "Warning light & basic vehicle diagnostic guidance",
      "24/7 automated assistant with seamless human support escalation",
    ],
    techSpecs: [
      { label: "AI Architecture", value: "Custom Automotive LLM Engine" },
      { label: "Voice Recognition", value: "Low-Latency Neural Speech" },
      { label: "Context Window", value: "Full Vehicle History Memory" },
    ],
  },
  {
    id: "vehicle-utilities",
    index: "05",
    icon: Wrench,
    category: "DIGITAL AUTO WALLET",
    badge: "Centralized Vault",
    title: "Vehicle Utilities & FASTag Vault",
    tagline: "Centralized document locker, FASTag recharge, and reminders.",
    description:
      "Keep digital RC, insurance, PUC expiry alerts, FASTag balance top-ups, and service logs centralized in one mobile wallet.",
    fullDescription:
      "Never miss a document expiry or get stuck with a low FASTag balance again. carQconnect Vehicle Utilities serves as your digital auto wallet: instantly recharge FASTag, securely lock digital RC and Insurance copies, and set automated notifications for PUC renewals and routine maintenance.",
    image: "/images/vehicle_utilities.jpg",
    href: "/vehicle-utilities",
    accentColor: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.25)",
    metrics: [
      { label: "FASTag Top-up", value: "1-Tap", sub: "Instant Balance Sync" },
      { label: "Doc Storage", value: "AES-256", sub: "Encrypted Cloud Vault" },
      { label: "Reminders", value: "Automated", sub: "PUC, Insurance & Service" },
    ],
    features: [
      "Instant FASTag recharge with low-balance warning alerts",
      "Encrypted digital locker for RC, Insurance, and PUC certificates",
      "Automated expiry notifications via SMS, WhatsApp, and App push",
      "Centralized maintenance schedule & expense ledger",
    ],
    techSpecs: [
      { label: "Vault Encryption", value: "Bank-Grade AES-256 Cloud Vault" },
      { label: "Payment Gateway", value: "BBPS & UPI Instant Settlement" },
      { label: "Reminder Engine", value: "Multi-Channel Automated Alerts" },
    ],
  },
];

export function PillarStrip() {
  const [activeId, setActiveId] = useState<string>("qr-safety");
  const [selectedModalPillar, setSelectedModalPillar] = useState<PillarItem | null>(null);

  const activePillar = pillars.find((p) => p.id === activeId) || pillars[0];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedModalPillar(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f4f5] via-[#e9eaeb] to-[#dedfe1] text-neutral-900 py-24 md:py-32 border-y border-black/10">
      {/* Background Ambient Light Gradients (No Blue) */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-10" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#ff4d00]/10 via-white/60 to-amber-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#ff4d00]/08 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/70 blur-[120px]" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ff4d00] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
            </span>
            <span>Smart Systems, Smooth Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl font-display"
          >
            Smart Systems.{" "}
            <span className="bg-gradient-to-r from-[#ff4d00] via-neutral-800 to-neutral-700 bg-clip-text text-transparent">
              Smooth Journey.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Explore carQconnect&apos;s 5 interconnected platform pillars. Designed to safeguard your car, track every telemetry point, and deliver confidence on every drive.
          </motion.p>
        </div>

        {/* System Navigation Tabs (Lightship RV Style Rail) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-xl max-w-5xl mx-auto"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeId === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-white bg-[#ff4d00] shadow-[0_4px_20px_rgba(255,77,0,0.35)]"
                    : "text-neutral-600 hover:text-black hover:bg-black/5"
                }`}
              >
                <span className={`text-[10px] font-mono tracking-wider ${isActive ? "text-white/80" : "text-neutral-400"}`}>
                  {pillar.index}
                </span>
                <Icon className="h-4 w-4 shrink-0" />
                <span>{pillar.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Master Showcase Display (Active Selected Pillar) */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-center">
          {/* Main Visual Display Card (Clickable to open details modal) */}
          <motion.div
            key={activePillar.id + "-image"}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 relative group cursor-pointer"
            onClick={() => setSelectedModalPillar(activePillar)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 group-hover:border-[#ff4d00]/50 group-hover:shadow-[0_10px_35px_rgba(255,77,0,0.25)]">
              {/* Image Aspect Ratio Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={activePillar.image}
                  alt={activePillar.title}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Lightship Style Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
                    {activePillar.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-[#ff4d00]/20 px-3 py-1 text-xs font-medium text-[#ff4d00] backdrop-blur-md">
                    {activePillar.badge}
                  </span>
                </div>

                {/* Expand Trigger Hover Hint */}
                <div className="absolute right-5 top-5 z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] group-hover:scale-105">
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>Click for Details</span>
                  </span>
                </div>

                {/* Overlay Bottom Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                    {activePillar.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-[#ff4d00]">
                    {activePillar.tagline}
                  </p>

                  {/* Telemetry Metrics Strip inside Image */}
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-4">
                    {activePillar.metrics.map((m, idx) => (
                      <div key={idx} className="bg-black/50 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/10">
                        <p className="text-[10px] sm:text-xs text-neutral-400 font-medium">{m.label}</p>
                        <p className="text-sm sm:text-lg font-bold text-white tracking-tight mt-0.5">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Active Pillar Details Side Panel */}
          <motion.div
            key={activePillar.id + "-details"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between h-full bg-white/70 border border-black/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff4d00] font-semibold">
                  System {activePillar.index} / 05
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                  <Activity className="h-3.5 w-3.5 text-emerald-600" />
                  Live Operational
                </span>
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight font-display">
                {activePillar.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
                {activePillar.description}
              </p>

              {/* Key Features List */}
              <div className="mt-6 space-y-2.5 border-t border-black/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Key Capabilities
                </p>
                {activePillar.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="h-4 w-4 text-[#ff4d00] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setSelectedModalPillar(activePillar)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff4d00] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(255,77,0,0.35)] transition-all duration-300 hover:bg-[#e04400] hover:shadow-[0_6px_25px_rgba(255,77,0,0.5)]"
              >
                <Maximize2 className="h-4 w-4" />
                <span>Open Full Description</span>
              </button>

              <Link
                href={activePillar.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 bg-black/5 px-5 py-3 text-sm font-semibold text-neutral-900 backdrop-blur-md transition-all duration-300 hover:bg-black/10 hover:border-black/30"
              >
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 5 Cards Gallery Grid (Clicking ANY card opens its Description Modal) */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-black/10 pb-6 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display">
                All Connected Systems
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600">
                Click on any card or picture to expand complete specifications and technical documentation.
              </p>
            </div>
            <span className="text-xs font-mono text-[#ff4d00] bg-[#ff4d00]/10 border border-[#ff4d00]/20 px-3 py-1.5 rounded-full font-semibold">
              Interactive Card Deck
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              const isCurrentActive = activeId === item.id;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setActiveId(item.id);
                    setSelectedModalPillar(item);
                  }}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between p-6 ${
                    isCurrentActive
                      ? "border-[#ff4d00] bg-white shadow-[0_10px_30px_rgba(255,77,0,0.15)]"
                      : "border-black/10 bg-white/70 hover:border-black/30 hover:bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Subtle Accent Glow */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: item.glowColor }}
                  />

                  <div>
                    {/* Thumbnail Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                      {/* Floating Badge */}
                      <div className="absolute left-3 top-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                          <Icon className="h-3 w-3 text-[#ff4d00]" />
                          {item.badge}
                        </span>
                      </div>

                      {/* Expand Button Overlay */}
                      <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#ff4d00] px-3 py-1 text-[11px] font-semibold text-white shadow-lg">
                          <Maximize2 className="h-3 w-3" />
                          <span>Expand</span>
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4d00] font-semibold">
                          Pillar {item.index}
                        </span>
                        <span className="text-[11px] text-neutral-500 font-medium">
                          {item.metrics[0].value} {item.metrics[0].label}
                        </span>
                      </div>

                      <h4 className="mt-2 text-xl font-bold text-neutral-900 tracking-tight group-hover:text-[#ff4d00] transition-colors font-display">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-semibold text-neutral-700 group-hover:text-black transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Info className="h-3.5 w-3.5 text-[#ff4d00]" />
                      Click for full description
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#ff4d00] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FULL DESCRIPTION MODAL DIALOG (Lightship RV Detailed Breakdown) */}
      <AnimatePresence>
        {selectedModalPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalPillar(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Window Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl rounded-3xl border border-black/10 bg-neutral-900 text-white shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalPillar(null)}
                className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-black/60 p-2.5 text-neutral-300 transition-all hover:bg-white hover:text-black hover:scale-110"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 md:p-10">
                {/* Modal Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/15 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#ff4d00]">
                    {selectedModalPillar.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                    System {selectedModalPillar.index} of 05
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                  {selectedModalPillar.title}
                </h3>
                <p className="mt-2 text-base sm:text-lg font-semibold text-[#ff4d00]">
                  {selectedModalPillar.tagline}
                </p>

                {/* Modal Body Layout */}
                <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
                  {/* Image Column */}
                  <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={selectedModalPillar.image}
                        alt={selectedModalPillar.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    {/* Quick Metric Bar */}
                    <div className="p-4 bg-black/80 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                      {selectedModalPillar.metrics.map((m, i) => (
                        <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5">
                          <p className="text-[10px] text-neutral-400 font-medium">{m.label}</p>
                          <p className="text-sm sm:text-base font-bold text-white mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description & Technical Breakdown */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        Detailed System Overview
                      </h4>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-neutral-200">
                        {selectedModalPillar.fullDescription}
                      </p>
                    </div>

                    {/* Capabilities Bullet Points */}
                    <div className="border-t border-white/10 pt-5">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff4d00] mb-3">
                        Core Platform Capabilities
                      </h4>
                      <div className="space-y-2.5">
                        {selectedModalPillar.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                            <CheckCircle2 className="h-4 w-4 text-[#ff4d00] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="border-t border-white/10 pt-5">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-[#ff4d00]" />
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {selectedModalPillar.techSpecs.map((spec, sIdx) => (
                          <div key={sIdx} className="bg-white/5 rounded-xl p-3 border border-white/5">
                            <span className="text-neutral-400 block text-[10px]">{spec.label}</span>
                            <span className="text-white font-semibold mt-0.5 block">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <Lock className="h-4 w-4 text-emerald-400" />
                    <span>Hardware-grade encryption & live cloud synchronization included.</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedModalPillar(null)}
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      Close Window
                    </button>
                    <Link
                      href={selectedModalPillar.href}
                      onClick={() => setSelectedModalPillar(null)}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff4d00] px-6 py-2.5 text-xs font-semibold text-white shadow-[0_0_25px_rgba(255,77,0,0.4)] transition-all hover:bg-[#e04400]"
                    >
                      <span>Explore Dedicated Feature Page</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

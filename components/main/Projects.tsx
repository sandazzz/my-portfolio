"use client";
import React from "react";
import { AnimatedPinDemo } from "@/components/ui/3DPin";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden">
      <div>
        <h1 className="text-white text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Projects
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <AnimatedPinDemo />
        <AnimatedPinDemo />
        <AnimatedPinDemo />
      </div>
    </section>
  );
}

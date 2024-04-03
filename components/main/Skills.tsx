"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { slideInFromLeft } from "@/utils/motion";

export default function skills({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        <motion.div
          initial="hidden"
          animate="visible"
          className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-md w-auto h-auto"
          >
            <h1>Skills</h1>
            <div className="flex">
              <div>
                <ul>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                  <li>aa</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

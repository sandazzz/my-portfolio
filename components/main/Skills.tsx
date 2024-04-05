"use client";
import { cn } from "@/utils/cn";
import Skill from "@/components/ui/Skill";
/*import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";*/

export default function Skills({ className }: { className?: string }) {
  const frontEndSkill = [
    { id: 1, skillName: "React" },
    { id: 2, skillName: "Vue.js" },
    { id: 3, skillName: "Tailwind" },
    { id: 4, skillName: "Typescript" },
  ];

  const backEndSkill = [
    { id: 1, skillName: "Nextjs" },
    { id: 4, skillName: "Fastify" },
    { id: 2, skillName: "Django" },
    { id: 3, skillName: "PHP" },
    { id: 5, skillName: "PostgreSQL" },
  ];

  const otherSkill = [
    { id: 5, skillName: "Figma" },
    { id: 1, skillName: "Git & Github" },
    { id: 3, skillName: "Vercel" },
    { id: 4, skillName: "Neon" },
  ];

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative z-50 flex md:-translate-y-80 flex-col items-center px-5 gap-11 text-white">
        <h1 className="text-5xl md:text-6xl font-bold">Skills</h1>
        <div className="flex flex-col md:flex-row justify-center  gap-8 md:gap-16">
          <Skill skillCategory={"Front-end"} listSkill={frontEndSkill} />
          <Skill skillCategory={"Back-end"} listSkill={backEndSkill} />
          <Skill skillCategory={"Other"} listSkill={otherSkill} />
        </div>
      </div>
    </div>
  );
}

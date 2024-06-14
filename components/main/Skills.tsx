import SkillinLine from "@/components/ui/Skill-in-Line";

export default async function Skills() {
  const frontEndSkill = [
    { id: 1, skillName: "React" },
    { id: 2, skillName: "Vue.js" },
    { id: 3, skillName: "Tailwind" },
    { id: 4, skillName: "Typescript" },
  ];

  const backEndSkill = [
    { id: 1, skillName: "Next.js" },
    { id: 2, skillName: "Fastify" },
    { id: 3, skillName: "Django" },
    { id: 4, skillName: "PHP" },
    { id: 5, skillName: "PostgreSQL" },
    { id: 6, skillName: "Prisma" },
  ];

  const otherSkill = [
    { id: 1, skillName: "Figma" },
    { id: 2, skillName: "Git & Github" },
    { id: 3, skillName: "Vercel" },
    { id: 4, skillName: "Neon" },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col justify-center gap-3 h-3/6 relative z-40 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-10 text-white">
        <h1 className="text-4xl">Skills</h1>
        <div className="flex flex-col justify-center gap-6">
          <SkillinLine skillCategory={"Front-end"} listSkill={frontEndSkill} />
          <SkillinLine skillCategory={"Back-end"} listSkill={backEndSkill} />
          <SkillinLine skillCategory={"Other"} listSkill={otherSkill} />
        </div>
      </div>
    </section>
  );
}

import SkillinLine from "@/components/ui/Skill-in-Line";

export default async function Skills() {
  const frontEndSkill = [
    { id: 1, skillName: "Nextjs" },
    { id: 2, skillName: "React" },
    { id: 3, skillName: "Vue.js" },
    { id: 4, skillName: "Tailwind" },
    { id: 5, skillName: "Typescript" },
  ];

  const backEndSkill = [
    { id: 1, skillName: "Fastify" },
    { id: 2, skillName: "Django" },
    { id: 3, skillName: "PHP" },
    { id: 4, skillName: "PostgreSQL" },
    { id: 5, skillName: "Prisma" },
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
      className="flex flex-col justify-center gap-3 min-h-screen relative z-40 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-10 text-white">
        <h1 className="text-5xl  font-bold">Skills</h1>
        <div className="flex flex-col justify-center gap-6">
          <SkillinLine skillCategory={"Front-end"} listSkill={frontEndSkill} />
          <SkillinLine skillCategory={"Back-end"} listSkill={backEndSkill} />
          <SkillinLine skillCategory={"Other"} listSkill={otherSkill} />
        </div>
      </div>
    </section>
  );
}

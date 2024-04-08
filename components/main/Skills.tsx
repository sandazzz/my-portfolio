import Skill from "@/components/ui/Skill";

export default async function Skills() {
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
    <section
      id="skills"
      className="flex flex-col justify-center gap-3 min-h-screen relative overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-20 text-white">
        <h1 className="text-5xl  font-bold">Skills</h1>
        <div className="flex flex-col md:flex-row justify-center  gap-8 md:gap-24">
          <Skill skillCategory={"Front-end"} listSkill={frontEndSkill} />
          <Skill skillCategory={"Back-end"} listSkill={backEndSkill} />
          <Skill skillCategory={"Other"} listSkill={otherSkill} />
        </div>
      </div>
    </section>
  );
}

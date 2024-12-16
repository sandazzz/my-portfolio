export default function Skills() {
  const frontEndSkill = [
    { id: 1, skillName: "Next.js (React)" },
    { id: 2, skillName: "Vue.js" },
    { id: 3, skillName: "Tailwind" },
    { id: 4, skillName: "Typescript" },
  ];

  const backEndSkill = [
    { id: 1, skillName: "Fastify" },
    { id: 2, skillName: "Laravel" },
    { id: 3, skillName: "PostgreSQL" },
    { id: 4, skillName: "Prisma" },
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
      className="flex flex-col justify-center items-center gap-8  text-white relative z-40 overflow-hidden "
    >
        <h1 className="text-transparent bg-clip-text bg-white text-4xl">
          Skills
        </h1>
        <div className="flex flex-col justify-center gap-8 w-full max-w-4xl">
          <SkillinLine skillCategory="Front-end" listSkill={frontEndSkill} />
          <SkillinLine skillCategory="Back-end" listSkill={backEndSkill} />
          <SkillinLine skillCategory="Other" listSkill={otherSkill} />
        </div>
    </section>
  );
}

export function SkillinLine({
  skillCategory,
  listSkill,
}: {
  skillCategory: string;
  listSkill: { id: number; skillName: string }[];
}) {
  return (
    <div className="px-6 py-4 border-b border-indigo-500 transition-all transform hover:border-indigo-300 hover:shadow-lg hover:animate-shrink">
      <h2 className="text-2xl font-semibold mb-2">{skillCategory}</h2>
      <div className="flex flex-wrap gap-3">
        {listSkill.map((item) => (
          <SkillCard key={item.id} skillName={item.skillName} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skillName }: { skillName: string }) {
  return <p className="text-white px-1">{skillName}</p>;
}

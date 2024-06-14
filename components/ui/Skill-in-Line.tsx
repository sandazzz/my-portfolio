export default async function SkillinLine({
  skillCategory,
  listSkill,
}: {
  skillCategory: string;
  listSkill: { id: number; skillName: string }[];
}) {
  return (
    <div className="mx-4 py-4 border-solid border-b-2 border-neutral-200">
      <h2 className="text-2xl">{skillCategory}</h2>
      <div className="flex flex-wrap justify-start">
        {listSkill.map((item) => (
          <p className="font-medium mr-4" key={item.id}>
            {item.skillName}
          </p>
        ))}
      </div>
    </div>
  );
}

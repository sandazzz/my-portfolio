export default function SkillColumn({
  skillCategory,
  listSkill,
}: {
  skillCategory: string;
  listSkill: { id: number; skillName: string }[];
}) {
  return (
    <div className="flex flex-col w-48 ">
      <div className="mb-4">
        <h2 className="font-bold text-3xl md:text-4xl md:text-center">{skillCategory}</h2>
      </div>
      <div>
        <ul>
          {listSkill.map((item) => (
            <li className="font-bold mb-1" key={item.id}>
              {item.skillName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

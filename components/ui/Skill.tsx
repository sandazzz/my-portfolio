export default function Skill({
  skillCategory,
  listSkill,
}: {
  skillCategory: string;
  listSkill: { id: number; skillName: string }[];
}) {
  return (
    <div className="flex flex-col ">
      <div className="mb-4">
        <h2 className="font-bold text-3xl md:text-4xl">{skillCategory}</h2>
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

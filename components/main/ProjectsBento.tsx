import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { cn } from "@/utils/cn";

const Skeleton1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
);

const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500"></div>
);

const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-gray-500 to-gray-700"></div>
);

export default async function ProjectsBento() {
  const items = [
    {
      title: "Next-Strix",
      href: "https://next-strix.vercel.app/",
      description:
        "An e-commerce web app build with Next js Stripe API and Vercel",
      header: <Skeleton1 />,
    },
    {
      title: "Ecochat-Generator",
      href: "https://ecochat-generator.vercel.app/",
      description:
        "A blog about the ecology combined with a chatbot. Built with Next js, Open AI API and Prisma. I'am still working on ...",
      header: <Skeleton2 />,
    },
    {
      title: "Githread",
      href: "https://githread-youtube-steel.vercel.app/",
      description:
        "A web app where you can make some post and log with your github account",
      header: <Skeleton3 />,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center gap-8 relative z-30"
    >
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl ">
        My projects
      </h1>
      <BentoGrid className="max-w-4xl mx-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            href={item.href}
            className={cn(i === 3 || i === 6 ? "md:col-span-2" : "", "")}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

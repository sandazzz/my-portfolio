import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  href?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          <a href={href} target={"_blank"} rel="projectlink">
            {title}
          </a>
        </div>
        <div className="font-sans font-bold text-sm text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          href={item.href}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

const items = [
  {
    title: "Next-Strix",
    href: "https://next-strix.vercel.app/",
    description:
      "An e-commerce web app build with Next js Stripe API and Vercel",
    header: <Skeleton />,
  },
  {
    title: "Ecochat-Generator",
    href: "https://ecochat-generator.vercel.app/",
    description:
      "A blog about the ecology combined with a chatbot. Built with Next js, Open AI API and Prisma. Still working on ...",
    header: <Skeleton />,
  },
  {
    title: "Next-Finance Viewer",
    href: "#projects",
    description:
      "A web app where you can check the stock market and check your wallet. Still working  on...",
    header: <Skeleton />,
  },
];

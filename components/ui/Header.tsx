import Link from "next/link";
export default async function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 px-3 bg-slate-950/[0.6] backdrop-blur-sm border-solid border-b-2 border-white/[0.1] flex justify-center items-center">
      <div className="flex justify-end items-center gap-12 w-full max-w-96 text-white">
        <Link href="#hero">0.About me </Link>
        <Link href="#skills">1.Skills</Link>
        <Link href="#projects">2.Projects</Link>
      </div>
    </header>
  );
}

import Link from "next/link";
export default async function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 px-4 bg-slate-950/[0.6] backdrop-blur-sm border-solid border-b-2 border-white/[0.1] ">
      <div className="w-full h-full flex flex-row justify-end	 items-center gap-4 text-white">
        <Link href="#hero">About me </Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </div>
    </header>
  );
}

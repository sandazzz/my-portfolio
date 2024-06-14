import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import ProjectsBento from "@/components/main/ProjectsBento"
import { BentoGridDemo } from "@/components/ui/bento-grid";

export default async function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Hero />
      <Skills />
      {/*<Projects />*/}
      <ProjectsBento/>
      {/*<BentoGridDemo/>*/}
    </main>
  );
}

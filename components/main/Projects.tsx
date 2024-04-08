import { AnimatedPinCard } from "@/components/ui/3DPin";

export default async function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden"
    >
      <div>
        <h1 className="text-white text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Projects
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <AnimatedPinCard
          title={"Next-Strix"}
          href={"next-strix.vercel.app "}
          projectName={"Next-Strix"}
          description={"An e-commerce web app build with Next js Stripe API and Vercel"}
        />
        <AnimatedPinCard
          title={"Ecochat-generator"}
          href={""}
          projectName={"Ecochat-generator"}
          description={"A blog about the ecology combined with a chatbot. Built with Next js, Open AI API and Daisy UI"}
        />
        <AnimatedPinCard
          title={"Next-Finance Viewer"}
          href={"building ..."}
          projectName={"Next-Finance Viewer"}
          description={"A web app where you can check the stock market and check your wallet. Still working  on..."}
        />
      </div>
    </section>
  );
}

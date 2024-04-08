import { LampContainer } from "../ui/Lamp";
import HeroContext from "@/components/sub/HeroContext";

export default async function Hero() {
  return (
    <section id="hero" className="min-h-screen">
      <LampContainer>
        <HeroContext />
      </LampContainer>
    </section>
  );
}

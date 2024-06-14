import { LampContainer } from "../ui/Lamp";
import HeroContext from "@/components/sub/HeroContext";

export default async function Hero() {
  return (
    <section id="hero">
      <LampContainer>
        <HeroContext />
      </LampContainer>
    </section>
  );
}
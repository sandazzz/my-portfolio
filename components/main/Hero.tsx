import React from "react";
import { LampContainer } from "../ui/Lamp";
import { HeroContext } from "@/components/sub/HeroContext";

export default function Hero() {
  return (
    <LampContainer>
      <HeroContext />
    </LampContainer>
  );
}

"use client";
import React from "react";
import { LampContainer } from "../ui/Lamp";
import { HeroContext } from "./HeroContext";

export const HeroLampContent = () => {
  return (
    <LampContainer>
     <HeroContext></HeroContext>
    </LampContainer>
  );
};

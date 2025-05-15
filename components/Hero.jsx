"use client";

import { useRef } from "react";

import { Button, TextDiv, HeroCanvas, Partners } from ".";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef();

  return (
    <div className="relative w-full min-h-screen lg:h-screen text-center overflow-hidden bg-cover bg-center">
      <HeroCanvas />
      <div className="w-full h-full flex-center pt-[10em] lg:pt-[7em] pb-34 md:h-screen lg:h-full">
        <TextDiv
          ref={container}
          className="gsap-hero-container container-x max-w-full md:max-w-[90vw] lg:max-w-[65vw] relative flex-center flex-col !gap-3 pt-5"
        >
          <h1 className="uppercase gsap-hero-h1">
            Looking to get into the <span>XRP</span> ecosystem?
          </h1>
          <p className="md:max-w-[80%] gsap-hero-p pb-2">
            Our XRP Aggregator is a community-driven project that aggregates
            data from various XRP exchanges and provides a centralized platform
            for users to access information about the XRP ecosystem.
          </p>
          <Button
            text="List of Exchanges"
            href="#exchanges"
            icon="arrow-right"
            className="btn-2 !gap-2"
          />
        </TextDiv>
      </div>
      <div className="absolute bottom-0 left-0 w-full pb-7 xl:pb-8">
        <Partners />
      </div>
    </div>
  );
}

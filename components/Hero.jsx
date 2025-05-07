"use client";

import { useRef } from "react";

import { Button, TextDiv, HeroCanvas } from ".";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef();

  return (
    <div
      className="relative w-full h-screen text-center overflow-hidden bg-cover bg-center"
      // style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <HeroCanvas />
      {/* <div
        className="absolute top-0 left-0 w-full h-[65%] object-cover bg-bottom bg-opacity-50"
        style={{ backgroundImage: "url('/images/bg-lines.png')" }}
      /> */}
      <div className="w-full h-full flex-center">
        <TextDiv
          ref={container}
          className="gsap-hero-container container-x max-w-full md:max-w-[90vw] lg:max-w-[65vw] relative flex-center flex-col !gap-3 pt-16 xs:pt-10"
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
    </div>
  );
}

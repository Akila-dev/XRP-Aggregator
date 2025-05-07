"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const CardDiv = ({ children, className, animation, scrub, start, once }) => {
  const container = useRef();
  const tl = useRef();

  const scaleUp = {
    opacity: 0.2,
    scale: 0.95,
  };

  const slideIn = {
    opacity: 0,
    x: "2em",
    y: "2em",
  };

  useGSAP(
    () => {
      // ANIMATIONS TRIGGERED BY THE CONTAINER
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: start ? `top ${start}` : "top 85%",
            end: scrub && "bottom bottom",
            toggleActions: once
              ? "play pause pause pause pause"
              : "play pause resume reverse pause",
            scrub: scrub,
          },
          defaults: { duration: 0.5, stagger: 0.15, ease: "power2" },
        })
        .set(container.current, { opacity: 1 })
        .from(
          container.current.children,
          animation === "scale-up" ? scaleUp : slideIn
        );
    },
    { scope: container, revertOnUpdate: true }
  );

  return (
    <div ref={container} className={`${className} opacity-0`}>
      {children}
    </div>
  );
};

export default CardDiv;

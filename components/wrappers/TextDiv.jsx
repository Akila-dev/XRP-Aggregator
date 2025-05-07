"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TextDiv = ({ children, className }) => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            top: "top 85%",
            toggleActions: "play pause resume reverse pause",
          },
          defaults: { duration: 0.5, stagger: 0.15, ease: "power2" },
        })
        .set(container.current, { opacity: 1 })
        .from(container.current.children, {
          y: "1em",
          opacity: 0,
        });
    },
    { scope: container, revertOnUpdate: true }
  );

  return (
    <div ref={container} className={`${className}`}>
      {typeof children === "string" ? (
        <div className="inherit">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default TextDiv;

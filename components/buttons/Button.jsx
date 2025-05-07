"use client";

import { useRef } from "react";
import Link from "next/link";

import { RxArrowTopRight } from "react-icons/rx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Button = ({ text, href, className, icon }) => {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  const hovering = contextSafe(() => {
    gsap.timeline().to(".clip-bg", {
      top: "50%",
      opacity: 1,
      scale: 1,
      duration: 1,
      // stagger: 0.175,
      ease: "power2.out",
    });
  });
  const hoverOut = contextSafe(() => {
    gsap.to(".clip-bg", {
      top: "200px",
      scale: 0,
      duration: 1,
      // stagger: 0.175,
      ease: "power2.out",
    });
  });

  return (
    <Link
      onMouseEnter={() => hovering()}
      onMouseLeave={() => hoverOut()}
      href={href}
      ref={container}
      className={`${
        className
          ? className.includes("btn-2")
            ? `${className} neon-gradient`
            : className
          : "btn-1"
      } flex-v-center relative group overflow-hidden`}
    >
      <span
        className={`clip-bg ${
          className
            ? className.includes("btn-2")
              ? "dark-gradient"
              : "neon-gradient"
            : "neon-gradient"
        }`}
      ></span>
      <span
        className={`relative z-1 duration-700 ${
          className
            ? className.includes("btn-2")
              ? "group-hover:text-neon group-hover:font-semibold"
              : "group-hover:text-bg group-hover:font-semibold"
            : "group-hover:text-bg group-hover:font-semibold"
        }`}
      >
        {text}
      </span>
      {icon === "arrow-right" && (
        <RxArrowTopRight
          className={`relative duration-700 scale-125 ${
            className
              ? className.includes("btn-2")
                ? "group-hover:text-neon group-hover:font-semibold"
                : "group-hover:text-bg group-hover:font-semibold"
              : "group-hover:text-bg group-hover:font-semibold"
          }`}
        />
      )}
    </Link>
  );
};

export default Button;

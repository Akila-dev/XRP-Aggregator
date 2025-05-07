"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Logo } from "@/components";
import { data } from "@/constants";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col container !py-15 bg-lines !space-y-10">
      <div className="!space-y-6">
        {/* Logo and Navs */}
        <div className="flex-between !block lg:!flex">
          <Logo />
          <ul className="flex-v-center !flex-wrap !gap-y-2 pt-5 lg:pt-0">
            <li>
              <Link
                href="/"
                className={`hover:!text-neon uppercase ${
                  pathname === "/" ? "!text-neon" : ""
                }`}
              >
                Home
              </Link>
            </li>
            {data.menu_links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className={`hover:!text-neon uppercase ${
                    pathname === link.url ? "!text-neon" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Disclaimer/Legalties */}
        <p className="!pt-6 !border-t !border-card !text-white/40">
          You must be at least 18 years old to use Ripple XRP Aggregator. By
          using Ripple XRP Aggregator, you represent and warrant that you are of
          legal age to form a binding contract. If you are under 18 years old,
          you may only use Ripple XRP Aggregator with the consent of a parent or
          legal guardian.
        </p>
        {/* Link and Copyright */}
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[#7A7A7B] text-[12px] text-center">
            Contact:{" "}
            <Link
              href={"mailto:" + data.contact_data.email}
              className="underline hover:text-neon"
            >
              {data.contact_data.email}
            </Link>
          </p>
          <p className="text-[#7A7A7B] text-[12px] text-center">
            © 2025 XRPAggregator. All rights reserved
          </p>
        </div>
      </div>
      <div className="relative w-full h-[8vw] md:h-[11vw]">
        <h1 className="!text-[11.5vw] text-center absolute top-0 left-1/2 -translate-x-1/2 opacity-20 white-text-gradient">
          XRPAggregator
        </h1>
      </div>
    </div>
  );
};

export default Footer;

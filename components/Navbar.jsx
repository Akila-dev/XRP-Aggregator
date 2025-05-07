"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Logo, Button, MenuButton } from "@/components";

import { data } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 z-100 w-full shadow-lg shadow-dark/50">
      {/* Topbar */}
      <div className="flex-between !justify-center md:!justify-between w-full container-x py-3 bg-dark">
        <p>
          <span>XRP Current Stats:</span>{" "}
          <span className="text-gradient">1XP = 2USD</span>
        </p>
        <Link
          href={`mailto:${data.contact_data.email}`}
          className="text-gradient hover-scale show-md uppercase"
        >
          {data.contact_data.email}
        </Link>
      </div>
      {/* Main Nav */}
      <nav className="flex-between w-full container-x py-3 dark-gradient border-y border-card">
        <Logo />
        <ul className="flex-v-center show-lg">
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
        <div className="flex-v-center">
          <Button href="/contact" text="Contact Us" className="btn-2 show-md" />
          <div className="hide-lg">
            <MenuButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

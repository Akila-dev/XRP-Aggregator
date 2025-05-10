"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { RiCloseLargeFill } from "react-icons/ri";
import { data } from "@/constants";

import { Button, Logo } from "@/components";

const MobileMenuPopup = ({ close }) => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 z-100 w-full h-screen bg-dark/30">
      <div className="w-full max-w-[20em] h-full dark-gradient p-4 space-y-4">
        <div className="flex-between">
          <Logo />
          <RiCloseLargeFill
            className="size-7 min-w-7 p-1.5 bg-card rounded-full flex-center"
            onClick={close}
          />
        </div>
        <ul className="flex flex-col divide-y divide-card">
          {data.menu_links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={`hover:!text-neon active:!text-neon uppercase !text-[1.2em] py-3 block  ${
                  pathname === link.url ? "!text-neon" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <Button href="/#exchanges" text="Exchanges" className="btn-2" />

          <Link
            href={`mailto:${data.contact_data.email}`}
            className="text-gradient hover-scale"
          >
            {data.contact_data.email}
          </Link>
          <Link
            href={`tel:${data.contact_data.phone}`}
            className="text-gradient hover-scale"
          >
            {data.contact_data.phone}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuPopup;

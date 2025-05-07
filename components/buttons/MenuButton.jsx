"use client";

import { useState } from "react";

import { CgMenuLeftAlt } from "react-icons/cg";
import { MobileMenuPopup } from "@/components";

const MenuButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <CgMenuLeftAlt
        onClick={() => setShowPopup(true)}
        className="size-6 md:size-7"
      />

      {showPopup && <MobileMenuPopup close={() => setShowPopup(false)} />}
    </>
  );
};

export default MenuButton;

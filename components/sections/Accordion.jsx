"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="bg-black rounded-xl border border-card/40 shadow-xl shadow-white/5">
      {data.map((item, i) => (
        <motion.div key={i} className={` rounded-xl overflow-hidden`}>
          <motion.button
            className={`rounded-xl relative flex items-start justify-between gap-[2em] w-full text-left p-[1em] lg:px-[2em] ${
              i === 0 && "pt-[1.5em]"
            } ${i === data.length - 1 && "pb-[1.5em]"}`}
            onClick={() => setExpanded(i === expanded ? false : i)}
            type="button"
          >
            {item.question}
            <IoIosArrowDown
              style={{
                transform: i === expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
              transition={{
                type: "spring",
                visualDuration: 5,
                bounce: 0.2,
              }}
              className="scale-[110%] mt-[0.25em]"
            />
          </motion.button>

          {/* Dropdown content */}
          <AnimatePresence initial={false}>
            {i === expanded && (
              <motion.div
                // style={{ height: i === expanded ? "fit-content" : 0 }}
                initial={{ height: 0 }}
                animate={{ height: "fit-content" }}
                exit={{ height: 0 }}
                transition={{
                  type: "spring",
                  visualDuration: 0.75,
                  bounce: 0,
                }}
                className="overflow-hidden"
              >
                <div className="dark-gradient-2 border-t border-dark px-4 py-6 md:px-8 md:py-8 space-y-4 overflow-hidden">
                  {/* P */}
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;

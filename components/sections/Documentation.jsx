"use client";

// import { CardDiv } from "../../components";
import { motion } from "framer-motion";

const DocItem = ({ title, content }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    className="bg-card/50 backdrop-blur-xl rounded-md border-[0.1em] border-card p-4 md:p-8 space-y-2 card"
  >
    <h4 className="break-words text-gradient">{title}</h4>
    <p className="break-words">{content}</p>
  </motion.div>
);

const Documentation = ({ heading, data }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: [50, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    className="dark-gradient border-[0.1em] border-dark px-4 py-6 md:p-10 rounded-md space-y-6 lg:space-y-8"
  >
    <h3 className="border-b-[0.05em] border-card pb-3 white-text-gradient">
      {heading}
    </h3>
    {data && (
      <div className="space-y-5">
        {data.map(({ title, content }, i) => (
          <DocItem key={i} title={title} content={content} />
        ))}
      </div>
    )}
  </motion.div>
);

export default Documentation;

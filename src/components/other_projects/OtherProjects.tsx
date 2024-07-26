import { motion } from "framer-motion";
import Gym from "./Gym";
import Drum from "./Drum";
import Quote from "./Quote";
import Calculator from "./Calculator";
import Timer from "./Timer";
import Weather from "./Weather";

const OtherProjects = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Weather />
      <div
        role="separator"
        className="w-64 h-[1px] dark:bg-neutral-700 bg-neutral-300"
      />
      <Gym />
      <div
        role="separator"
        className="w-64 h-[1px] dark:bg-neutral-700 bg-neutral-300"
      />
      <Drum />
      <div
        role="separator"
        className="w-64 h-[1px] dark:bg-neutral-700 bg-neutral-300"
      />
      <Quote />
      <div
        role="separator"
        className="w-64 h-[1px] dark:bg-neutral-700 bg-neutral-300"
      />
      <Calculator />
      <div
        role="separator"
        className="w-64 h-[1px] dark:bg-neutral-700 bg-neutral-300"
      />
      <Timer />
      <div
        role="separator"
        className="w-64 h-[1px] dark:bg-neutral-700 bg-neutral-300"
      />
    </motion.div>
  );
};

export default OtherProjects;

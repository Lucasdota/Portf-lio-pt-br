import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Objectives from "@/components/Objectives";

const Roadmap = () => {
  const divContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divContainer,
    offset: ["start end", "start center"],
  });

  return (
    <motion.div
      className="w-full mb-12"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h2 className="text-xl font-bold mb-8 antialiased 3xl:text-2xl">
        ROADMAP
      </h2>
      <div
        ref={divContainer}
        className="h-[20rem] relative text-[0.95rem] 3xl:text-lg xs:text-[0.7rem] 3xl:h-[23rem]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="bg-secondary absolute w-[0.25rem] h-full rounded-lg top-0 left-6 origin-top antialiased"
        />
        <ul className="h-full ml-[3.01rem] relative ">
          <Objectives
            year={2023}
            description="Começar a estudar programação."
            className={"absolute top-0"}
          />
          <Objectives
            year={2025}
            description="Conseguir meu primeiro emprego na área da tecnologia."
            className={"absolute top-24"}
          />
          <Objectives
            year={2027}
            description="Me graduar na faculdade."
            className={"absolute top-[12rem]"}
          />
          <Objectives
            year={2029}
            description="Me tornar um programador pleno."
            className={"absolute -bottom-2"}
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Roadmap;

import React from 'react';
import Circles from "@/components/Circles";
import { motion } from "framer-motion";

type Props = {
	year: number,
	description: string,
	className: string
}

const Objectives = ({year, description, className}: Props) => {

	return (
    <motion.li
      className={`flex ${className}`}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <Circles />
      <div className="flex -ml-4 -translate-y-1 xs:translate-y-0">
        <h3>{year}</h3>
        <p>
          &nbsp;-&nbsp;{description}
        </p>
      </div>
    </motion.li>
  );
}

export default Objectives
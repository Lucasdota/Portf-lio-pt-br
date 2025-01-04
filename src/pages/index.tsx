import React from "../../public/react.svg";
import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Homepage</title>
      </Head>
      <section
        className={`flex min-h-screen flex-col items-center justify-between px-8 pt-24 pb-8 tracking-wide md:px-6 xs:px-2`}
      >
        <motion.article
          className="max-w-lg"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeOut" }}
          variants={{
            exit: { opacity: 0, y: 10 },
          }}
        >
          <Hero />

          <motion.hr
            className="border-t border-neutral-400"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          <About />
          <Roadmap />

        </motion.article>
      </section>
    </>
  );
}

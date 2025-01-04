import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <article className="my-12">
      <motion.h2
        className="text-xl font-bold mb-8 antialiased 3xl:text-2xl"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        SOBRE
      </motion.h2>
      <motion.p
        className="text-[0.95rem] indent-4 3xl:text-lg antialiased whitespace-normal"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
		Possuo conhecimento em Java, Spring Boot e JWT, o que me capacita a
		desenvolver aplicações seguras e eficientes. Tenho experiência em React,
		criando interfaces responsivas e intuitivas. Também possuo inglês fluente, o que me ajuda na área da tecnologia. Atualmente, estou cursando
		o segundo semestre de Análise e Desenvolvimento de Sistemas e estou
		motivado a ingressar na área o quanto antes.
		Tenho dois projetos principais que você pode checar na aba projetos, sendo um deles uma to-do list fullstack e outro um website de supermercado frontend.
      </motion.p>
      <motion.div
        className="z-10 flex items-center justify-center my-12"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.55 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Link
          id="resume"
          href="/LD-Resume.pdf"
          target="_blank"
          className="text-center inline-block relative text-slate-50 bg-primary text-sm py-3 w-[8rem] overflow-hidden rounded-lg btn btn-effect font-bold antialiased 3xl:text-lg 3xl:w-[9rem]"
        >
          Currículo
        </Link>
      </motion.div>
    </article>
  );
};

export default About;

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
        className="text-[0.95rem] 3xl:text-lg antialiased indent-4 whitespace-normal"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Tenho 30 anos, estou no primeiro semestre de Análise e Desenvolvimento de Sistemas, focado em conseguir meu primeiro emprego como
        desenvolvedor web, ansioso para iniciar minha carreira na indústria de
        tecnologia. Planejo me aprofundar em tecnologias tanto de front-end quanto de back-end para
        aprimorar minhas habilidades de programação. Meu maior projeto, é o website GrocerGo, onde apliquei todos os conhecimentos de front-end que aprendi até o momento. Por favor, entre em contato comigo para explorar possíveis
        colaborações e saber mais sobre minhas habilidades e experiências.
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

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { TbSeparatorVertical } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import ReactPlayer from "react-player";

const GrocerGo = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <ReactPlayer
        url="/videos/grocergo-pt-br.mp4"
        alt="grocergo video showcase"
        width="100%"
        height="100%"
        priority
        controls
        loading="eager"
        className={`rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]`}
      />

      <div className="flex items-center gap-6 shrink-0 text-sm">
        <div className="flex items-center gap-1.5">
          <Link
            aria-label="go to grocergo website"
            target="_blank"
            href="https://grocergo.vercel.app/"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Website
          </Link>
          <CgWebsite />
        </div>
        <TbSeparatorVertical />
        <div className="flex items-center gap-1.5">
          <FaGithub />
          <Link
            aria-label="go to grocergo github repository"
            target="_blank"
            href="https://github.com/Lucasdota/GrocerGo"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Repositório
          </Link>
        </div>
      </div>

      <p className="text-base sm:text-sm px-4 whitespace-normal text-center">
        Um website frontend de supermercado onde o usuário pode fazer login com
        sua conta google ou github armazenando informações no local storage para
        futuras visitas. Ele ainda pode procurar produtos em uma barra de
        pesquisa, adicionar ao carrinho, procurar receitas com base em produtos,
        e muito mais.
      </p>

      <div className="text-base sm:text-sm flex gap-2 items-start justify-start">
        <p>Tecnologias utilizadas:</p>
        <span className="text-blue-700 dark:text-blue-300">React</span>
        <span className="text-green-700 dark:text-green-300">TailwindCSS</span>
        <span className="text-red-700 dark:text-red-300">Framer Motion</span>
      </div>
    </motion.div>
  );
};

export default GrocerGo;

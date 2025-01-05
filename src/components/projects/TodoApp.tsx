import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import ReactPlayer from "react-player";

export default function TodoApp() {
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
          url="/videos/to-do-app-pt-br.mp4"
          alt="todo app video showcase"
          width="100%"
          height="100%"
          priority
          controls
          loading="eager"
          className={`rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]`}
        />

        <div className="flex items-center gap-1.5 text-sm shrink-0">
          <FaGithub />
          <Link
            aria-label="go to to-do app github repository"
            target="_blank"
            href="https://github.com/Lucasdota/todo_app_backend"
            className="underline dark:decoration-neutral-300 decoration-neutral-500 underline-offset-2 dark:hover:text-green-400 dark:hover:decoration-green-400 dark:active:decoration-green-600 dark:active:text-green-600 hover:decoration-green-600 active:decoration-green-800 hover:text-green-600 active:text-green-800 px-1"
          >
            Repositório
          </Link>
        </div>

        <p className="text-base sm:text-sm px-4 whitespace-normal text-center">
          Uma aplicação fullstack de “tarefas a fazer” que permite que os
          usuários se registrem, façam login usando seu e-mail e senha, e
          gerenciem suas tarefas. A autenticação é realizada usando JSON Web
          Tokens (JWT), que são armazenados em cookies para um gerenciamento
          seguro de sessões. As informações do usuário são salvas em um banco de
          dados.
        </p>

        <div className="text-base sm:text-sm flex gap-2 items-start justify-start">
          <p>Tecnologias utilizadas:</p>
          <span className="text-orange-700 dark:text-orange-300">Java</span>
          <span className="text-green-700 dark:text-green-300">Spring Boot</span>
          <span className="text-red-700 dark:text-red-300">JWT</span>
          <span className="text-purple-700 dark:text-purple-300">PostgreSQL</span>
          <span className="text-blue-700 dark:text-blue-300">React</span>
        </div>
      </motion.div>
    );
}

import React from 'react'
import {BsArrowUpSquare} from "react-icons/bs"

const Footer = () => {
	return (
		<footer className="flex items-center h-24 dark:bg-neutral-850 bg-neutral-200 dark:text-slate-50 text-neutral-850 justify-center text-sm 3xl:text-lg xs:text-[0.6rem] antialiased min-w-[300px] xs:pb-4">
			<div className="flex xs:flex-col gap-4 items-center">
				<p className="text-slate-850 dark:text-neutral-400">
					© 2023 Todos os direitos reservados.
				</p>
				<button
					title="Ir para o topo"
					className="hover:animate-pulse"
					onClick={() => {
						document.body.scrollTop = 0; // For Safari
						document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
					}}
				>
					<BsArrowUpSquare className="3xl:w-10 3xl:h-10 w-7 h-7 dark:text-neutral-400 text-neutral-600" />
				</button>
				<p className="text-slate-850 dark:text-neutral-400">
					Se Desenvolva Developer.
				</p>
			</div>
		</footer>
  );
}

export default Footer
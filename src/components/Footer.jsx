import React from 'react'

const Footer = () => {
	return (
    <footer className="flex flex-col items-center h-24 dark:bg-neutral-850 bg-neutral-200 dark:text-slate-50 text-neutral-850 justify-center text-sm 3xl:text-lg xs:text-[0.6rem] antialiased min-w-[300px] xs:pb-4">
      <p className="text-slate-850 dark:text-neutral-400">
		Se desenvolva, desenvolvedor.
	  </p>
      <p className="text-slate-850 dark:text-neutral-400">
        © 2025 Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer
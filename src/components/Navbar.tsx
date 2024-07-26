import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaSeedling,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";


const Navbar = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [darkTheme, setDarkTheme] = useState<boolean>();
	const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

	useEffect(() => {
		const localTheme = localStorage.theme;
		const htmlRef = document.querySelector<any>("html");
		const bodyRef = document.body;

		if (localTheme === undefined) {
			localStorage.setItem("theme", "dark");
			setDarkTheme(true);
			htmlRef?.classList.add("dark");
			bodyRef.classList.add("dark-scrollbar");
			htmlRef.style.colorScheme = "dark";
		} else if (localTheme === "light" && !htmlRef?.classList.contains("dark")) {
			localStorage.setItem("theme", "light");
      setDarkTheme(false);
      htmlRef?.classList.remove("dark");
			bodyRef.classList.remove("dark-scrollbar");
			htmlRef.style.colorScheme = "light";
    } else if (localTheme === "dark") {
			localStorage.setItem("theme", "dark");
      setDarkTheme(true);
      htmlRef?.classList.add("dark");
			bodyRef.classList.add("dark-scrollbar");
			htmlRef.style.colorScheme = "dark";
    }

		let newScheme = darkTheme ? "dark" : "light";
		document.documentElement.setAttribute("data-color-scheme", newScheme);

	}, [darkTheme])

	function handleTheme() {
		const htmlRef = document.querySelector("html");
		const bodyRef = document.body;

		if (htmlRef?.classList.contains("dark")) {
			localStorage.setItem("theme", "light");
			setDarkTheme(false);
			htmlRef?.classList.remove("dark");
			bodyRef.classList.remove("dark-scrollbar");

		} else {
			localStorage.setItem("theme", "dark");
			setDarkTheme(true);
			htmlRef?.classList.add("dark");
			bodyRef.classList.add("dark-scrollbar");
		}
	}

	function handleClick() {
		setIsOpen(!isOpen)
	}

  return (
    <header className="fixed top-0 w-full filter backdrop-blur-md dark:text-slate-50 bg-transparent text-neutral-850 z-50 font-poppins min-w-[300px]">
      {isMobile ? (
        <nav className="mx-auto flex w-[95%] max-w-3xl items-center justify-between px-4 py-[0.6rem] antialiased z-40">
          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-[0.4rem] tracking-wide"
          >
            <FaSeedling
              className={`dark:text-green-500 text-green-600 duration-100 group-hover:-scale-x-100 dark:group-hover:drop-shadow-[0_0px_5px_rgba(22,163,74,0.6)]`}
              size={17}
            />
            <h1 className="text-xl name">Lucas Dota</h1>
          </Link>
          <button
            onClick={handleClick}
            className={`absolute top-0 right-0 flex-col justify-center items-center lg:flex hidden h-full w-24 z-40 p-2
								`}
          >
            <span
              className={`w-6 h-0.5 dark:bg-slate-50 bg-neutral-800 rounded-sm transition-all duration-300 ease-out 
										${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
            ></span>
            <span
              className={`w-6 h-0.5 dark:bg-slate-50 bg-neutral-800 rounded-sm transition-all duration-300 ease-out my-0.5
										${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`w-6 h-0.5 dark:bg-slate-50 bg-neutral-800 rounded-sm transition-all duration-300 ease-out  
										${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
            ></span>
          </button>
          <div
            className={`absolute flex top-0 flex-col justify-around items-center transition-all duration-300 ease-out text-xl w-1/2 h-[100dvh] dark:bg-neutral-transparent bg-white-transparent border-l dark:border-neutral-500 border-neutral-600 shadow-[-1px_0_30px_1px_rgba(0,0,0,0.8)] xs:w-[70%]
						${isOpen ? "z-30 right-0" : "z-0 -right-96"}`}
          >
            <div
              className={`flex-col justify-center items-center gap-32 font-medium ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              {/* PAGE LINK */}
              <div className="flex flex-col items-center gap-8">
                <Link
                  onClick={handleClick}
                  id="home"
                  href="/"
                  aria-label="Go to Homepage"
                  className={`group relative pt-1 text-2xl font-nunito tracking-widest`}
                >
                  Home
                  <span
                    className={`transition-width absolute inset-[2rem] left-0 h-[2px] w-0 bg-neutral-600 duration-100 dark:bg-neutral-300
									${router.asPath === "/" ? "w-full" : "w-0"}
									`}
                  ></span>
                </Link>
                <Link
                  onClick={handleClick}
                  id="proj"
                  href="/projetos"
                  aria-label="Go to Projects Page"
                  className={`group relative pt-1 text-2xl font-nunito tracking-widest`}
                >
                  Projetos
                  <span
                    className={`transition-width absolute inset-[2rem] left-0 h-[2px] w-0 bg-neutral-500 duration-100 dark:bg-neutral-300
									${router.asPath === "/projetos" ? "w-full" : "w-0"}
									`}
                  ></span>
                </Link>
              </div>

              {/* ICONS */}
              <div className="flex flex-col gap-8 items-start justify-center">
                <Link
                  onClick={handleClick}
                  target="_blank"
                  href="https://github.com/Lucasdota"
                  aria-label="Go to my Github Repository"
                  className="group p-2 flex gap-2 items-end"
                >
                  <FaGithubSquare
                    size={32}
                    className="transition duration-100 group-active:scale-90 dark:text-slate-50 text-neutral-850"
                  />
                  Github
                </Link>
                <Link
                  onClick={handleClick}
                  target="_blank"
                  href="https://www.linkedin.com/in/lucas-dota-trombini/"
                  aria-label="Go to my Linkedin Profile"
                  className="group p-2 flex gap-2 items-end"
                >
                  <FaLinkedin
                    size={32}
                    className={`transition duration-100 group-active:scale-90 dark:text-slate-50 text-neutral-850`}
                  />
                  Linkedin
                </Link>
                <Link
                  onClick={handleClick}
                  target="_blank"
                  href="mailto:lucasdotat@hotmail.com"
                  aria-label="Send me an email! Opens up your email app"
                  className="group p-2 flex gap-2 items-end"
                >
                  <FaEnvelope
                    size={32}
                    className="transition duration-100 group-active:scale-90 dark:text-slate-50 text-neutral-850"
                  />
                  Email
                </Link>
              </div>
              {/* DARK/LIGHT MODE BUTTON */}
              <button
                aria-hidden="true"
                onClick={handleTheme}
                className="flex h-16 w-16 items-center justify-center rounded-full transition duration-300 dark:bg-dark-bg group dark:shadow-dark-shadow shadow-light-shadow border dark:border-none border-neutral-200 group bg-slate-50"
              >
                {darkTheme ? (
                  <RiMoonFill
                    size={28}
                    className="group-active:scale-75 transition duration-300 ease-out text-slate-50"
                  />
                ) : (
                  <BsSun
                    size={28}
                    className="group-active:scale-75 text-neutral-800 transition duration-300 ease-out"
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="mx-auto flex w-[95%] max-w-3xl 3xl:py-[1rem] items-center justify-between px-4 py-[0.6rem] antialiased z-40">
          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-[0.4rem] tracking-wide"
          >
            <FaSeedling
              className={`dark:text-green-500 text-green-600 duration-100 group-hover:-scale-x-100 dark:group-hover:drop-shadow-[0_0px_5px_rgba(22,163,74,0.6)] 3xl:h-6 3xl:w-6`}
            />
            <h1 className="text-xl 3xl:text-2xl name">Lucas Dota</h1>
          </Link>

          {/* PAGE LINKS */}
          <div className="flex h-full items-center gap-1">
            <Link
              id="proj"
              href="/projetos"
              aria-label="Go to Projects Page"
              className={`group relative pt-1 text-[1rem] 3xl:text-xl font-nunito tracking-widest`}
            >
              Projetos
              <span
                className={`transition-width absolute left-0 h-[1px] w-0 bg-neutral-500 duration-100 group-hover:w-full dark:bg-neutral-300 bottom-0.5 3xl:h-[2px]
								${router.asPath === "/projetos" ? "w-full" : "w-0"}
								`}
              ></span>
            </Link>
          </div>

          {/* ICONS */}
          <div className="flex gap-4 items-center justify-center">
            <div className="flex items-center justify-center">
              <Link
                target="_blank"
                href="https://github.com/Lucasdota"
                aria-label="Go to my Github Repository"
                className="group p-2"
              >
                <FaGithubSquare className="transition duration-100 group-hover:-translate-y-1 dark:text-slate-50 text-neutral-850 3xl:h-6 3xl:w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/lucas-dota-trombini/"
                aria-label="Go to my Linkedin Profile"
                className="group p-2 "
              >
                <FaLinkedin
                  className={`transition duration-100 group-hover:-translate-y-1 dark:text-slate-50 text-neutral-850 3xl:h-6 3xl:w-6`}
                />
              </Link>
              <Link
                target="_blank"
                href="mailto:lucasdotat@hotmail.com"
                aria-label="Send me an email! Opens up your email app"
                className="group p-2"
              >
                <FaEnvelope className="transition duration-100 group-hover:-translate-y-1 dark:text-slate-50 text-neutral-850 3xl:h-6 3xl:w-6" />
              </Link>
            </div>
            {/* DARK/LIGHT MODE BUTTON */}
            <button
              aria-hidden="true"
              onClick={handleTheme}
              className="flex h-8 w-8 3xl:h-10 3xl:w-10 items-center justify-center rounded-full transition duration-300 dark:bg-dark-bg group dark:shadow-dark-shadow shadow-light-shadow border dark:border-none border-neutral-200 group bg-slate-50"
            >
              {darkTheme ? (
                <RiMoonFill className="group-hover:opacity-60 group-active:scale-75 transition duration-300 ease-out text-slate-50 3xl:h-5 3xl:w-5 h-4 w-4" />
              ) : (
                <BsSun className="group-hover:opacity-60 group-active:scale-75 text-neutral-800 transition duration-300 ease-out 3xl:h-5 3xl:w-5 h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

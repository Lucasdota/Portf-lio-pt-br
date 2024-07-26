import Link from 'next/link';
import React from 'react'
import {TbError404Off} from "react-icons/tb"
import {BsPatchQuestion} from "react-icons/bs"
import {TiArrowBack, TiArrowForward} from "react-icons/ti"

const Custom404 = () => {
	return (
    <main className="dark:bg-neutral-850 dark:text-slate-50 text-neutral-850 bg-slate-100  min-h-screen flex flex-col items-center justify-center">
      <section className="max-w-xl w-full my-12 flex flex-col items-center gap-20">
        <div className="border-2 rounded-xl text-center px-28 py-10 dark:border-slate-50 border-neutral-850 dark:shadow-[5px_5px_15px_rgb(10,10,10)] shadow-[5px_5px_15px_rgb(34,34,34)]">
					<div className='text-center'>
						<TbError404Off className='w-full h-44' />
						<h3 className="font-extrabold mb-12 text-neutral-500">
            PAGE NOT FOUND.
          </h3>
					</div>
          
          <p className='flex items-center gap-1 w-full text-md'>What are you trying to do brother<BsPatchQuestion /></p>
          <Link
            href="/"
            className="flex items-center gap-2 mx-auto w-fit underline underline-offset-[3px] group decoration-neutral-600 decoration-2 hover:decoration-neutral-850 dark:hover:decoration-neutral-200"
          >
						<TiArrowForward />
            Back to home
						<TiArrowBack />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Custom404;
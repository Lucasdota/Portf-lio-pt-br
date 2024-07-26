import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {

	const router = useRouter();

  return (
		<main className="font-nunito dark:bg-neutral-850 bg-neutral-200 dark:text-slate-50 text-neutral-850 min-w-[300px]">
			<Navbar />
			<AnimatePresence initial={true}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
			<Footer />
		</main>
  ); 
	
}

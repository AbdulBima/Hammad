"use client";
import React from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SitemenuProps {
	closeMenu: () => void; // Prop to close the menu
}

const Site: React.FC<SitemenuProps> = ({
	closeMenu,
}) => {
	const pathname = usePathname();

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { y: "100%" },
		show: { y: "0%", transition: { duration: 0.4 } },
	};

	return (
		<div>
			<div className='h-screen fixed  z-40 w-screen'>
				<div className='bg-white h-screen overflow-hidden '>
					<motion.ul
						className='space-y-1 ml-10 pt-32'
						aria-label='Sidebar'
						variants={container}
						initial='hidden'
						animate='show'
					>
						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='text-black flex items-center px-3 py-2 '
							>
								<Link href='/'>
									<span
										className={cn(
											"truncate   text-4xl md:text-6xl font-bold",
											pathname === "/"
												? "decoration-blue-400 line-through decoration-6"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										HOME
									</span>
								</Link>
							</motion.li>
						</div>

						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='text-black flex items-center px-3 py-2 '
							>
								<Link href='/about'>
									<span
										className={cn(
											"truncate   text-4xl md:text-6xl font-bold",
											pathname ===
												"/about"
												? "decoration-blue-400 line-through decoration-6"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										ABOUT
									</span>
								</Link>
							</motion.li>
						</div>

						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='text-black flex items-center px-3 py-2 '
							>
								<Link href='/services'>
									<span
										className={cn(
											"truncate   text-4xl md:text-6xl font-bold",
											pathname ===
												"/services"
												? "decoration-blue-400 line-through decoration-6"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										SERVICES
									</span>
								</Link>
							</motion.li>
						</div>

						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='text-black flex items-center px-3 py-2 '
							>
								<Link href='/contact'>
									<span
										className={cn(
											"truncate   text-4xl md:text-6xl font-bold",
											pathname ===
												"/contact"
												? "decoration-blue-400 line-through decoration-6"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										CONTACT
									</span>
								</Link>
							</motion.li>
						</div>

						
					</motion.ul>

				
				</div>
			</div>
		</div>
	);
};

export default Site;

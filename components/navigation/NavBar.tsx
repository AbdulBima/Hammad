"use client";
import React, { useState } from "react";
import Site from "./Site";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	// Function to toggle the menu state
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className='hidden border-b shadow-sm md:flex md:flex-row w-screen fixed  py-2  top-0 z-50 bg-white h-16 justify-between'>
				{/* First Child Div at the Extreme Left */}
				<div className='ml-4 text-black p-4 hover:opacity-90'>
					<Link
						href='/'
						onClick={() => {
							closeMenu();
						}}
						className='btn btn-ghost -mt-4  text-xl text-black '
					>
						{/* <p className='webTitile'>
							Hammad
						</p> */}
						<Image unoptimized src={"/images/logo.png"} alt={""} height={30} width={44}/>
					</Link>
				</div>

				<div
						className='md:flex mr-20 mt-4'
						// onClick={toggleMenu}
					>
						<div className='transition-opacity duration-300 ease-in-out'>
							{isMenuOpen ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8 text-white opacity-100 -mt-2'
									fill='none'
									viewBox='0 0 24 24'
									stroke='black'
									onClick={toggleMenu}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<>
									<input
										type='checkbox'
										id='menuToggle'
										className='hidden'
									/>
									<label
										htmlFor='menuToggle'
										className='block cursor-pointer opacity-100'
										onClick={toggleMenu}
									>
										<div className='w-6 h-0.5 bg-black mb-1'></div>
										<div className='w-6 h-0.5 bg-black mb-1'></div>
										<div className='w-6 h-0.5 bg-black'></div>
									</label>
								</>
							)}
						</div>
					</div>

				{/* Second Child Div at the Extreme Right */}
				
			</div>

			<div className=' md:hidden '>
				<div className='navbar w-screen fixed mb-20 top-0 z-50 bg-white border-b  shadow-sm'>
					<div className='navbar-start'>
						<Link
							href='/'
							onClick={() => {
								closeMenu();
							}}
							className='btn btn-ghost text-xl text-black mr-20'
						>
							{/* <p className='webTitile'>
								Hammad
							</p> */}
													<Image unoptimized src={"/images/logo.png"} alt={""} height={36} width={44}/>

						</Link>
					</div>
					<div className='navbar-center'></div>
					<div
						className='navbar-end mr-6'
						// onClick={toggleMenu}
					>
						<div className='transition-opacity duration-300 ease-in-out'>
							{isMenuOpen ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8 text-white opacity-100'
									fill='none'
									viewBox='0 0 24 24'
									stroke='black'
									onClick={toggleMenu}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<>
									<input
										type='checkbox'
										id='menuToggle'
										className='hidden'
									/>
									<label
										htmlFor='menuToggle'
										className='block md:hidden cursor-pointer opacity-100'
										onClick={toggleMenu}
									>
										<div className='w-6 h-0.5 bg-black mb-1'></div>
										<div className='w-6 h-0.5 bg-black mb-1'></div>
										<div className='w-6 h-0.5 bg-black'></div>
									</label>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<Site closeMenu={closeMenu} />
			)}
		</>
	);
};

export default NavBar;

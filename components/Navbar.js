import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [nav, setNav] = useState("false");

	return (
		<div className='flex items-center justify-between h-[6rem] my-6 ml-[3.4rem]'>
			<div>
				<Image src={logo} />
			</div>

			{/* Desktop design */}
			<div className='hidden items-center xs:flex bg-[#979797]'>
				<ul className=''>
					<li>home</li>
					<li>destination</li>
					<li>crew</li>
					<li>technology</li>
				</ul>
			</div>

			{/* Mobile design */}
			<div className='xs:hidden block'>
				<Image
					src={menu}
					className='cursor-pointer'
					onClick={() => setNav(true)}
				/>
				<div
					className={
						nav
							? "transition-all duration-100 ease-linear fixed bg-white/10 backdrop-blur-xl font-barlowCondensed z-[1000] top-0 bottom-0 right-0 left-[35%]  h-full"
							: "transition-all duration-100 ease-linear fixed bg-white/10 backdrop-blur-xl font-barlowCondensed top-0 bottom-0 left-[100%]"
					}>
					<div className='p-8 flex items-center justify-end'>
						<Image
							src={close}
							width={19}
							height={19}
							onClick={() => setNav(false)}
							className='cursor-pointer'
						/>
					</div>

					<ul className='pl-4 uppercase text-white w-full'>
						<li className='flex flex-wrap gap-3 py-1 my-7 tracking-[2.7px] cursor-pointer border-r-4'>
							<span className='font-bold'>00</span>home
						</li>
						<li className='flex gap-3 py-1 my-7 tracking-[2.7px] cursor-pointer'>
							<span className='font-bold'>01</span>destination
						</li>
						<li className='flex gap-3 py-1 my-7 tracking-[2.7px] cursor-pointer'>
							<span className='font-bold'>02</span>crew
						</li>
						<li className='flex gap-3 py-1 my-7 tracking-[2.7px] cursor-pointer'>
							<span className='font-bold'>03</span>technology
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

import React, { useEffect, useState } from "react";
import logo from "../public/assets/shared/logo.svg";
import menu from "../public/assets/shared/icon-hamburger.svg";
import close from "../public/assets/shared/icon-close.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [active, setActive] = useState("/");

	const router = useRouter();

	useEffect(() => {
		switch (router.asPath) {
			case "/":
				document.body.className = "home";
				setActive("/");
				break;
			case "/destination":
				document.body.className = "destination";
				setActive("/destination");

				break;
			case "/crew":
				document.body.className = "crew";
				setActive("/crew");

				break;
			case "/technology":
				document.body.className = "technology";
				setActive("/technology");
		}
	}, [router.asPath]);

	return (
		<nav className='relative flex items-center justify-between h-[6rem] xs:py-6 xs:pr-0 xs:pl-[3.4rem] p-6 xl:mt-[2.5rem] '>
			{/* Logo */}
			<Image src={logo} />

			{/* Decal */}
			<div className='right-[830px] left-[120px] hidden xl:block absolute bg-white/25 w-[auto] ml-20 h-[2px] z-10'></div>

			{/* Desktop design */}
			<div className='hidden h-[96px] items-center xs:flex bg-white/10 backdrop-blur-xl px-12 xl:w-[54rem] '>
				<ul className='font-barlowCondensed text-blue text-sm xl:text-base flex uppercase  w-full items-center gap-4 lg:gap-8 xl:gap-12 justify-center'>
					<Link href='/'>
						<li
							className={
								active === "/"
									? "xl:flex xl:gap-3 xl:tracking-[2.7px] text-white tracking-[2px] cursor-pointer ease duration-100 border-b-white border-b-4 h-full py-[34px]"
									: "xl:flex xl:gap-3 xl:tracking-[2.7px] tracking-[2px] text-white cursor-pointer ease duration-100 hover:border-b-white/50 border-b-transparent h-full py-[34px] border-b-4"
							}>
							<span className='font-bold hidden xl:inline-block'>00</span>home
						</li>
					</Link>
					<Link href='/destination'>
						<li
							className={
								active === "/destination"
									? "xl:flex xl:gap-3 xl:tracking-[2.7px] text-white tracking-[2px] cursor-pointer ease duration-100 border-b-white border-b-4 h-full py-[34px]"
									: "xl:flex xl:gap-3 xl:tracking-[2.7px] tracking-[2px] text-white cursor-pointer ease duration-100 hover:border-b-white/50 border-b-transparent h-full py-[34px] border-b-4"
							}>
							<span className='font-bold hidden xl:inline-block'>01</span>
							destination
						</li>
					</Link>
					<Link href='/crew'>
						<li
							className={
								active === "/crew"
									? "xl:flex xl:gap-3 xl:tracking-[2.7px] text-white tracking-[2px] cursor-pointer ease duration-100 border-b-white border-b-4 h-full py-[34px]"
									: "xl:flex xl:gap-3 xl:tracking-[2.7px] tracking-[2px] text-white cursor-pointer ease duration-100 hover:border-b-white/50  border-b-transparent h-full py-[34px] border-b-4"
							}>
							<span className='font-bold hidden xl:inline-block'>02</span>crew
						</li>
					</Link>
					<Link href='/technology'>
						<li
							className={
								active === "/technology"
									? "xl:flex xl:gap-3 xl:tracking-[2.7px] text-white tracking-[2px] cursor-pointer ease duration-100 border-b-white border-b-4 h-full py-[34px]"
									: "xl:flex xl:gap-3 xl:tracking-[2.7px] tracking-[2px] text-white cursor-pointer ease duration-100 hover:border-b-white/50 border-b-transparent h-full py-[34px] border-b-4"
							}>
							<span className='font-bold  hidden xl:inline-block'>03</span>
							technology
						</li>
					</Link>
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
							? "transition-all duration-300 ease-linear fixed bg-white/10 backdrop-blur-xl font-barlowCondensed z-[1000] top-0 bottom-0 right-0 left-[35%]  h-full"
							: "z-[1000] transition-all duration-300 ease-linear fixed bg-white/10 backdrop-blur-xl font-barlowCondensed top-0 bottom-0 right-0 left-[100%]"
					}>
					<div className='px-6 py-8 flex items-center justify-end'>
						<Image
							src={close}
							width={19}
							height={19}
							onClick={() => setNav(false)}
							className='cursor-pointer'
						/>
					</div>

					<ul className='pl-4 uppercase w-full'>
						<Link href='/'>
							<li
								onClick={() => setNav(false)}
								className={
									active === "/"
										? "flex gap-3 my-7 text-white tracking-[2.7px] cursor-pointer ease duration-100 border-r-white border-r-4 py-1"
										: "flex gap-3 my-7 tracking-[2.7px] text-blue cursor-pointer ease duration-100 hover:border-r-white/50 border-r-transparent h-full py-1 border-r-4"
								}>
								<span className='font-bold '>00</span>home
							</li>
						</Link>
						<Link href='/destination'>
							<li
								onClick={() => setNav(false)}
								className={
									active === "/destination"
										? "flex gap-3 my-7 text-white tracking-[2.7px] cursor-pointer ease duration-100 border-r-white border-r-4 py-1"
										: "flex gap-3 my-7 tracking-[2.7px] text-blue cursor-pointer ease duration-100 hover:border-r-white/50 border-r-transparent h-full py-1 border-r-4"
								}>
								<span className='font-bold'>01</span>destination
							</li>
						</Link>

						<Link href='/crew'>
							<li
								onClick={() => setNav(false)}
								className={
									active === "/crew"
										? "flex gap-3 my-7 text-white tracking-[2.7px] cursor-pointer ease duration-100 border-r-white border-r-4 py-1"
										: "flex gap-3 my-7 tracking-[2.7px] text-blue cursor-pointer ease duration-100 hover:border-r-white/50 border-r-transparent h-full py-1 border-r-4"
								}>
								<span className='font-bold'>02</span>crew
							</li>
						</Link>
						<Link href='/technology'>
							<li
								onClick={() => setNav(false)}
								className={
									active === "/technology"
										? "flex gap-3 my-7 text-white tracking-[2.7px] cursor-pointer ease duration-100 border-r-white border-r-4 py-1"
										: "flex gap-3 my-7 tracking-[2.7px] text-blue cursor-pointer ease duration-100 hover:border-r-white/50 border-r-transparent h-full py-1 border-r-4"
								}>
								<span className='font-bold'>03</span>technology
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

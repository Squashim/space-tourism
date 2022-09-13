import React from "react";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className='flex items-center justify-between w-full h-full p-6'>
			<div>
				<Image src={logo} width={40} height={40} />
			</div>

			{/* Desktop design */}
			<div className='hidden xs:flex min-w-[450px] h-full bg-[#979797]'>
				<ul>
					<li>home</li>
					<li>destination</li>
					<li>crew</li>
					<li>technology</li>
				</ul>
			</div>

			{/* Mobile design */}
			<div className='xs:hidden block'>
				<Image src={menu} className='cursor-pointer' />
			</div>
		</div>
	);
};

export default Navbar;

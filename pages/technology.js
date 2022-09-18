import Image from "next/image";
import React, { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import data from "../json/data.json";

const Technology = () => {
	const [currentTech, setCurrentTech] = useState(data.technology[0].name);
	const width = useWindowSize();

	return (
		<div className='w-full transition ease duration-100 py-2 xl:pl-[12.5rem]'>
			<h2 className=' text-base text-white uppercase font-barlowCondensed tracking-[2.7px] text-center max-w-[320px] mx-auto xs:mt-10 xs:text-[1.25rem] xs:tracking-[3.3px] xs:text-left xs:max-w-full  xl:mt-[76px] xl:text-[28px] xl:tracking-[4.7px]'>
				<span className='font-bold text-white/25 mr-4 xs:mr-[18px] xl:mr-[28px] '>
					03
				</span>
				space launch 101
			</h2>

			<div className='flex flex-col xl:flex-row w-full xl:items-center '>
				<div className='relative h-[170px] xs:h-[310px] xl:h-[527px] xl:w-[515px] w-full  my-8 xs:my-[60px] xl:order-2 ml-auto'>
					{data.technology.map((tech, index) => {
						if (currentTech === tech.name) {
							return (
								<Image
									src={
										width >= 1280 ? tech.images.portrait : tech.images.landscape
									}
									key={index}
									alt={tech.name}
									layout='fill'
									className='object-cover'
								/>
							);
						} else return;
					})}
				</div>
				<div className='flex flex-col   px-4 xs:px-0 xl:flex-row'>
					<nav className='  max-w-[320px] mx-auto flex items-center justify-center  xl:mx-0 gap-4 xl:gap-8 xl:flex-col xl:items-start xl:justify-start pt-10'>
						{data.technology.map((tech, index) => (
							<div
								onClick={() => setCurrentTech(tech.name)}
								key={index}
								className={
									currentTech === tech.name
										? "flex items-center justify-center w-[40px] xs:w-[60px] xl:w-[80px] aspect-square rounded-full bg-white cursor-pointer border-2 border-white"
										: "flex items-center justify-center w-[40px] xs:w-[60px] xl:w-[80px] aspect-square rounded-full bg-transparent cursor-pointer border-2 border-white/25 hover:bg-white/10"
								}>
								<p
									className={
										currentTech === tech.name
											? "text-dark font-bellefair text-center text-base xs:text-[1.5rem] xl:text-[2rem]"
											: "text-white font-bellefair text-center text-base xs:text-[1.5rem] xl:text-[2rem]"
									}>
									{index + 1}
								</p>
							</div>
						))}
					</nav>
					<div className=' mx-auto xs:max-w-[570px] xl:max-w-full xl:w-full mt-[26px] xs:mt-[44px] xl:ml-[80px]'>
						{data.technology.map((tech, index) => {
							if (currentTech === tech.name) {
								return (
									<div key={index}>
										<p className=' font-barlowCondensed text-center text-blue text-sm uppercase tracking-[2.3px] xs:text-base xs:tracking-[2.7px] xl:text-left'>
											The terminology...
										</p>
										<h1 className='font-bellefair text-white text-center text-[1.5rem] uppercase my-4 xl:mt-4 xs:text-[40px] xl:text-[56px] xl:text-left'>
											{tech.name}
										</h1>

										<p className='xl:max-w-[450px] text-[15px] text-blue font-barlow text-center leading-[25px] xs:text-base xs:leading-[28px] xl:text-[18px] xl:text-left'>
											{tech.description}
										</p>
									</div>
								);
							} else return;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;

import Image from "next/image";
import React, { useState } from "react";
import data from "../json/data.json";
import { useWindowSize } from "../hooks/useWindowSize";

export const destination = () => {
	const [currentPlanet, setCurrentPlanet] = useState("Moon");
	const width = useWindowSize();
	return (
		<div className='w-full transition ease duration-100 py-2 xl:px-[10rem]'>
			<h2 className=' text-base text-white uppercase font-barlowCondensed tracking-[2.7px] text-center max-w-[320px] mx-auto xs:mt-10 xs:text-[1.25rem] xs:tracking-[3.3px] xs:text-left xs:max-w-full xs:pl-9 xl:mt-[76px] xl:text-[28px] xl:tracking-[4.7px]'>
				<span className='font-bold text-white/25 mr-4 xs:mr-[18px] xl:mr-[28px] '>
					01
				</span>
				pick your destination
			</h2>

			<div className='flex flex-col xl:flex-row xl:max-w-[1280px] w-full mx-auto'>
				<div className='flex  justify-center mt-8 mb-6 xs:mt-[3.75rem] xs:mb-12 w-full xl:justify-start xl:pl-16 xl:mt-[97px] '>
					{data.destinations.map((planet, index) => {
						if (currentPlanet === planet.name) {
							return (
								<Image
									src={planet.images.png}
									key={index}
									alt={`${planet.name} image`}
									width={width < 600 ? 170 : width >= 1280 ? 445 : 300}
									height={width < 600 ? 170 : width >= 1280 ? 445 : 300}
								/>
							);
						} else return;
					})}
				</div>
				<div className='flex flex-col xl:max-w-[445px] w-full px-4 xs:px-0'>
					<nav className='xl:pt-16 py-4 max-w-[320px] xl:max-w-[350px] w-full mx-auto flex uppercase text-blue font-barlowCondensed text-sm items-center justify-between xs:text-base xl:mx-0'>
						{data.destinations.map((planet, index) => (
							<div
								key={index}
								className={
									currentPlanet === planet.name
										? "text-white border-b-[3px] pb-2  xl:pb-3 ease duration-200 transition tracking-[2.3px] xs:tracking-[2.7px]"
										: "pb-2 xl:pb-3 hover:border-b-white/50 border-b-[3px] border-transparent ease duration-200 transition tracking-[2.3px] xs:tracking-[2.7px]"
								}>
								<p
									onClick={() => setCurrentPlanet(planet.name)}
									className='cursor-pointer'>
									{planet.name}
								</p>
							</div>
						))}
					</nav>
					<div className='max-w-[320px] mx-auto xs:max-w-[570px]  '>
						{data.destinations.map((planet, index) => {
							if (currentPlanet === planet.name) {
								return (
									<div key={index}>
										<h1 className='font-bellefair text-center text-white text-[3.5rem] xs:text-[5rem] uppercase xs:pt-2 xl:text-[6.25rem] xl:text-left'>
											{planet.name}
										</h1>
										<p className='font-barlow text-blue text-center text-[15px] xs:text-base leading-6 xs:leading-7 xl:text-lg xl:leading-8 xl:text-left'>
											{planet.description}
										</p>
										<div className='w-full bg-[#383b4b] h-[1px] my-8 xs:mt-12'></div>
										<div className='flex flex-col xs:flex-row  xs:justify-around xl:justify-start xl:gap-[80px]'>
											<div className='flex flex-col gap-3 mb-8'>
												<h2 className='text-blue uppercase font-barlow text-sm text-center xl:text-left '>
													avg. distance
												</h2>
												<p className='text-white uppercase font-bellefair text-[28px] text-center xl:text-left'>
													{planet.distance}
												</p>
											</div>
											<div className='flex flex-col gap-3'>
												<h2 className='text-blue uppercase font-barlow text-sm text-center xl:text-left'>
													est. travel time
												</h2>
												<p className='text-white uppercase font-bellefair text-[28px] text-center xl:text-left'>
													{planet.travel}
												</p>
											</div>
										</div>
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

export default destination;

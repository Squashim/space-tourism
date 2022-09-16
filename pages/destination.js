import Image from "next/image";
import React, { useState } from "react";
import data from "../json/data.json";

export const destination = () => {
	const [currentPlanet, setCurrentPlanet] = useState("Moon");

	const moon = data.destinations[0];
	const mars = data.destinations[1];
	const europa = data.destinations[2];
	const titan = data.destinations[3];

	return (
		<div className='w-full transition ease duration-100'>
			<h2 className=' text-base text-white uppercase font-barlowCondensed tracking-[2.7px] text-center max-w-[300px] mx-auto'>
				<span className='font-bold text-white/25 mr-4'>01</span>pick your
				destination
			</h2>

			<div className='flex items-center justify-center mt-8 mb-6 '>
				{data.destinations.map((planet, index) => {
					if (currentPlanet === planet.name) {
						return (
							<Image
								src={planet.images.png}
								key={index}
								width={170}
								height={170}
							/>
						);
					} else return;
				})}
			</div>

			<nav className='py-6 max-w-[300px]  mx-auto flex uppercase text-blue font-barlowCondensed text-sm text-center items-center justify-between'>
				{data.destinations.map((planet, index) => (
					<div
						key={index}
						className={
							currentPlanet === planet.name
								? "text-white border-b-[3px] pb-2 ease duration-200 transition tracking-[2.3px]"
								: "pb-2 border-b-[3px] border-transparent ease duration-200 transition tracking-[2.3px]"
						}>
						<p
							onClick={() => setCurrentPlanet(planet.name)}
							className='cursor-pointer'>
							{planet.name}
						</p>
					</div>
				))}
			</nav>

			<div className='max-w-[300px]'>
				{data.destinations.map((planet, index) => (
					<h1>{planet.name}</h1>
				))}
			</div>
		</div>
	);
};

export default destination;

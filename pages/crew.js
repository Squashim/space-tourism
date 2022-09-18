import React, { useState } from "react";
import data from "../json/data.json";
import Image from "next/image";

const Crew = () => {
	const [currentPerson, setCurrentPerson] = useState(data.crew[0].name);

	return (
		<div className='w-full transition ease duration-100  xl:px-[10rem]'>
			<h2 className='text-base text-white uppercase font-barlowCondensed tracking-[2.7px] text-center max-w-[320px] mx-auto xs:mt-10 xs:text-[1.25rem] xs:tracking-[3.3px] xs:text-left xs:max-w-full xl:max-w-[50%] xl:mx-0 xs:pl-9 xl:pl-0 xl:mt-[76px] xl:text-[28px] xl:tracking-[4.7px] mb-8 xl:mb-[48px]'>
				<span className='font-bold text-white/25 mr-4 xs:mr-[18px] xl:mr-[28px] '>
					02
				</span>
				meet your crew
			</h2>

			<div className='flex flex-col xl:flex-row  w-full xl:items-end'>
				<div className='relative xl:mx-0 mx-4 h-[222px] xs:order-2 xs:h-[532px] xl:h-[650px] xl:w-full xl:mt-[-5rem]'>
					{data.crew.map((person, index) => {
						if (currentPerson === person.name) {
							return (
								<>
									<Image
										src={person.images.png}
										key={index}
										alt={person.name}
										layout='fill'
										className='object-contain '
									/>
									<div className='w-full bg-[#383b4b] h-[1px] absolute bottom-0 xs:hidden'></div>
								</>
							);
						} else return;
					})}
				</div>
				<div className='flex flex-col xl:max-w-full w-full px-4 xs:px-0'>
					<nav className=' py-8 max-w-[320px] xl:max-w-[350px] w-full mx-auto flex items-center justify-center gap-4 xl:gap-[1.5rem] xl:mx-0 xs:order-2 xs:py-[40px] xl:pt-[120px] xl:justify-start'>
						{data.crew.map((person, index) => (
							<div
								onClick={() => setCurrentPerson(person.name)}
								key={index}
								className={
									currentPerson === person.name
										? "transition ease duration-100 w-[10px] xl:w-[15px] aspect-square bg-white rounded-full cursor-pointer "
										: "transition ease duration-100 w-[10px] xl:w-[15px] aspect-square bg-white/20 rounded-full cursor-pointer hover:bg-white/50"
								}></div>
						))}
					</nav>
					<div className=' mx-auto xs:max-w-[570px] xl:max-w-full xl:w-full'>
						{data.crew.map((person, index) => {
							if (currentPerson === person.name) {
								return (
									<div key={index}>
										<p className=' font-bellefair text-center text-white/50 text-base uppercase xs:text-[1.5rem] xl:text-[2rem] xl:text-left'>
											{person.role}
										</p>
										<h1 className='font-bellefair text-white text-center text-[1.5rem] uppercase mb-4 xl:mt-4 xs:text-[40px] xl:text-[56px] xl:text-left'>
											{person.name}
										</h1>

										<p className='xl:max-w-[450px] text-[15px] text-blue font-barlow text-center leading-[25px] xs:text-base xs:leading-[28px] xl:text-[18px] xl:text-left'>
											{person.bio}
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

export default Crew;

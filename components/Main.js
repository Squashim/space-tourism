import React from "react";
import ExploreBtn from "./ExploreBtn";

const Main = () => {
	return (
		<main className='relative p-6 lg:px-[10rem] flex lg:flex-row flex-col  text-center lg:text-left xs:pt-[6.625rem] pt-[3.625rem] xl:pt-[8rem] '>
			<div className='flex flex-col w-full items-center justify-center lg:flex-row lg:justify-between lg:items-end'>
				{/* Text */}
				<div className='max-w-[460px] w-full flex flex-col xs:gap-6 gap-4'>
					<p className='text-blue uppercase font-barlowCondensed text-[1rem] tracking-[2.7px] xs:text-[1.25rem]  xs:tracking-[3.38px] lg:text-[1.4rem]'>
						So, you want to travel to
					</p>
					<h1 className=' xs:text-[9.375rem] text-white uppercase text-[5rem] font-bellefair xs:leading-[9.375rem] leading-[6.25rem] '>
						Space
					</h1>
					<p className='font-barlow text-blue text-[0.93rem] xs:text-base xs:leading-[1.75rem] leading-[1.56rem] lg:leading-8 lg:text-[1.125rem]'>
						Let's face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we'll give you a truly out of this
						world experience!
					</p>
				</div>

				{/* Btn */}
				<ExploreBtn />
			</div>
		</main>
	);
};

export default Main;

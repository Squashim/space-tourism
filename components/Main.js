import React from "react";
import ExploreBtn from "./ExploreBtn";

const Main = () => {
	return (
		<div className=' relative p-6 flex flex-col lg:flex-row lg:px-[10rem] items-center justify-between '>
			<div className='flex flex-col items-center text-center lg:text-left  xs:min-w-[21rem] mx-auto lg:m-0'>
				<p className='text-blue uppercase font-barlowCondensed text-[1rem] tracking-[2px] xs:text-[1.25rem] xs:tracking-[3.38px] w-full lg:pl-2'>
					So, you want to travel to
				</p>
				<h1 className='xs:text-[9.375rem] text-white uppercase text-[5rem] font-bellefair xs:leading-[9.375rem] leading-[6.25rem] mt-4'>
					Space
				</h1>
				<p className='font-barlow text-blue text-[0.938rem] xs:text-base mt-4 leading-[1.563rem] lg:max-w-[28rem]'>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>

			<div className='flex items-center w-full lg:w-[50%] lg:justify-end  justify-center  mt-16 '>
				<ExploreBtn />
			</div>
		</div>
	);
};

export default Main;

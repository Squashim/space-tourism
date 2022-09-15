import React from "react";
import ExploreBtn from "./ExploreBtn";

const Main = () => {
	return (
		<div className='relative p-6 lg:px-[10rem] items-center flex h-[calc(100vh-144px)] justify-between '>
			<div className='max-w-[500px] w-full'>
				<p className='text-blue uppercase font-barlowCondensed text-[1rem] tracking-[2px] xs:text-[1.25rem] lg:pl-2 xs:tracking-[3.38px]  '>
					So, you want to travel to
				</p>
				<h1 className=' xs:text-[9.375rem] text-white uppercase text-[5rem] font-bellefair xs:leading-[9.375rem] leading-[6.25rem] '>
					Space
				</h1>
				<p className='font-barlow text-blue text-[0.938rem] xs:text-base mt-4 lg:pl-2 leading-[1.563rem] lg:max-w-[28rem]'>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>

			<div className='flex w-full lg:justify-end  mt-16 '>
				<ExploreBtn />
			</div>
		</div>
	);
};

export default Main;

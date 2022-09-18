import Link from "next/link";
import React from "react";

const ExploreBtn = () => {
	return (
		<Link href='/destination'>
			<button className='transition-all duration-200 ease-linear xs:mt-[9.75rem] mt-[5rem] flex items-center justify-center xs:w-[15.125rem] w-[9.375rem]  xl:w-[20rem] aspect-square bg-white rounded-full cursor-pointer hover:shadow-exploreBtnShadow '>
				<h4 className='font-bellefair text-[1.25rem] tracking-[1.25px] lg:tracking-[2px] xs:text-[2rem] uppercase text-dark '>
					explore
				</h4>
			</button>
		</Link>
	);
};

export default ExploreBtn;

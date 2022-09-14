import React from "react";

const ExploreBtn = () => {
	return (
		<button className='flex items-center justify-center xs:w-[15.125rem] min-w-[9.375rem] xl:w-[17.125rem] aspect-square bg-white rounded-full cursor-pointer  hover:shadow-exploreBtnShadow'>
			<h4 className='font-bellefair text-[1.25rem] tracking-[1.25px] xs:text-[2rem] uppercase text-dark '>
				explore
			</h4>
		</button>
	);
};

export default ExploreBtn;

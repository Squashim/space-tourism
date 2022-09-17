import { useState, useEffect } from "react";

export const useWindowSize = () => {
	const [width, setWidth] = useState();

	useEffect(() => {
		const updateWidth = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", updateWidth);
		updateWidth();

		return () => window.removeEventListener("resize", updateWidth);
	}, []);
	return width;
};

import { useLayoutEffect, useState } from "react";
import calcPageMinHeight from "../../utils/general/calcPageMinHeight";

function usePageMinHeight() {
	const [minHeight, setMinHeight] = useState(calcPageMinHeight());

	useLayoutEffect(() => {
		function handleResize() {
			setMinHeight(calcPageMinHeight());
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return minHeight;
}

export default usePageMinHeight;

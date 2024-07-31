import { useLayoutEffect, useRef } from "react";
import "./Overlay.css";

function Overlay({ show, className, children }) {
	const overlayRef = useRef();

	// Make the page fixed if a modal is opened
	useLayoutEffect(() => {
		document.body.classList.toggle("body--fixed", show);
	}, [show]);

	// Handling tab clicks inside a modal
	useLayoutEffect(() => {
		if (!show) return;

		// Select focusable elements
		const focusableElementsSelector =
			'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
		const focusableElements = overlayRef.current.querySelectorAll(focusableElementsSelector);
		const firstFocusableElement = focusableElements[0];
		const lastFocusableElement = focusableElements[focusableElements.length - 1];

		// Focus the first element automatically
		firstFocusableElement.focus();

		// Keydown event handler
		function handleTabClick(e) {
			if (e.key === "Tab") {
				e.preventDefault();

				// Shift + Tab
				if (e.shiftKey) {
					if (document.activeElement === firstFocusableElement) {
						lastFocusableElement.focus();
					}
					// Tab
				} else {
					if (document.activeElement === lastFocusableElement) {
						firstFocusableElement.focus();
					}
				}
			}
		}

		window.addEventListener("keydown", handleTabClick);

		return () => window.removeEventListener("keydown", handleTabClick);
	}, [show]);

	return (
		<div
			ref={overlayRef}
			className={`overlay${show ? " overlay--show" : ""}${className ? ` ${className}` : ""}`}>
			{children}
		</div>
	);
}

export default Overlay;

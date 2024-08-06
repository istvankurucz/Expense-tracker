export default function enableSubmitButton(buttonRef, setLoading) {
	setLoading(false);
	buttonRef.current.removeAttribute("disabled");
}

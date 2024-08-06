export default function disableSubmitButton(buttonRef, setLoading) {
	setLoading(true);
	buttonRef.current.setAttribute("disabled", "true");
}

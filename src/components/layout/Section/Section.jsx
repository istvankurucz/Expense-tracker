import Container from "../Container/Container";
import "./Section.css";

function Section({ id, variant = "primary", py = "2rem", className, children }) {
	return (
		<section id={id} style={{ "--py": py }} className={`section section--${variant}`}>
			<Container centered className={`section__container${className ? ` ${className}` : ""}`}>
				{children}
			</Container>
		</section>
	);
}

export default Section;

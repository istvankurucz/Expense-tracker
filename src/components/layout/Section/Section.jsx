import PropTypes from "prop-types";
import Container from "../Container/Container";
import "./Section.css";
import SectionTitle from "./SectionTitle/SectionTitle";

function Section({ id, variant = "primary", py = "2rem", className, children }) {
	return (
		<section id={id} style={{ "--py": py }} className={`section section--${variant}`}>
			<Container centered className={`section__container${className ? ` ${className}` : ""}`}>
				{children}
			</Container>
		</section>
	);
}

Section.propTypes = {
	id: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(["primary", "secondary", "accent"]),
	py: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Section.Title = SectionTitle;

export default Section;

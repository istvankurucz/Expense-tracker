import PropTypes from "prop-types";
import Section from "../Section";
import AlertSectionIcon from "./AlertSectionIcon/AlertSectionIcon";
import AlertSectionText from "./AlertSectionText/AlertSectionText";
import AlertSectionButton from "./AlertSectionButton/AlertSectionButton";
import "./AlertSection.css";

function AlertSection({ id, className, children }) {
	return (
		<Section id={id} className={`alertSection${className ? ` ${className}` : ""}`}>
			{children}
		</Section>
	);
}

AlertSection.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

AlertSection.Icon = AlertSectionIcon;
AlertSection.Text = AlertSectionText;
AlertSection.Button = AlertSectionButton;

export default AlertSection;

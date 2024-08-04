import PropTypes from "prop-types";
import Section from "../Section";
import AlertSectionIcon from "./AlertSectionIcon/AlertSectionIcon";
import AlertSectionText from "./AlertSectionText/AlertSectionText";
import AlertSectionButton from "./AlertSectionButton/AlertSectionButton";
import "./AlertSection.css";

function AlertSection({ className, children }) {
	return (
		<Section className={`alertSection${className ? ` ${className}` : ""}`}>{children}</Section>
	);
}

AlertSection.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

AlertSection.Icon = AlertSectionIcon;
AlertSection.Text = AlertSectionText;
AlertSection.Button = AlertSectionButton;

export default AlertSection;

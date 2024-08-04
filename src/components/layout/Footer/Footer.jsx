import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Brand from "../../ui/Brand/Brand";
import Container from "../Container/Container";

function Footer() {
	return (
		<footer className="footer">
			<Container className="footer__container">
				<Brand />
				<p className="footer__p">
					<FontAwesomeIcon icon={faCopyright} className="footer__copyright__icon" />
					Minden jog fenntartva. 2024
				</p>
			</Container>
		</footer>
	);
}

export default Footer;

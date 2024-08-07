import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import AlertSection from "../AlertSection/AlertSection";
import "./NoUser.css";

function NoUser() {
	return (
		<AlertSection id="noUser">
			<AlertSection.Icon icon={faUserSlash} />

			<AlertSection.Text>
				<p>Úgy tűnik nem vagy bejelentkezve. Kattints az alábbi gombra!</p>
			</AlertSection.Text>

			<AlertSection.Button link="/signin">Bejelentkezés</AlertSection.Button>
		</AlertSection>
	);
}

export default NoUser;

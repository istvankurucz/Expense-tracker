import { faBan } from "@fortawesome/free-solid-svg-icons";
import AlertSection from "../AlertSection/AlertSection";
import "./NoTransaction.css";

function NoTransaction() {
	return (
		<AlertSection id="noTransaction">
			<AlertSection.Icon icon={faBan} />

			<AlertSection.Text>
				<p>
					Még nincs egyetlen tranzakciód sem. Kattints az alábbi gombra és hozd létre az elsőt!
				</p>
			</AlertSection.Text>

			<AlertSection.Button link="/">Új tranzakció</AlertSection.Button>
		</AlertSection>
	);
}

export default NoTransaction;

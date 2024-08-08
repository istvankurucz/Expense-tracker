import { faBan } from "@fortawesome/free-solid-svg-icons";
import AlertSection from "../AlertSection/AlertSection";
import "./NoAccessToGroup.css";

function NoAccessToGroup() {
	return (
		<AlertSection id="noAccessToGroup">
			<AlertSection.Icon icon={faBan} />

			<AlertSection.Text>
				A csoport vagy nem létezik vagy nem vagy a tagja. Kattints az alábbi gombra és nézd meg
				a saját csoportjaid.
			</AlertSection.Text>

			<AlertSection.Button link="/groups">Csoportok</AlertSection.Button>
		</AlertSection>
	);
}

export default NoAccessToGroup;

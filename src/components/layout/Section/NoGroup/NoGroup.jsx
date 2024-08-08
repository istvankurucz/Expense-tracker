import { faUserLargeSlash } from "@fortawesome/free-solid-svg-icons";
import AlertSection from "../AlertSection/AlertSection";
import "./NoGroup.css";

function NoGroup() {
	return (
		<AlertSection id="noGroup">
			<AlertSection.Icon icon={faUserLargeSlash} />

			<AlertSection.Text>
				Még nem vagy egy csoportnak sem a tagja. Kattints a fent található gombok valamelyikére
				és csatlakozz egyhez vagy hozd létre a sajátod.
			</AlertSection.Text>
		</AlertSection>
	);
}

export default NoGroup;

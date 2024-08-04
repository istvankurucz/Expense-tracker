import { useState } from "react";
import Page from "../../components/layout/Page/Page";
import Section from "../../components/layout/Section/Section";
import TabSelect from "../../components/ui/TabSelect/TabSelect";
import { useStateValue } from "../../contexts/Context API/StateProvider";
import NoTransaction from "../../components/layout/Section/NoTransaction/NoTransaction";
import "./Home.css";
import NoUser from "../../components/layout/Section/NoUser/NoUser";

const reportItems = ["Hónap", "Kezdetektől"];

function Home() {
	// States
	const [{ user }] = useStateValue();
	const [index, setIndex] = useState(0);

	// Variables
	const firstname = user?.displayName.split(" ")[0];

	return (
		<Page className="home">
			<Section id="homeWelcome" py="1.5rem">
				<h2 className="home__title">Szia {firstname}!</h2>

				<TabSelect items={reportItems} index={index} setIndex={setIndex} />
			</Section>

			<NoTransaction />

			<NoUser />
		</Page>
	);
}

export default Home;

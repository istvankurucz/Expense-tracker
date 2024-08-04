import { useState } from "react";
import Page from "../../components/layout/Page/Page";
import Section from "../../components/layout/Section/Section";
import TabSelect from "../../components/ui/TabSelect/TabSelect";
import { useStateValue } from "../../contexts/Context API/StateProvider";
import UserLoading from "../../components/ui/UserLoading/UserLoading";
import NoUser from "../../components/layout/Section/NoUser/NoUser";
import "./Home.css";

const reportItems = ["Hónap", "Kezdetektől"];

function Home() {
	// States
	const [{ user, userLoading }] = useStateValue();
	const [index, setIndex] = useState(0);

	// Variables
	const firstname = user?.displayName.split(" ")[0];

	return (
		<Page className="home">
			<UserLoading />

			{!userLoading && user == null ? (
				<NoUser />
			) : (
				<>
					<Section id="homeWelcome" py="1.5rem">
						<h2 className="home__title">Szia {firstname}!</h2>
					</Section>

					<Section id="homeReport">
						<Section.Title>Aktuális egyenleg</Section.Title>

						<TabSelect items={reportItems} index={index} setIndex={setIndex} />
					</Section>

					<Section id="homeLastTransactions">
						<Section.Title>Legutóbbi tranzakciók</Section.Title>
					</Section>
				</>
			)}
		</Page>
	);
}

export default Home;

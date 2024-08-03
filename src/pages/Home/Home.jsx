import Section from "../../components/layout/Section/Section";
import { useStateValue } from "../../contexts/Context API/StateProvider";
import "./Home.css";

function Home() {
	// States
	const [{ user }] = useStateValue();

	// Variables
	const firstname = user?.displayName.split(" ")[0];

	return (
		<div className="home">
			<Section id="homeWelcome">
				<p className="home__welcome">Szia {firstname}!</p>
			</Section>
			<Section variant="secondary" id="homeWelcome">
				<p className="home__welcome">Szia {firstname}!</p>
			</Section>
			<Section variant="accent" id="homeWelcome">
				<p className="home__welcome">Szia {firstname}!</p>
			</Section>
		</div>
	);
}

export default Home;

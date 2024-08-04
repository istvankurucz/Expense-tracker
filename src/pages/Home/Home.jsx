import { useState } from "react";
import Page from "../../components/layout/Page/Page";
import Section from "../../components/layout/Section/Section";
import TabSelect from "../../components/ui/TabSelect/TabSelect";
import { useStateValue } from "../../contexts/Context API/StateProvider";
import UserLoading from "../../components/ui/UserLoading/UserLoading";
import NoUser from "../../components/layout/Section/NoUser/NoUser";
import "./Home.css";
import Chart from "../../components/ui/Chart/Chart";

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

						<Chart>
							<Chart.Bar
								width="3.33rem"
								variant="success"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="danger"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="success"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="danger"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="success"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="danger"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="success"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="danger"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="success"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								variant="danger"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
						</Chart>
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

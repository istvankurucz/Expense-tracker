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
	const [showCaption, setShowCaption] = useState(true);

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

						<Chart type="bar" justify="flex-start">
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

						<button onClick={() => setShowCaption((show) => !show)}>
							{showCaption ? "Hide" : "Show"} caption
						</button>
						<Chart
							type="pie"
							justify="center"
							size="16rem"
							offset={showCaption ? "3rem" : "0"}>
							<Chart.Pie
								variant="category-salary"
								fromDegree={0}
								degree={360 / 11}
								name="Fizetés"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-interest"
								fromDegree={360 / 11}
								degree={360 / 11}
								name="Kamat"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-food"
								fromDegree={(2 * 360) / 11}
								degree={360 / 11}
								name="Élelmiszer"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-entertainment"
								fromDegree={(3 * 360) / 11}
								degree={360 / 11}
								name="Szórakozás"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-health"
								fromDegree={(4 * 360) / 11}
								degree={360 / 11}
								name="Egészség"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-housing"
								fromDegree={(5 * 360) / 11}
								degree={360 / 11}
								name="Háztarttás"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-utilities"
								fromDegree={(6 * 360) / 11}
								degree={360 / 11}
								name="Számlák"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-transportation"
								fromDegree={(7 * 360) / 11}
								degree={360 / 11}
								name="Közlekedés"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-clothing"
								fromDegree={(8 * 360) / 11}
								degree={360 / 11}
								name="Ruházat"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-education"
								fromDegree={(9 * 360) / 11}
								degree={360 / 11}
								name="Tanulmányok"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								variant="category-other"
								fromDegree={(10 * 360) / 11}
								degree={360 / 11}
								name="Egyéb"
								value="45%"
								showCaption={showCaption}
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

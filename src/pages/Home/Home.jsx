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
const pieLegend = [
	{
		color: "red",
		text: "red",
	},
	{
		color: "blue",
		text: "blue",
	},
	{
		color: "green",
		text: "green",
	},
];

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
								color="var(--success-color)"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--danger-color)"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--success-color)"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--danger-color)"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--success-color)"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--danger-color)"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--success-color)"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--danger-color)"
								height={100}
								name="Kiadás"
								value="100 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--success-color)"
								height={50}
								name="Bevétel"
								value="50 Ft"
							/>
							<Chart.Bar
								width="3.33rem"
								color="var(--danger-color)"
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
							offset={showCaption ? "3rem" : "0"}
							legend={pieLegend}>
							<Chart.Pie
								color="var(--category-salary-color)"
								fromDegree={0}
								degree={360 / 11}
								name="Fizetés"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-interest-color)"
								fromDegree={360 / 11}
								degree={360 / 11}
								name="Kamat"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-food-color)"
								fromDegree={(2 * 360) / 11}
								degree={360 / 11}
								name="Élelmiszer"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-entertainment-color)"
								fromDegree={(3 * 360) / 11}
								degree={360 / 11}
								name="Szórakozás"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-health-color)"
								fromDegree={(4 * 360) / 11}
								degree={360 / 11}
								name="Egészség"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-housing-color)"
								fromDegree={(5 * 360) / 11}
								degree={360 / 11}
								name="Háztarttás"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-utilities-color)"
								fromDegree={(6 * 360) / 11}
								degree={360 / 11}
								name="Számlák"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-transportation-color)"
								fromDegree={(7 * 360) / 11}
								degree={360 / 11}
								name="Közlekedés"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-clothing-color)"
								fromDegree={(8 * 360) / 11}
								degree={360 / 11}
								name="Ruházat"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-education-color)"
								fromDegree={(9 * 360) / 11}
								degree={360 / 11}
								name="Tanulmányok"
								value="45%"
								showCaption={showCaption}
							/>
							<Chart.Pie
								color="var(--category-other-color)"
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

import { useState } from "react";
import SwitchSelect from "../../components/form/SwitchSelect/SwitchSelect";
import Page from "../../components/layout/Page/Page";
import Section from "../../components/layout/Section/Section";
import Input from "../../components/form/Input/Input";
import Textarea from "../../components/form/Textarea/Textarea";
import Button from "../../components/ui/Button/Button";
import CategorySelect from "../../components/form/Select/CategorySelect/CategorySelect";
import categories from "../../assets/categories";
import "./NewTransaction.css";
import { Link } from "react-router-dom";
import Select from "../../components/form/Select/Select";

const typeSelectItems = [
	{
		type: "expense",
		text: "Kiadás",
	},
	{
		type: "income",
		text: "Bevétel",
	},
];

const groupSelectItems = ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"];

function NewTransaction() {
	// States
	const [typeIndex, setTypeIndex] = useState(0);
	const [categoryIndex, setCategoryIndex] = useState(0);
	const [groupIndex, setGroupIndex] = useState(0);

	// Variables
	const maxWidth = "600px";
	const validCategories = categories.filter(
		(category) => category.type === typeSelectItems[typeIndex].type
	);
	const defaultDate = new Date().toLocaleDateString().replaceAll(".", "").replaceAll(" ", "-");

	return (
		<Page className="newTransaction">
			<Section maxWidth={maxWidth} id="newTransactionWelcome">
				<Page.Title>Új {typeSelectItems[typeIndex].text}</Page.Title>

				<SwitchSelect
					items={typeSelectItems.map((item) => item.text)}
					index={typeIndex}
					setIndex={setTypeIndex}
					className="newTransaction__type__select"
				/>
			</Section>

			<form>
				<Section maxWidth={maxWidth} id="newTransactionData">
					<Section.Title>Adatok</Section.Title>

					<div className="newTransaction__inputs">
						<CategorySelect
							items={validCategories}
							label="Kategória"
							index={categoryIndex}
							setIndex={setCategoryIndex}
						/>
						<Input
							label="Megnevezés"
							type="text"
							placeholder="Pl. Lidl bevásárlás"
							id="newTransactionName"
							fullW
							required
						/>
						<Input
							label="Összeg"
							type="number"
							placeholder="Ft"
							min={0}
							id="newTransactionAmount"
							fullW
							required
						/>
						<Input
							label="Dátum"
							type="date"
							id="newTransactionDate"
							defaultValue={defaultDate}
							fullW
							required
						/>

						<Textarea
							label="Megjegyzés"
							id="newTransactionComment"
							placeholder="Bármilyen gondolat, amit fontos feljegyezni"
							rows={3}
							fullW
						/>
					</div>
				</Section>

				<Section maxWidth={maxWidth} variant="secondary" id="newTransactionSelectGroup">
					<Section.Title>Csoport megadása</Section.Title>

					<Select
						label="Csoport"
						id="newTransactionGroup"
						items={groupSelectItems}
						index={groupIndex}
						setIndex={setGroupIndex}
						required
					/>
				</Section>

				<Section maxWidth={maxWidth} id="newTransactionSubmit">
					<Link to="/">
						<Button variant="info" outlined tabIndex={-1}>
							Mégse
						</Button>
					</Link>
					<Button variant="accent" type="submit">
						Mentés
					</Button>
				</Section>
			</form>
		</Page>
	);
}

export default NewTransaction;

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../contexts/Context API/StateProvider";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import SwitchSelect from "../../components/form/SwitchSelect/SwitchSelect";
import Page from "../../components/layout/Page/Page";
import Section from "../../components/layout/Section/Section";
import Input from "../../components/form/Input/Input";
import Textarea from "../../components/form/Textarea/Textarea";
import Button from "../../components/ui/Button/Button";
import CategorySelect from "../../components/form/Select/CategorySelect/CategorySelect";
import categories from "../../assets/categories";
import Select from "../../components/form/Select/Select";
import Spinner from "../../components/ui/Spinner/Spinner";
import UserLoading from "../../components/ui/UserLoading/UserLoading";
import NoUser from "../../components/layout/Section/NoUser/NoUser";
import disableSubmitButton from "../../utils/form/disableSubmitButton";
import enableSubmitButton from "../../utils/form/enableSubmitButton";
import "./NewTransaction.css";

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
	const [{ user, userLoading }, dispatch] = useStateValue();
	const [typeIndex, setTypeIndex] = useState(0);
	const [categoryIndex, setCategoryIndex] = useState(0);
	const [groupIndex, setGroupIndex] = useState(0);
	const [loading, setLoading] = useState(false);

	// Refs
	const nameRef = useRef();
	const amountRef = useRef();
	const dateRef = useRef();
	const commentRef = useRef();
	const submitButtonRef = useRef();

	const navigate = useNavigate();

	// Variables
	const maxWidth = "600px";
	const validCategories = categories.filter(
		(category) => category.type === typeSelectItems[typeIndex].type
	);
	const defaultDate = new Date().toLocaleDateString().replaceAll(".", "").replaceAll(" ", "-");

	// Functions
	function getFormData() {
		const type = typeSelectItems[typeIndex].type;
		const category = validCategories[categoryIndex].name;
		const name = nameRef.current.value;
		const amount = amountRef.current.valueAsNumber;
		const date = new Date(dateRef.current.value);
		const comment = commentRef.current.value;
		const group = null;

		return { type, category, name, amount, date, comment, group };
	}

	async function saveTransaction(e) {
		e.preventDefault();

		// Disable submit button
		disableSubmitButton(submitButtonRef, setLoading);

		// 1. Get form data
		const formData = getFormData();

		try {
			// 2. Save the transaction
			const transactionsRef = collection(db, `users/${user.uid}/transactions`);
			await addDoc(transactionsRef, {
				type: formData.type,
				category: formData.category,
				name: formData.name,
				date: Timestamp.fromDate(formData.date),
				amount: formData.amount,
				comment: formData.comment,
				group: formData.group,
			});

			// Enable submit button
			enableSubmitButton(submitButtonRef, setLoading);

			// Show feedback
			dispatch({
				type: "SET_FEEDBACK",
				feedback: {
					show: true,
					type: "success",
					message: "Sikeres mentés.",
					details: "",
				},
			});

			// Naviget to home page
			navigate("/");
		} catch (e) {
			console.log("Error saving the transaction.", e);

			enableSubmitButton(submitButtonRef, setLoading);
		}
	}

	return (
		<Page className="newTransaction">
			<UserLoading />

			{(user == null) & !userLoading ? (
				<NoUser />
			) : (
				<>
					<Section maxWidth={maxWidth} id="newTransactionWelcome">
						<Page.Title>Új {typeSelectItems[typeIndex].text}</Page.Title>

						<SwitchSelect
							items={typeSelectItems.map((item) => item.text)}
							index={typeIndex}
							setIndex={setTypeIndex}
							className="newTransaction__type__select"
						/>
					</Section>

					<form onSubmit={saveTransaction}>
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
									ref={nameRef}
								/>
								<Input
									label="Összeg"
									type="number"
									placeholder="Ft"
									min={0}
									id="newTransactionAmount"
									fullW
									required
									ref={amountRef}
								/>
								<Input
									label="Dátum"
									type="date"
									id="newTransactionDate"
									defaultValue={defaultDate}
									fullW
									required
									ref={dateRef}
								/>

								<Textarea
									label="Megjegyzés"
									id="newTransactionComment"
									placeholder="Bármilyen gondolat, amit fontos feljegyezni"
									rows={3}
									fullW
									ref={commentRef}
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
							<Button type="submit" variant="accent" ref={submitButtonRef}>
								{loading ? <Spinner variant="primary" text="Mentés" /> : "Mentés"}
							</Button>
						</Section>
					</form>
				</>
			)}
		</Page>
	);
}

export default NewTransaction;

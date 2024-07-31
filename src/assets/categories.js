import {
	faAppleWhole,
	faBookOpen,
	faCarSide,
	faClapperboard,
	faEllipsis,
	faHospital,
	faHouse,
	faMoneyBills,
	faPercent,
	faReceipt,
	faShirt,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
	{
		type: "income",
		name: "salary",
		text: "fizetés",
		icon: faMoneyBills,
		colors: {
			text: "var(--category-salary-color)",
			bg: "var(--category-salary-color-light)",
		},
	},
	{
		type: "income",
		name: "interest",
		text: "kamat",
		icon: faPercent,
		colors: {
			text: "var(--category-interest-color)",
			bg: "var(--category-interest-color-light)",
		},
	},
	{
		type: "expense",
		name: "food",
		text: "élelmiszer",
		icon: faAppleWhole,
		colors: {
			text: "var(--category-food-color)",
			bg: "var(--category-food-color-light)",
		},
	},
	{
		type: "expense",
		name: "entertainment",
		text: "szórakozás",
		icon: faClapperboard,
		colors: {
			text: "var(--category-entertainment-color)",
			bg: "var(--category-entertainment-color-light)",
		},
	},
	{
		type: "expense",
		name: "health",
		text: "egészség",
		icon: faHospital,
		colors: {
			text: "var(--category-health-color)",
			bg: "var(--category-health-color-light)",
		},
	},
	{
		type: "expense",
		name: "housing",
		text: "háztartás",
		icon: faHouse,
		colors: {
			text: "var(--category-housing-color)",
			bg: "var(--category-housing-color-light)",
		},
	},
	{
		type: "expense",
		name: "utilities",
		text: "számlák",
		icon: faReceipt,
		colors: {
			text: "var(--category-utilities-color)",
			bg: "var(--category-utilities-color-light)",
		},
	},
	{
		type: "expense",
		name: "transportation",
		text: "közelkedés",
		icon: faCarSide,
		colors: {
			text: "var(--category-transportation-color)",
			bg: "var(--category-transportation-color-light)",
		},
	},
	{
		type: "expense",
		name: "clothing",
		text: "ruházat",
		icon: faShirt,
		colors: {
			text: "var(--category-clothing-color)",
			bg: "var(--category-clothing-color-light)",
		},
	},
	{
		type: "expense",
		name: "education",
		text: "tanulmány",
		icon: faBookOpen,
		colors: {
			text: "var(--category-education-color)",
			bg: "var(--category-education-color-light)",
		},
	},
	{
		type: "expense",
		name: "other",
		text: "egyéb",
		icon: faEllipsis,
		colors: {
			text: "var(--category-other-color)",
			bg: "var(--category-other-color-light)",
		},
	},
];

export default Object.freeze(categories);

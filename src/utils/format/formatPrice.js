export default function formatPrice(amount) {
	const priceFormatter = new Intl.NumberFormat(undefined, {
		style: "currency",
		currency: "HUF",
		currencyDisplay: "symbol",
		maximumFractionDigits: 0,
	});

	return priceFormatter.format(amount);
}

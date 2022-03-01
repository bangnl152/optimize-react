import { useSelector } from "react-redux";

const getExchangeRates = (state, coin) => state.exchangeRates[coin];

export const useExchangeRate = (coin) => {
	const rates = useSelector((state) => getExchangeRates(state, coin));
	return rates ?? 0;
};

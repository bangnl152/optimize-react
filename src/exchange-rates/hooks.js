import { useSelector } from "react-redux";

const getExchangeRate = (state, coin) => state.exchangeRates[coin];
const getExchangeRates = (state) => state.exchangeRates;

export const useExchangeRate = (coin) => {
	const rates = useSelector((state) => getExchangeRate(state, coin));
	return rates ?? 0;
};

export const useExchangeRates = () => useSelector(getExchangeRates);

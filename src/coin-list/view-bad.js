import { keysIn } from "lodash";
import React from "react";
import { ScrollView } from "react-native";
import { ListItem } from "@react-native-material/core";

import { useExchangeRates } from "../exchange-rates/hooks";

const CoinItem = ({ coin, exchangeRate }) => {
	console.log(new Date().toLocaleTimeString(), "Render CoinItemBad", coin);
	return <ListItem title={coin} secondaryText={`${exchangeRate}`} />;
};

const CoinListScreenBad = () => {
	const exchangeRates = useExchangeRates();
	console.log(new Date().toLocaleTimeString(), "Render CoinListScreenBad");
	return (
		<ScrollView>
			{keysIn(exchangeRates).map((key, index) => (
				<CoinItem
					key={`${key}-${index}`}
					coin={key}
					exchangeRate={exchangeRates[key]}
				/>
			))}
		</ScrollView>
	);
};

export default CoinListScreenBad;

import { keysIn } from "lodash";
import React from "react";
import { ScrollView, View } from "react-native";
import { ListItem } from "@react-native-material/core";

import { exchangeRateKeys } from "../exchange-rates/sagas";
import { useExchangeRate } from "../exchange-rates/hooks";

const CoinItem = ({ coin }) => {
	console.log("Render CoinItemGood", coin, new Date().toISOString());
	const exchangeRate = useExchangeRate(coin);
	return <ListItem title={coin} secondaryText={`${exchangeRate}`} />;
};

const CoinListScreenGood = () => {
	console.log("Render CoinListScreenGood", new Date().toISOString());
	return (
		<ScrollView>
			{exchangeRateKeys.map((coin, index) => (
				<CoinItem key={`${coin}-${index}`} coin={coin} />
			))}
		</ScrollView>
	);
};

export default CoinListScreenGood;

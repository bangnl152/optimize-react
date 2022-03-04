import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Divider, Text, VStack } from "@react-native-material/core";
import { useExchangeRate } from "../exchange-rates/hooks";
import { useOffer, useOfferIds } from "./hooks";

const Price = ({ amount, coin }) => {
	const exchangeRate = useExchangeRate(coin);
	const price = amount * exchangeRate;

	console.log("Render OfferPriceGood", coin, new Date().toISOString());

	return <Text>Price: {price}</Text>;
};

const OfferItem = ({ id }) => {
	const { coin, amount } = useOffer(id);

	console.log("Render OfferItemGood", id, coin, new Date().toISOString());

	return (
		<View key={id}>
			<VStack m={4} spacing={2}>
				<Text>ID: {id}</Text>
				<Text>Coin: {coin}</Text>
				<Text>Amount: {amount}</Text>
				<Price amount={amount} coin={coin} />
			</VStack>
			<Divider />
		</View>
	);
};

const OfferListScreenGood = () => {
	const offerIds = useOfferIds();

	console.log("Render OfferListScreenGood", new Date().toISOString());

	return (
		<ScrollView>
			{offerIds.map((offerId) => {
				return <OfferItem key={offerId} id={offerId} />;
			})}
		</ScrollView>
	);
};

export default OfferListScreenGood;

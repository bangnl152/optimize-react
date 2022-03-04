import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { Divider, Text, VStack } from "@react-native-material/core";
import { useExchangeRate } from "../exchange-rates/hooks";
import { useOffer, useOfferIds } from "./hooks";
import {
	DataProvider,
	LayoutProvider,
	RecyclerListView,
} from "recyclerlistview";

const Price = ({ amount, coin }) => {
	const exchangeRate = useExchangeRate(coin);
	const price = amount * exchangeRate;

	console.log("Render OfferPriceMobile", coin, new Date().toISOString());

	return <Text>Price: {price}</Text>;
};

const OfferItem = ({ id }) => {
	const { coin, amount } = useOffer(id);

	console.log("Render OfferItemMobile", id, coin, new Date().toISOString());

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

const OfferListScreenMobile = () => {
	const offerIds = useOfferIds();
	let { width } = Dimensions.get("window");

	const [dataProvider, setDataProvider] = useState(
		new DataProvider((r1, r2) => {
			return r1 !== r2;
		}),
	);
	const [layoutProvider] = useState(
		new LayoutProvider(
			(_) => "item",
			(_, dim) => {
				dim.width = width;
				dim.height = 120;
			},
		),
	);

	const rowRenderer = useCallback((_, data) => {
		return <OfferItem id={data} />;
	});

	useEffect(() => {
		setDataProvider(dataProvider.cloneWithRows(offerIds));
	}, [offerIds]);

	console.log("Render OfferListScreenMobile", new Date().toISOString());

	return (
		<RecyclerListView
			layoutProvider={layoutProvider}
			dataProvider={dataProvider}
			rowRenderer={rowRenderer}
		/>
	);
};

export default OfferListScreenMobile;

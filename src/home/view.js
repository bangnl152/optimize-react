import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Stack, Button, Text } from "@react-native-material/core";

import { fetchOffers } from "../offer-list/actions";
import { fetchExchangeRates } from "../exchange-rates/actions";

import { useOffersCount } from "../offer-list/hooks";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const offersCount = useOffersCount();

	useEffect(() => {
		dispatch(fetchOffers());
		dispatch(fetchExchangeRates(true));
	}, []);

	return (
		<Stack fill center spacing={4}>
			<Text>Offers: {offersCount}</Text>
			<Button title="Fetch Offers" onPress={() => dispatch(fetchOffers())} />
			<Button
				title="Fetch Exchange Rates"
				onPress={() => dispatch(fetchExchangeRates())}
			/>
		</Stack>
	);
};

export default HomeScreen;

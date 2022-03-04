import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ListItem } from "@react-native-material/core";

import { exchangeRateKeys } from "../exchange-rates/sagas";
import { useExchangeRate } from "../exchange-rates/hooks";
import {
	DataProvider,
	LayoutProvider,
	RecyclerListView,
} from "recyclerlistview";
import { Dimensions } from "react-native";

const CoinItem = ({ coin }) => {
	console.log("Render CoinItemMobile", coin, new Date().toISOString());
	const exchangeRate = useExchangeRate(coin);
	return <ListItem title={coin} secondaryText={`${exchangeRate}`} />;
};

const CoinListScreenMobile = () => {
	const [dataProvider, setDataProvider] = useState(
		new DataProvider((r1, r2) => {
			return r1 !== r2;
		}),
	);
	const [layoutProvider] = useState(
		new LayoutProvider(
			(_) => "item",
			(_, dim) => {
				let { width } = Dimensions.get("window");
				dim.width = width;
				dim.height = 70;
			},
		),
	);

	const rowRenderer = useCallback((_, data) => {
		return <CoinItem coin={data} />;
	});

	useEffect(() => {
		setDataProvider(dataProvider.cloneWithRows(exchangeRateKeys));
	}, []);

	console.log("Render CoinListScreenMobile", new Date().toISOString());
	return (
		<RecyclerListView
			layoutProvider={layoutProvider}
			dataProvider={dataProvider}
			rowRenderer={rowRenderer}
		/>
	);
};

export default CoinListScreenMobile;

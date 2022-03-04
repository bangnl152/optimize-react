import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@react-native-material/core";

import HomeScreen from "./home/view";
import CoinListScreenBad from "./coin-list/view-bad";
import CoinListScreenGood from "./coin-list/view-good";
import CoinListScreenMobile from "./coin-list/view-mobile";
import OfferListScreenBad from "./offer-list/view-bad";
import OfferListScreenMobile from "./offer-list/view-mobile";
import OfferListScreenGood from "./offer-list/view-good";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarIcon: ({}) => {
						return <Icon name="home" size={24} />;
					},
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Coin Bad" component={CoinListScreenBad} />
				<Tab.Screen name="Coin Good" component={CoinListScreenGood} />
				<Tab.Screen name="Coin Mobile" component={CoinListScreenMobile} />
				<Tab.Screen name="Offers Bad" component={OfferListScreenBad} />
				<Tab.Screen name="Offers Good" component={OfferListScreenGood} />
				<Tab.Screen name="Offers Mobile" component={OfferListScreenMobile} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home/view";
import ListScreen from "./list/view";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="List 1" component={ListScreen} />
				<Tab.Screen name="List 2" component={ListScreen} />
				<Tab.Screen name="List 3" component={ListScreen} />
				<Tab.Screen name="List 4" component={ListScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;

import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import mainSaga from "./main_saga";
import mainReducer from "./main_reducer";
import MainNavigator from "./main_navigator";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
	const createDebugger = require("redux-flipper").default;
	middlewares.push(createDebugger());
}
const rootReducer = combineReducers(mainReducer);
const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(mainSaga);

const App = () => {
	return (
		<Provider store={store}>
			<IconComponentProvider IconComponent={MaterialCommunityIcons}>
				<MainNavigator />
			</IconComponentProvider>
		</Provider>
	);
};

export default App;

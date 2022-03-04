import { all } from "redux-saga/effects";
import { watchExchangeRates } from "./exchange-rates";
import { watchOfferList } from "./offer-list";

function* mainSaga() {
	const sagas = new Set([watchExchangeRates, watchOfferList]);

	yield all([...sagas].map((saga) => saga()));
}

export default mainSaga;

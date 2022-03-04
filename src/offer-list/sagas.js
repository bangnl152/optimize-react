import { random, range, sample } from "lodash";
import { put, takeLatest } from "redux-saga/effects";
import { exchangeRateKeys } from "../exchange-rates/sagas";
import { fetchOffers, updateOffers } from "./actions";

var lastId = 0;

function* handleFetchOffers() {
	const offers = range(random(5, 20)).map(() => {
		lastId++;
		return {
			id: lastId,
			coin: sample(exchangeRateKeys),
			username: `bangnguyen${lastId}`,
			amount: random(1, 10000),
		};
	});
	yield put(updateOffers({ offers }));
}

export default function* saga() {
	yield takeLatest(fetchOffers, handleFetchOffers);
}

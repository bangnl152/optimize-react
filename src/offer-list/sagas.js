import { random, range, sample } from "lodash";
import { put, takeLatest } from "redux-saga/effects";
import { exchangeRateKeys } from "../exchange-rates/sagas";
import { createOffer, fetchOffers, updateOffers } from "./actions";

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

function* handleCreateOffer() {
	const offers = range(random(1, 3)).map(() => {
		lastId++;
		return {
			id: lastId,
			coin: sample(exchangeRateKeys),
			username: `bangnguyen${lastId}`,
			amount: random(1, 10000),
		};
	});
	yield put(updateOffers({ offers, newOffer: true }));
}

export default function* saga() {
	yield takeLatest(fetchOffers, handleFetchOffers);
	yield takeLatest(createOffer, handleCreateOffer);
}

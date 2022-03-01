import { random, sampleSize } from "lodash";
import { put, takeEvery } from "redux-saga/effects";
import { fetchExchangeRates, updateExchangeRates } from "./actions";

const exchangeRateKeys = [
	"btc",
	"eth",
	"bch",
	"xrp",
	"ltc",
	"trx",
	"ada",
	"bnb",
	"eos",
	"xlm",
	"link",
	"xmr",
	"neo",
];

function* handleFetchExchangeRates() {
	const exchangeRates = {};
	const totalCoins = exchangeRateKeys.length;
	const totalUpdate = random(1, totalCoins);
	const updatingKeys = sampleSize(exchangeRateKeys, totalUpdate);
	for (const key in updatingKeys) {
		exchangeRates[key] = random(10000, true);
	}
	yield put(updateExchangeRates(exchangeRates));
}

export default function* saga() {
	yield takeEvery(fetchExchangeRates, handleFetchExchangeRates);
}

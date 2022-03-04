import { random, round, sampleSize } from "lodash";
import { put, takeEvery } from "redux-saga/effects";
import { fetchExchangeRates, updateExchangeRates } from "./actions";

export const exchangeRateKeys = [
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
	"btc1",
	"eth1",
	"bch1",
	"xrp1",
	"ltc1",
	"trx1",
	"ada1",
	"bnb1",
	"eos1",
	"xlm1",
	"link1",
	"xmr1",
	"neo1",
];

function* handleFetchExchangeRates({ payload }) {
	const exchangeRates = {};
	const totalCoins = exchangeRateKeys.length;
	const totalUpdate = payload ? totalCoins : random(1, round(totalCoins / 2));
	const updatingKeys = sampleSize(exchangeRateKeys, totalUpdate);
	for (const key of updatingKeys) {
		exchangeRates[key] = random(10000, true);
	}
	yield put(updateExchangeRates(exchangeRates));
}

export default function* saga() {
	yield takeEvery(fetchExchangeRates, handleFetchExchangeRates);
}

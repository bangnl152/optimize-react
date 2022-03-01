import { all } from "redux-saga/effects";

function* mainSaga() {
	const sagas = new Set([]);

	yield all([...sagas].map((saga) => saga()));
}

export default mainSaga;

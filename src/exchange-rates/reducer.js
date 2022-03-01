import { handleActions } from "redux-actions";
import { updateExchangeRates } from "./actions";

const initialState = {};

const reducer = handleActions(
	{
		[updateExchangeRates](state, { payload }) {
			return {
				...state,
				...payload,
			};
		},
	},
	initialState,
);

export default reducer;

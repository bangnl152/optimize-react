import { set, uniq } from "lodash";
import { handleActions } from "redux-actions";
import { updateOffers } from "./actions";

const initState = {
	offerMap: {},
	offerIds: [],
};

const reducer = handleActions(
	{
		[updateOffers](state, { payload }) {
			const { offers, newOffer } = payload;
			const offerMap = state.offerMap;
			const offerIds = state.offerIds;
			for (const offer of offers) {
				offerMap[offer.id] = offer;
				if (newOffer) {
					offerIds.unshift(offer.id);
				} else {
					offerIds.push(offer.id);
				}
			}
			return {
				...state,
				offerMap,
				offerIds: uniq(offerIds),
			};
		},
	},
	initState,
);

export default reducer;

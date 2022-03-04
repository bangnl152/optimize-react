import { useSelector } from "react-redux";

const getOfferMap = (state) => state.offerList.offerMap;
const getOffer = (state, id) => state.offerList.offerMap[id];
const getOfferIds = (state) => state.offerList.offerIds;
const getOffersCount = (state) => getOfferIds(state).length;

export const useOffersCount = () => useSelector(getOffersCount);
export const useOfferIds = () => useSelector(getOfferIds);
export const useOfferMap = () => useSelector(getOfferMap);
export const useOffer = (id) => useSelector((state) => getOffer(state, id));

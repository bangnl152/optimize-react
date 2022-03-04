import { useSelector } from "react-redux";

const getOffersCount = (state) => state.offerList.offerIds.length;

export const useOffersCount = () => useSelector(getOffersCount);

import {BidWithTotal} from "../typings/interfaces";
import sortBy from "lodash.sortby";

export default function calculateSpread(bids: BidWithTotal[], asks: BidWithTotal[]): string{
    let sortedBid = sortBy(bids, "price");
    let sortedAsk = sortBy(asks, "price");
    let spread = (sortedAsk[0]?.price - sortedBid[bids.length-1]?.price).toLocaleString('en-US', { minimumFractionDigits: 1 })
    let percentage = ((100-(100/(sortedAsk[0]?.price / sortedBid[bids.length-1]?.price)))).toLocaleString('en-US', { minimumFractionDigits: 2 })
    return `${spread} (${percentage}%)`;
}
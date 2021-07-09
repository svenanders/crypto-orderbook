import cn from "classnames";
import styles from "../../styles/Orderbook.module.css";
import {BidWithTotal} from "../typings/interfaces";
import Entry from "./bidEntry";

type Props = {
    entries: BidWithTotal[];
    reverse: boolean;
    depth: number;
}

function Bids({entries, reverse, depth}: Props) {
    let highestTotal = entries[depth - 1]?.total;

    return (
        <div className={cn({
            [styles.asks]: reverse,
            [styles.bids]: !reverse
        })}>
            {entries.map((bid, index) =>
                index < depth &&
							<Entry key={`${index}${bid.price}`} highestTotal={highestTotal} reverse={reverse} bid={bid}/>)}
        </div>
    );
}

export default Bids;
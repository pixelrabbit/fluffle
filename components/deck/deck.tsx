import styles from "./deck.module.css";
import Card from "../card/card";

export default function Deck() {
    return (
        <div className={styles.deck}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}

import styles from "./deck.module.css";
import { Card, cardProps } from "../card/card";

export interface deckProps {
    heading?: string,
    content?: string,
    cards?: cardProps[]
}

export default function Deck({
    heading,
    content,
    cards = []
}: deckProps) {
    return (
        <div className={styles.deck}>
            <div className={styles.header}>
                <h2>{heading}</h2> 
                {content}
            </div>
            <div className={styles.main}>
                {cards.map((card, i) => (
                    <Card key={`card${i}`} heading={card.heading}><p>Quis et amet eiusmod nostrud. Quis fugiat magna aliquip veniam duis ut quis.</p></Card>
                ))}
            </div>
            <div className={styles.footer}>
                <p>In voluptate minim ea dolore cillum deserunt.</p>
            </div>
        </div>
    );
}

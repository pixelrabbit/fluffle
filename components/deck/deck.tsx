import styles from "./deck.module.css";
import Card from "../card/card";

export default function Deck({
    heading,
    content
}:{
    heading?: string,
    content?: string
}) {
    const sanity = {
        buttons: [{
            text:"Sanity",
            href:"https://www.sanity.io/",
            target: "_blank" 
        },{
            text:"Test",
            href:"https://www.sanity.io/",
            target: "_blank" 
        }]
    }
    return (
        <div className={styles.deck}>
            <div className={styles.header}>
                <h2>{heading}</h2>
                {content}
            </div>
            <div className={styles.main}>
                <Card heading="NextJS"><p>Quis et amet eiusmod nostrud. Quis fugiat magna aliquip veniam duis ut quis.</p></Card>
                <Card heading="React"><p>Quis et amet eiusmod nostrud. Quis fugiat magna aliquip veniam duis ut quis.</p></Card>
                <Card heading="Vercel"><p>Quis et amet eiusmod nostrud. Quis fugiat magna aliquip veniam duis ut quis.</p></Card>
                <Card heading="Storybook"><p>Quis et amet eiusmod nostrud. Quis fugiat magna aliquip veniam duis ut quis.</p></Card>
                <Card heading="Chromatic"><p>Quis et amet eiusmod nostrud. Quis fugiat magna aliquip veniam duis ut quis.</p></Card>
                <Card heading="Sanity" buttons={sanity.buttons}><p>Quis et amet eiusmod nostrud. Quis fugiat magna aliquip veniam duis ut quis.</p></Card>
            </div>
            <div className={styles.footer}>
                <p>In voluptate minim ea dolore cillum deserunt.</p>
            </div>
        </div>
    );
}

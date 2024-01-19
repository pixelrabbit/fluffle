import Button from "./../button/button";
import styles from "./card.module.css";
import { clsx } from 'clsx';

export default function Card() {
    return (
        <div className={clsx(styles.card)}>
            <div className={clsx(styles.header)}>
                <h3>This is a card.</h3>
            </div>
            <div className={clsx(styles.main)}>
                <p>Sint id enim quis aliquip tempor fugiat voluptate <a href="#">do occaecat aliquip pariatur ipsum</a>. Dolor minim id id excepteur Lorem officia id do. Quis consectetur non nisi veniam elit.</p>
            </div>
            <div className={clsx(styles.buttons)}>
                <Button></Button>
                <Button></Button>
            </div>
            
        </div>
    );
}

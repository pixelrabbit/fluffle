import Button from "./../button/button";
import styles from "./card.module.css";
import { clsx } from 'clsx';

export default function Card({
    heading = "",
    buttons = [],
    children
}: {
    heading?: string,
    buttons?: {
        href: string,
        type?: string,
        text: string
    }[],
    children: React.ReactNode
}) {
    return (
        <div className={clsx(styles.card)}>
            <div className={clsx(styles.header)}>
                <h3>{heading}</h3>
            </div>
            <div className={clsx(styles.main)}>
                {children}
            </div>
            {buttons.length > 0 &&
                <div className={clsx(styles.buttons)}>
                    {buttons.map((button, index) => (
                        <Button key={index} href={button.href} type={button.type} text={button.text}></Button>
                    ))}
                </div>
            }
        </div>
    );
}

import { Button, buttonProps } from "./../button/button";
import styles from "./card.module.css";
import { clsx } from 'clsx';

export interface cardProps {
    palette?: "green" | "gray"
    heading?: string,
    buttons?: buttonProps[],
    children: React.ReactNode
}

export function Card({
    palette = "green",
    heading = "",
    buttons = [],
    children
}: cardProps) {
    return (
        <div className={clsx(
            styles.card,
            `palette--${palette}`
            )}>
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
export default Card;
import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';


export interface buttonProps {
    type?: "primary" | "secondary",
    href: string,
    text: string
};
export function Button({
    type = "primary",
    href = "#",
    text
}: buttonProps) {
    return (
        <Link href={href} className={clsx(
            styles.button,
            styles[type]
        )}>
            <div className={styles.inner}>
                <span>{text}</span>
            </div>
        </Link>
    );
}
export default Button;
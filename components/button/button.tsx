import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';

export default function Button({
    type = "primary",
    href,
    text
}: {
    type?: "primary"|"secondary",
    href: string,
    text: string
}) {
    return (
        <Link href={href} className={clsx(
            styles.button,
            styles[type]
        )}><span>{text}</span></Link>
    );
}

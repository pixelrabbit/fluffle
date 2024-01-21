import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';

export default function Button({
    type = "primary",
    children
}: {
    type: string
    children: React.ReactNode
}) {
    return (
        <Link href="#" className={clsx(
            styles.button,
            styles[type]
        )}><span>{children}</span></Link>
    );
}

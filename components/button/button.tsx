import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';

export default function Button({
    type = "primary",
    href,
    children
}: {
    type?: string,
    href: string,
    children: React.ReactNode
}) {
    return (
        <Link href={href} className={clsx(
            styles.button,
            styles[type]
        )}><span>{children}</span></Link>
    );
}

import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';

export default function Button({
    type= "primary",
    target,
    children
}) {
    return (
       <Link href="#" target={target} className={clsx(
        styles.button,
        styles[type]
        )}><span>{children}</span></Link> 
    );
}

import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';

export default function Button({
    text = "",
    type = "primary"
}) {
    return (
       <Link href="#" className={clsx(
        styles.button,
        styles[type]
        )}><span>{text} here</span></Link> 
    );
}

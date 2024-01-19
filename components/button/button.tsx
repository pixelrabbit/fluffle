import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';

export default function Button() {
    return (
       <Link href="#" className={clsx(styles.button)}><span>link text</span></Link> 
    );
}

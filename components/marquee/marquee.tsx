
import styles from "./marquee.module.scss";
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import rabbit from '../../public/rabbit.png';

export function Marquee({
}: {
}) {
    return (
        <div className={clsx(
            styles.marquee
            )}>
            <Image className={styles.fore} src={rabbit} alt="" />
            <div className={clsx("container",styles.container)}>
                <h1>Fluffle <span>DS</span></h1>
                <nav>
                    <Link href="/">What is this?</Link>
                    <Link href="/about">Who am I?</Link>
                </nav>
            </div>
        </div>
    );
}
export default Marquee;
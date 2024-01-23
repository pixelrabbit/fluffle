
import styles from "./marquee.module.scss";
import { clsx } from 'clsx';
import Image from 'next/image';

import rabbit from '../../public/rabbit.png';

export function Marquee({
    palette = "green",
    heading = "",
    buttons = [],
    children
}: {
    palette?: "green" | "gray"
    heading?: string,
    buttons?: {
        href: string,
        type?: "primary" | "secondary",
        text: string
    }[],
    children: React.ReactNode
}) {
    return (
        <div className={clsx(
            styles.marquee
            )}>
            <Image className={styles.fore} src={rabbit} alt="" />
            <div className="container">
                <h1>Fluffle DS</h1>
            </div>
        </div>
    );
}
export default Marquee;
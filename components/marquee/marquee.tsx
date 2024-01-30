'use client'

import styles from "./marquee.module.scss";
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import rabbit from '../../public/rabbit.png';

export function Marquee({
}: {
}) {
    const pathname = usePathname();
    const links = [{
        text: "What is this?",
        href: "/"
    },{
        text: "Who am I?",
        href: "/about"
    }];

    return (
        <div className={clsx(
            styles.marquee
            )}>
            <div className={clsx("container",styles.container)}>
                <h1>Fluffle <span>DS</span></h1>
                <nav>
                    {links.map((link, i) => (
                        <Link key={`sitenav_${i}`} className={clsx(pathname == link.href && styles.active)} href={link.href}><span>{link.text}</span></Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
export default Marquee;
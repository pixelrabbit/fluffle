import Link from 'next/link';
import styles from "./button.module.scss";
import { clsx } from 'clsx';

// https://storybook.js.org/addons/storybook-addon-react-docgen
// must use named export fuction and default for storybook to auto-generate controls
export function Button({
    type = "primary",
    href = "#",
    text
}: {
    type?: "primary" | "secondary",
    href: string,
    text: string
}) {
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
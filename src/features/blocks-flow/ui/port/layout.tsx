import { Ref } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.css';

export function Layout({
    text,
    type,
    isSelected,
    isCanEndSelection,
    onTargetClick,
    portRef,
}: {
    text: string;
    type: 'input' | 'output';
    isSelected?: boolean;
    isCanEndSelection?: boolean;
    onTargetClick?: () => void;
    portRef: Ref<HTMLButtonElement>;
}) {
    return (
        <div
            className={clsx(styles.port, styles[type], {
                [styles.selected]: isSelected,
                [styles.canEndSelection]: isCanEndSelection,
            })}
        >
            <div className={styles.text}>{text}</div>
            <button
                ref={portRef}
                className={styles.target}
                onClick={onTargetClick}
            />
        </div>
    );
}

import clsx from 'clsx';
import styles from './styles.module.css';
import { Ref } from 'react';

export function Layout({
    text,
    type,
    isCanEndSelection,
    isSelected,
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
    console.log(isSelected);
    console.log(isCanEndSelection);

    return (
        <div
            className={clsx(styles.port, styles[type], {
                [styles.selected]: isSelected,
                [styles.canEndSelection]: isCanEndSelection,
            })}
        >
            <div className={styles.text}>{text}</div>
            <button ref={portRef} onClick={onTargetClick} className={styles.target} />
        </div>
    );
}

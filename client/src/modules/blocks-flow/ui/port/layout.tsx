import clsx from 'clsx';
import styles from './styles.module.css';
import { useCallback } from 'react';
import { Position } from '../../domain/position';

export function Layout({
    text,
    type,
    isCanEndSelection,
    isSelected,
    onTargetClick,
    id,
    onChangePosition,
}: {
    text: string;
    type: 'input' | 'output';
    isSelected?: boolean;
    isCanEndSelection?: boolean;
    onTargetClick?: () => void;
    id: string;
    onChangePosition: (id: string, position?: Position) => void;
}) {
    const callbackRef = useCallback(
        (ref: HTMLButtonElement | null) => {
            if (ref) {
                onChangePosition?.(id, {
                    x: ref.offsetLeft + ref.offsetWidth / 2,
                    y: ref.offsetTop + ref.offsetHeight / 2,
                });
            } else {
                onChangePosition?.(id);
            }
        },
        [id, onChangePosition],
    );

    return (
        <div
            className={clsx(styles.port, styles[type], {
                [styles.selected]: isSelected,
                [styles.canEndSelection]: isCanEndSelection,
            })}
        >
            <div className={styles.text}>{text}</div>
            <button ref={callbackRef} onClick={onTargetClick} className={styles.target} />
        </div>
    );
}

import { FlowPosition } from '../../domain/types/flow';

import styles from './styles.module.css';

export function Layout({
    arrows,
    blocks,
    onFieldClick,
}: {
    blocks: React.ReactNode;
    arrows: React.ReactNode;
    onFieldClick: (position: FlowPosition) => void;
}) {
    const handleFieldClick = (e: React.MouseEvent) => {
        onFieldClick({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className={styles.root}>
            <div onClick={handleFieldClick} className={styles.field} />
            {blocks}
            <svg className={styles.arrows}>{arrows}</svg>
        </div>
    );
}

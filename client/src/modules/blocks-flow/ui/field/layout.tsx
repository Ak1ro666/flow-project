import { FlowPosition } from '../../domain/flow';
import styles from './styles.module.css';

export function Layout({ onClick }: { onClick: ({ x, y }: FlowPosition) => void }) {
    const handleClick = (e: React.MouseEvent) => {
        onClick({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return <div onClick={handleClick} className={styles.root}></div>;
}

import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ROUTE_PATHS } from '@/kernel/router';

export function Layout({
    id,
    name,
    onDelete,
}: {
    id: string;
    name: string;
    onDelete?: () => void;
}) {
    return (
        <div className={styles.root}>
            <div className={styles.name}>{name}</div>
            <Link className={styles.link} to={`${ROUTE_PATHS.process}${id}`}></Link>
            <button className={styles.deleteBtn} onClick={onDelete}>
                delete
            </button>
        </div>
    );
}

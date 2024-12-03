import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export function Layout({
    name,
    onDelete,
    id,
}: {
    name: string;
    id: string;
    onDelete?: () => void;
}) {
    return (
        <div className={styles.root}>
            <div className={styles.name}>{name}</div>
            <Link className={styles.link} to={`/process/${id}`} />
            <button onClick={onDelete} className={styles.deleteBtn}>
                delete
            </button>
        </div>
    );
}

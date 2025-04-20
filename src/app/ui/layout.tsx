import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

export function Layout() {
    return (
        <div className={styles.root}>
            <Outlet />
        </div>
    );
}

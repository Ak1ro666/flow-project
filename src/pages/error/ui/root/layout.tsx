import styles from './styles.module.css';

export function Layout({ title, goBack }: { title: string; goBack: () => void }) {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h1>{title}</h1>
                <button onClick={goBack}>Go to main page</button>
            </div>
        </div>
    );
}

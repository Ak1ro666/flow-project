import styles from './styles.module.css';

export function Layout({
    q,
    onQChange,
}: {
    q: string;
    onQChange: (q: string) => void;
}) {
    return (
        <div className={styles.root}>
            <input
                name="name"
                className={styles.input}
                placeholder="process name"
                onChange={(e) => onQChange(e.target.value)}
                value={q}
                type="text"
                required
            />
        </div>
    );
}

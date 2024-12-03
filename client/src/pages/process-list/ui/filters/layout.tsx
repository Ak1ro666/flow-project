import styles from './styles.module.css';

export function Layout({
    name,
    onNameChange,
}: {
    name: string;
    onNameChange: (name: string) => void;
}) {
    return (
        <div className={styles.root}>
            <input
                className={styles.input}
                name={name}
                onChange={(e) => onNameChange(e.target.value)}
                type="text"
                placeholder="search by name..."
                required
            />
        </div>
    );
}

import styles from './styles.module.css';

export function Layout({ onSubmit }: { onSubmit: (name: string) => void }) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fromData = new FormData(e.currentTarget);
        const name = fromData.get('name') as string;
        onSubmit(name);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.root}>
            <input
                className={styles.input}
                name="name"
                type="text"
                placeholder="process name"
                required
            />
            <button className={styles.btn}>create</button>
        </form>
    );
}

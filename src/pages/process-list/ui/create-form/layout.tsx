import { FormEvent } from 'react';
import styles from './styles.module.css';

export function Layout({ onSubmit }: { onSubmit: (name: string) => void }) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        onSubmit(name);
        e.currentTarget.reset();
    };

    return (
        <form className={styles.root} onSubmit={handleSubmit}>
            <input
                name="name"
                className={styles.input}
                placeholder="process name"
                type="text"
                required
            />
            <button className={styles.btn}>create</button>
        </form>
    );
}

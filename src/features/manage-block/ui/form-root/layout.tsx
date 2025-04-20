import styles from './styles.module.css';

export function Layout({
    onSubmit,
    children,
    id,
}: {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    children: React.ReactNode;
    id: string;
}) {
    return (
        <form onSubmit={onSubmit} className={styles.root} id={id}>
            {children}
        </form>
    );
}

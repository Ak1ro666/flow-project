import styles from './styles.module.css';

export function Layout({
    onSubmit,
    formId,
    children,
}: {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    formId: string;
    children: React.ReactNode;
}) {
    return (
        <form className={styles.root} onSubmit={onSubmit} id={formId}>
            {children}
        </form>
    );
}

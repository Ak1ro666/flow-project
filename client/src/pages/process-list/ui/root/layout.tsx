import styles from './styles.module.css';

export function Layout({
    createForm,
    cards,
    filters,
    isLoading,
}: {
    createForm: React.ReactNode;
    cards: React.ReactNode;
    filters: React.ReactNode;
    isLoading: boolean;
}) {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>process list page</h1>
            {createForm}
            {filters}
            <div className={styles.list}>
                {cards}
                {isLoading && <div className={styles.loading}>loading...</div>}
            </div>
        </div>
    );
}

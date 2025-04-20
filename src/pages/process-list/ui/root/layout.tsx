import styles from './styles.module.css';

export function Layout({
    createForm,
    cards,
    isLoading,
    filters,
}: {
    createForm: React.ReactNode;
    cards: React.ReactNode;
    isLoading?: boolean;
    filters: React.ReactNode;
}) {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Process list page</h1>
            {createForm}
            {filters}
            <div className={styles.list}>
                {cards}
                {isLoading && <p className={styles.loader}>Loading...</p>}
            </div>
        </div>
    );
}

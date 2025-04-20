import styles from './styles.module.css';

export function Layout({
    processTitle,
    isLoading,
    flow,
    modals,
}: {
    processTitle?: string;
    isLoading: boolean;
    flow: React.ReactNode;
    modals: React.ReactNode;
}) {
    return (
        <div className={styles.root}>
            {isLoading && <p className={styles.loader}>Loading...</p>}
            {flow}
            {modals}
            {processTitle && <h1 className={styles.title}>Process: {processTitle}</h1>}
        </div>
    );
}

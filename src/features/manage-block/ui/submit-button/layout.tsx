import styles from './styles.module.css';

export function Layout({ formId }: { formId: string }) {
    return (
        <button form={formId} className={styles.root}>
            Сохранить
        </button>
    );
}

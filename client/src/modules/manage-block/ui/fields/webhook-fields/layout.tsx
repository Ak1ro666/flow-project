import { WebhooksFormData } from '../../../view-model/use-create-form';
import styles from './styles.module.css';

export function Layout({
    formData,
    onChangeFormData,
}: {
    formData: WebhooksFormData;
    onChangeFormData: (data: WebhooksFormData) => void;
}) {
    return (
        <>
            <input
                type="text"
                name="url"
                onChange={(e) => onChangeFormData({ ...formData, url: e.target.value })}
                className={styles.input}
                value={formData.url}
                placeholder="url"
            />
            <select
                name="method"
                className={styles.input}
                value={formData.method}
                onChange={(e) => onChangeFormData({ ...formData, method: e.target.value })}
            >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
            </select>
        </>
    );
}

import { BlockTypes } from '../../../model/types';
import { FormData } from '../../../view-model/use-create-form';
import styles from './styles.module.css';

export function Layout({
    formData,
    handleNameChange,
    handleTypeChange,
}: {
    formData: FormData;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
    return (
        <>
            <select
                className={styles.input}
                name="type"
                value={formData.type}
                onChange={handleTypeChange}
                required
            >
                {Object.values(BlockTypes).map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <input
                className={styles.input}
                type="text"
                placeholder="block name"
                name={formData.name}
                value={formData.name}
                onChange={handleNameChange}
                required
            />
        </>
    );
}

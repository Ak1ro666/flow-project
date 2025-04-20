import styles from './styles.module.css';
import { BlockTypes } from '../../../domain/types';
import { FormData } from '../../../view-model/use-create-form';
import { ChangeEvent } from 'react';

export function Layout({
    formData,
    onTypeChange,
    onNameChange,
}: {
    formData: FormData;
    onTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    onNameChange: (name: string) => void;
}) {
    return (
        <>
            <select
                name="type"
                className={styles.input}
                value={formData.type}
                onChange={onTypeChange}
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
                name="name"
                placeholder="block name"
                required
                value={formData.name}
                onChange={(e) => onNameChange(e.target.value)}
            />
        </>
    );
}

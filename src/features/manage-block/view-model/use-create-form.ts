import { ChangeEvent, FormEvent, useState } from 'react';
import { BlockType, BlockTypes } from '../domain/types';

export type FormData = {
    type: BlockType;
    data: string;
    name: string;
};

type WebhookFormData = {
    url: string;
    method: string;
};

export function useCreateForm(onSubmit?: (formData: FormData) => void) {
    const [formData, setFormData] = useState<FormData>({
        type: BlockTypes.Start,
        data: '{}',
        name: 'Start',
    });

    const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const type = e.currentTarget.value as BlockType;
        setFormData((prev) => ({
            ...prev,
            type,
            data: '{}',
            name: type,
        }));
    };

    const handleNameChange = (name: string) => {
        setFormData((prev) => ({ ...prev, name }));
    };

    const handleDataChange = (data: string) => {
        setFormData((prev) => ({ ...prev, data }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.(formData);
    };

    const webhookFormData: WebhookFormData =
        formData.type === BlockTypes.Webhook ? JSON.parse(formData.data) : undefined;

    const handleChangeWebhookFormData = (e: WebhookFormData) => {
        setFormData((prev) => ({ ...prev, data: JSON.stringify(e) }));
    };

    return {
        formData,
        handleTypeChange,
        handleSubmit,
        handleNameChange,
        handleDataChange,
        webhookFormData,
        handleChangeWebhookFormData,
    } as const;
}

import { useState } from 'react';
import { BlockTypes } from '../model/types';

export type FormData = {
    name: string;
    type: string;
    data: string;
};

export type WebhooksFormData = {
    url?: string;
    method?: string;
};

export function useCreateForm(onSubmit: (data: FormData) => void) {
    const [formData, setFormData] = useState<FormData>({
        name: 'start',
        type: BlockTypes.Start,
        data: '{}',
    });

    const webhookFormData: WebhooksFormData =
        formData.type === 'webhook' ? JSON.parse(formData.data) : undefined;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.currentTarget.value;
        setFormData({ ...formData, type, data: '{}', name: type });
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, name: e.target.value });
    };

    const handleDataChange = (data: string) => {
        setFormData({ ...formData, data });
    };

    const handleChangeWebhookFormData = (e: WebhooksFormData) => {
        setFormData({ ...formData, data: JSON.stringify(e) });
    };

    return {
        formData,
        handleTypeChange,
        handleSubmit,
        handleNameChange,
        handleDataChange,
        handleChangeWebhookFormData,
        webhookFormData,
    };
}

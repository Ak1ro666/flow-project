import { useCreateBlock } from '../model/use-create-block';
import { DefaultiFields } from '../ui/fields/default-fields';
import { WebhookFields } from '../ui/fields/webhook-fields';
import { FormRoot } from '../ui/form-root';
import { useCreateForm } from '../view-model/use-create-form';

export function CreateForm({
    onSuccess,
    formId,
    processId,
}: {
    onSuccess?: () => void;
    formId: string;
    processId: string;
}) {
    const createForm = useCreateForm((data) =>
        createBlock.submitCreate({ processId, ...data }).then(onSuccess),
    );
    const createBlock = useCreateBlock();

    return (
        <FormRoot onSubmit={createForm.handleSubmit} formId={formId}>
            <DefaultiFields
                formData={createForm.formData}
                handleNameChange={createForm.handleNameChange}
                handleTypeChange={createForm.handleTypeChange}
            />
            {createForm.webhookFormData && (
                <WebhookFields
                    onChangeFormData={createForm.handleChangeWebhookFormData}
                    formData={createForm.webhookFormData}
                />
            )}
        </FormRoot>
    );
}

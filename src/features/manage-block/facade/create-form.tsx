import { WebhookFields } from '../ui/fields/webhook-fields';
import { useCreateForm } from '../view-model/use-create-form';
import { DefaultFields } from '../ui/fields/default-fields';
import { FormRoot } from '../ui/form-root';
import { useCreateBlock } from '../model/use-create-block';

export function CreateForm({
    formId,
    processId,
    onSuccess,
}: {
    formId: string;
    processId: string;
    onSuccess?: () => void;
}) {
    const submitCreate = useCreateBlock((store) => store.submitCreate);
    const createForm = useCreateForm((data) =>
        submitCreate({ processId, ...data }).then(onSuccess),
    );

    return (
        <FormRoot onSubmit={createForm.handleSubmit} id={formId}>
            <DefaultFields
                formData={createForm.formData}
                onNameChange={createForm.handleNameChange}
                onTypeChange={createForm.handleTypeChange}
            />
            {createForm.webhookFormData && (
                <WebhookFields
                    formData={createForm.webhookFormData}
                    onChangeFormData={createForm.handleChangeWebhookFormData}
                />
            )}
        </FormRoot>
    );
}

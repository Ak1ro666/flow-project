import { useId } from 'react';
import { Modal } from '../ui/modal';
import { SubmitButton } from '../ui/submit-button';
import { CreateForm } from './create-form';
import { useCreateBlock } from '../model/use-create-block';

export function CreateBlockModal({
    processId,
    onSuccess,
}: {
    processId: string;
    onSuccess?: () => void;
}) {
    const formId = useId();
    const createBlock = useCreateBlock();

    if (!createBlock.createPosition) {
        return null;
    }

    return (
        <Modal
            onClose={createBlock.cancelCreate}
            title="Create block"
            body={<CreateForm processId={processId} formId={formId} onSuccess={onSuccess} />}
            footer={<SubmitButton formId={formId} />}
        />
    );
}

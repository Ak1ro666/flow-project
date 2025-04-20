import { useId } from 'react';

import { useKeyboard } from '@/shared/lib/keyboardManager';

import { Modal } from '../ui/root';
import { SubmitButton } from '../ui/submit-button';
import { useCreateBlock } from '../model/use-create-block';
import { CreateForm } from './create-form';

export function CreateBlockModal({
    processId,
    onSuccess,
}: {
    processId: string;
    onSuccess?: () => void;
}) {
    const formId = useId();
    const createBlock = useCreateBlock();
    useKeyboard({
        key: 'Escape',
        callback: createBlock.cancelCreate,
    });

    if (!createBlock.isCreating) {
        return null;
    }

    return (
        <Modal
            title="Create block"
            onClose={createBlock.cancelCreate}
            body={
                <CreateForm
                    formId={formId}
                    processId={processId}
                    onSuccess={onSuccess}
                />
            }
            footer={<SubmitButton formId={formId} />}
        />
    );
}

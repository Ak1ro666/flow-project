import { BlocksFlow } from '@/features/blocks-flow';
import { CreateBlockModal, useStartCreate } from '@/features/manage-block';
import { useProcess } from './model/use-process';
import { useProcessId } from './model/use-processId';
import { Root } from './ui/root';

export function Page() {
    const processId = useProcessId();
    const process = useProcess(processId);
    const startCreate = useStartCreate();

    return (
        <Root
            isLoading={process.isLoading}
            processTitle={process.data?.name}
            flow={
                process.data && (
                    <BlocksFlow
                        onChanged={process.refetch}
                        onFlowClick={startCreate}
                        blocks={process.data.blocks}
                    />
                )
            }
            modals={
                <CreateBlockModal
                    processId={processId}
                    onSuccess={process.refetch}
                />
            }
        />
    );
}

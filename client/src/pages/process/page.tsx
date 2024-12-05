import { BlocksFlow } from '../../modules/blocks-flow';
import { CreateBlockModal, useStartCreate } from '../../modules/manage-block';
import { useProcess } from './model/use-process';
import { useProcessId } from './model/use-process-id';
import { Root } from './ui/root';

export function Page() {
    const processId = useProcessId();
    const process = useProcess(processId);
    const startCreate = useStartCreate();

    console.log(process.data);

    return (
        <Root
            flow={
                process.data && (
                    <BlocksFlow
                        onChanged={process.refetch}
                        onFlowClick={startCreate}
                        blocks={process.data.blocks}
                    />
                )
            }
            process={process.data}
            isLoading={process.isLoading}
            modals={<CreateBlockModal onSuccess={process.refetch} processId={processId} />}
        />
    );
}

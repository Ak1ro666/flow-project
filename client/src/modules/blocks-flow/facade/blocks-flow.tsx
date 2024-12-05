import { BlockConfig } from '../domain/block';
import { FlowPosition } from '../domain/flow';
import { useBlockTypes } from '../model/use-block-types';
import { useCreateRelation } from '../model/use-create-relation';
import { Arrows } from '../ui/arrows';
import { BlockView } from '../ui/block';
import { Field } from '../ui/field';
import { Root } from '../ui/root';
import { usePortPositions } from '../view-model/use-port-positions';
import { Port } from './port';

export function BlocksFlow({
    blocks,
    onFlowClick,
    onChanged,
}: {
    blocks: BlockConfig[];
    onFlowClick: (position: FlowPosition) => void;
    onChanged?: () => void;
}) {
    const blockTypesRecord = useBlockTypes((state) => state.getData());
    const isSelection = useCreateRelation((state) => state.isSelection());
    const unselectPort = useCreateRelation((state) => state.unselectPort);
    const portPositions = usePortPositions();

    return (
        <Root
            field={<Field onClick={isSelection ? unselectPort : onFlowClick} />}
            arrows={<Arrows blocks={blocks} portPositions={portPositions} />}
            blocks={blocks?.map((block) => (
                <BlockView
                    key={block.id}
                    blockTypesRecord={blockTypesRecord}
                    block={block}
                    renderPort={(type, config) => (
                        <Port
                            key={block.id}
                            blockId={block.id}
                            blocks={blocks}
                            config={config}
                            type={type}
                            onCreateArrow={onChanged}
                        />
                    )}
                />
            ))}
        />
    );
}

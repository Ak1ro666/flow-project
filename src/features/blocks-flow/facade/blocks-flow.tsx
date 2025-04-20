import { type Block } from '../domain/block';
import type { FlowPosition } from '../domain/types/flow';
import { useBlockTypes } from '../model/use-block-types';
import { useCreateRelation } from '../model/use-create-relation';
import { BlockView } from '../ui/block';
import { Root } from '../ui/root';
import { Arrows } from './arrows';
import { Port } from './port';

export function BlocksFlow({
    blocks,
    onFlowClick,
    onChanged,
}: {
    blocks: Block[];
    onFlowClick: (position: FlowPosition) => void;
    onChanged?: () => void;
}) {
    const isSelection = useCreateRelation().isSelection();
    const unselectPort = useCreateRelation().unselectPort;
    const getBlockTypes = useBlockTypes((state) => state.getData);

    return (
        <Root
            onFieldClick={isSelection ? unselectPort : onFlowClick}
            arrows={<Arrows blocks={blocks} />}
            blocks={blocks?.map((block) => (
                <BlockView
                    block={block}
                    blockTypesRecord={getBlockTypes()}
                    key={block.id}
                    renderPort={(type, config) => (
                        <Port
                            key={block.id}
                            type={type}
                            blockId={block.id}
                            config={config}
                            blocks={blocks}
                            onCreateArrow={onChanged}
                        />
                    )}
                />
            ))}
        />
    );
}

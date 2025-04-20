import type { Block, BlockId } from '../domain/block';
import { PortConfig } from '../domain/block-types';
import { getPortId } from '../domain/port';
import { useCreateRelation } from '../model/use-create-relation';
import { Port as PortView } from '../ui/port';
import { usePortPositionsReader } from '../view-model/use-port-positions';

export function Port({
    config,
    type,
    blockId,
    blocks,
    onCreateArrow,
}: {
    type: 'input' | 'output';
    blockId: BlockId;
    config: PortConfig;
    blocks: Block[];
    onCreateArrow?: () => void;
}) {
    const portInfo = {
        blockId,
        port: config.port,
        type,
    };
    const id = getPortId(portInfo);
    const isSelectedPort = useCreateRelation((state) =>
        state.getIsSelectedPort(portInfo),
    );
    const isCanEndSelection = useCreateRelation((state) =>
        state.getIsCanEndSelection(portInfo, blocks),
    );
    const selectPort = useCreateRelation((state) => state.selectPort);
    const portRef = usePortPositionsReader(id);

    return (
        <PortView
            key={id}
            portRef={portRef}
            text={config.label}
            type={type}
            isSelected={isSelectedPort}
            isCanEndSelection={isCanEndSelection}
            onTargetClick={() => selectPort(portInfo, blocks, onCreateArrow)}
        />
    );
}

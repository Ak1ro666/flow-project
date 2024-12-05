import { BlockConfig } from '../domain/block';
import { PortConfig } from '../domain/block-types';
import { getPortId } from '../domain/port';
import { useCreateRelation } from '../model/use-create-relation';
import { PortView } from '../ui/port';
import { usePortPositionsReader } from '../view-model/use-port-positions';

export function Port({
    blockId,
    type,
    config,
    blocks,
    onCreateArrow,
}: {
    blockId: string;
    type: 'input' | 'output';
    config: PortConfig;
    blocks: BlockConfig[];
    onCreateArrow?: () => void;
}) {
    const portInfo = {
        blockId,
        type,
        port: config.port,
    };

    const id = getPortId(portInfo);
    const isSelectedPort = useCreateRelation((state) => state.getIsSelectedPort(portInfo));
    const isCanEndSelection = useCreateRelation((state) =>
        state.getIsCanEndSelection(portInfo, blocks),
    );
    const selectPort = useCreateRelation((state) => state.selectPort);
    const portRef = usePortPositionsReader(id);

    return (
        <PortView
            isSelected={isSelectedPort}
            isCanEndSelection={isCanEndSelection}
            type={type}
            text={config.label}
            onTargetClick={() => selectPort(portInfo, blocks, onCreateArrow)}
            portRef={portRef}
        />
    );
}

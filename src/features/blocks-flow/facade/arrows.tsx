import {
    getBlockRelations,
    getBlocksRecord,
    type Block,
} from '../domain/block';
import { useSelected } from '../model/use-selected';
import { ArrowUi } from '../ui/arrow';
import { usePortPositions } from '../view-model/use-port-positions';

export function Arrows({ blocks }: { blocks: Block[] }) {
    const portPositions = usePortPositions();
    const record = getBlocksRecord(blocks);
    const selected = useSelected((state) => state.selectedRelations);
    const toggleRelation = useSelected((state) => state.toggleRelation);

    return getBlockRelations(blocks).map((relation) => (
        <ArrowUi
            relation={relation}
            portPositions={portPositions}
            blocksRecord={record}
            isSelection={selected[relation.id]}
            onClick={() => toggleRelation(relation.id)}
        />
    ));
}
